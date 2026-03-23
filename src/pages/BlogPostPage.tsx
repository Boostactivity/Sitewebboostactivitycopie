import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { getBlogPostBySlug, getRelatedPosts } from '../data/blogPosts';
import { generateArticleSchema } from '../utils/seo/schemas';
import { toast } from 'sonner@2.0.3';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id);

  const handleShare = (platform: string) => {
    const url = `https://boostactivity.fr/blog/${post.slug}`;
    const text = post.title;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      toast.success('Lien copié dans le presse-papiers !');
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
    }
  };

  // Générer le Schema Article pour le SEO
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: post.author.name,
  });

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.image}
        keywords={post.keywords}
        schema={articleSchema}
      />

      <div className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Category Badge */}
          <div className="mb-6">
            <Badge className="bg-resources-amber text-gray-900">
              {post.category}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime} min de lecture
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-12">
            <p className="text-gray-600">Partager :</p>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Partager sur Twitter"
            >
              <Twitter className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Partager sur Facebook"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Partager sur LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Copier le lien"
            >
              <LinkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-12">
            <ImageWithFallback
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-br from-resources-amber/10 to-services-sky/10 rounded-3xl">
            <h3 className="text-2xl mb-4">
              Besoin d'aide pour votre stratégie marketing ?
            </h3>
            <p className="text-gray-600 mb-6">
              Boost Activity vous accompagne dans la mise en place de votre stratégie de marketing digital. Contactez-nous pour un audit gratuit.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                Demander un audit gratuit
              </Button>
            </Link>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl mb-8">Articles recommandés</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <ImageWithFallback
                          src={relatedPost.image}
                          alt={relatedPost.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                          <Clock className="w-4 h-4" />
                          {relatedPost.readingTime} min
                        </div>

                        <h3 className="text-xl mb-3 group-hover:text-resources-amber transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>

                        <p className="text-gray-600 line-clamp-3 flex-1">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}