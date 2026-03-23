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

    console.log('📨 Contact form submission received:', { firstName, lastName, email });

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      console.error('❌ Missing required fields');
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

    console.log('✅ Contact saved to database:', contactId);

    // Send email via Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      console.error('⚠️ CRITICAL: RESEND_API_KEY not set in environment variables');
      return c.json({ 
        success: true, 
        message: 'Form submitted successfully but email not sent (API key missing)',
        contactId,
        warning: 'Email not configured'
      });
    }

    try {
      console.log('🔄 Attempting to send email via Resend...');
      
      const emailPayload = {
        from: 'Boost Activity <onboarding@resend.dev>',
        to: ['boostactivityfr@gmail.com'],
        subject: `🚀 Nouveau contact : ${firstName} ${lastName}`,
        html: `
          <!DOCTYPE html>
          <html lang="fr">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #374151;
                background-color: #f9fafb;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 40px auto;
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 700;
              }
              .content {
                padding: 40px 30px;
              }
              .field {
                margin-bottom: 24px;
                padding-bottom: 24px;
                border-bottom: 1px solid #e5e7eb;
              }
              .field:last-child {
                border-bottom: none;
              }
              .label {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: #9ca3af;
                font-weight: 600;
                margin-bottom: 8px;
              }
              .value {
                font-size: 16px;
                color: #111827;
                font-weight: 500;
              }
              .message-box {
                background: #f9fafb;
                border-left: 4px solid #667eea;
                padding: 16px;
                border-radius: 8px;
                margin-top: 8px;
              }
              .footer {
                background: #f9fafb;
                padding: 20px 30px;
                text-align: center;
                font-size: 12px;
                color: #6b7280;
                border-top: 1px solid #e5e7eb;
              }
              .cta-button {
                display: inline-block;
                margin-top: 24px;
                padding: 12px 32px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                text-decoration: none;
                border-radius: 8px;
                font-weight: 600;
                font-size: 14px;
              }
              .highlight {
                display: inline-block;
                background: #fef3c7;
                padding: 4px 8px;
                border-radius: 4px;
                font-weight: 600;
                color: #92400e;
                margin-left: 8px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 Nouvelle Demande de Contact</h1>
              </div>
              
              <div class="content">
                <p style="margin-top: 0; font-size: 16px; color: #374151;">
                  Bonjour,<br><br>
                  Vous avez reçu une nouvelle demande de contact via le formulaire de <strong>boostactivity.fr</strong>.
                </p>

                <div class="field">
                  <div class="label">👤 Nom complet</div>
                  <div class="value">${firstName} ${lastName}</div>
                </div>

                <div class="field">
                  <div class="label">✉️ Email</div>
                  <div class="value">
                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                  </div>
                </div>

                ${phone ? `
                <div class="field">
                  <div class="label">📱 Téléphone</div>
                  <div class="value">
                    <a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a>
                    <a href="https://wa.me/${phone.replace(/\s/g, '')}" style="margin-left: 12px; font-size: 14px; color: #25D366; text-decoration: none;">💬 WhatsApp</a>
                  </div>
                </div>
                ` : ''}

                ${company ? `
                <div class="field">
                  <div class="label">🏢 Entreprise</div>
                  <div class="value">${company}</div>
                </div>
                ` : ''}

                ${budget ? `
                <div class="field">
                  <div class="label">💰 Budget approximatif</div>
                  <div class="value">
                    ${budget}
                    ${parseInt(budget.replace(/\D/g, '')) > 5000 ? '<span class="highlight">Budget Premium</span>' : ''}
                  </div>
                </div>
                ` : ''}

                <div class="field">
                  <div class="label">💬 Message</div>
                  <div class="message-box">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>

                <div style="text-align: center; margin-top: 32px;">
                  <a href="mailto:${email}" class="cta-button">
                    📧 Répondre par Email
                  </a>
                  ${phone ? `
                  <a href="https://wa.me/${phone.replace(/\s/g, '')}?text=Bonjour%20${firstName}%2C%20merci%20pour%20votre%20demande%20sur%20Boost%20Activity" class="cta-button" style="margin-left: 12px; background: #25D366;">
                    💬 Répondre sur WhatsApp
                  </a>
                  ` : ''}
                </div>
              </div>

              <div class="footer">
                📅 Demande reçue le <strong>${new Date(timestamp).toLocaleDateString('fr-FR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</strong>
                <br><br>
                📍 <a href="https://boostactivity.fr" style="color: #667eea; text-decoration: none;">boostactivity.fr</a> | 
                📧 boostactivityfr@gmail.com | 
                📱 +33 6 60 96 85 16
              </div>
            </div>
          </body>
          </html>
        `,
      };

      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.text();
        console.error('❌ Resend API error response:', emailResponse.status, errorData);
        throw new Error(`Email sending failed (${emailResponse.status}): ${errorData}`);
      }

      const emailData = await emailResponse.json();
      console.log('✅ Email sent successfully via Resend:', emailData);

    } catch (emailError) {
      console.error('❌ Error sending email:', emailError);
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