import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-bc3c2c3d/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-bc3c2c3d/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { firstName, lastName, email, phone, company, message, budget } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Store in database
    const timestamp = new Date().toISOString();
    const contactId = `contact_${Date.now()}`;
    
    await kv.set(contactId, {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
      budget,
      timestamp,
      status: 'new'
    });

    // Send email via Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      console.log('Warning: RESEND_API_KEY not set, email not sent');
      return c.json({ 
        success: true, 
        message: 'Form submitted successfully (email not configured)',
        contactId 
      });
    }

    try {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Boost Activity <onboarding@resend.dev>', // You'll need to update this with your verified domain
          to: ['boostactivityfr@gmail.com'],
          subject: `🚀 Nouveau contact : ${firstName} ${lastName}`,
          html: `
            <h2>Nouvelle demande de contact</h2>
            <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
            <p><strong>Email :</strong> ${email}</p>
            ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ''}
            ${budget ? `<p><strong>Budget :</strong> ${budget}</p>` : ''}
            <p><strong>Message :</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Reçu le ${new Date(timestamp).toLocaleString('fr-FR')}</small></p>
          `,
        }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.text();
        console.error('Resend API error:', errorData);
        throw new Error(`Email sending failed: ${errorData}`);
      }

      const emailData = await emailResponse.json();
      console.log('Email sent successfully:', emailData);

    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Don't fail the request if email fails - data is still stored
      return c.json({ 
        success: true, 
        message: 'Form submitted but email failed to send',
        contactId,
        emailError: String(emailError)
      });
    }

    return c.json({ 
      success: true, 
      message: 'Form submitted and email sent successfully',
      contactId 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return c.json({ error: `Failed to process contact form: ${String(error)}` }, 500);
  }
});

Deno.serve(app.fetch);