import { useState } from 'react';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  CheckCircle,
  Clock,
  XCircle,
  ExternalLink,
  Star,
  TrendingUp,
  AlertCircle,
  Target,
  Award,
} from 'lucide-react';
import {
  localCitations,
  getCitationStats,
  getCitationsByCategory,
  getCitationsByStatus,
  getNextActions,
  NAP_INFO,
  CITATION_CHECKLIST,
  PLATFORM_TIPS,
  estimateCitationImpact,
  type LocalCitation,
} from '../data/localCitations';

export function LocalCitationsTracker() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | LocalCitation['category']>('all');

  const stats = getCitationStats();
  const nextActions = getNextActions(10);
  const impact = estimateCitationImpact();

  const filteredCitations =
    selectedCategory === 'all'
      ? localCitations
      : getCitationsByCategory(selectedCategory);

  const getStatusIcon = (status: LocalCitation['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      case 'not-started':
        return <XCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: LocalCitation['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'not-started':
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getCategoryColor = (category: LocalCitation['category']) => {
    switch (category) {
      case 'essential':
        return 'bg-red-100 text-red-800';
      case 'important':
        return 'bg-orange-100 text-orange-800';
      case 'recommended':
        return 'bg-blue-100 text-blue-800';
      case 'nice-to-have':
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <>
      <SEO
        title="Tracker Citations Locales - SEO Local | Boost Activité"
        description="Suivi complet des citations locales et présence en ligne pour le référencement local."
        canonical="/admin/local-citations"
        noIndex
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl mb-4">🌍 Tracker Citations Locales</h1>
            <p className="text-gray-600">
              Suivi de toutes vos présences en ligne pour maximiser le SEO local
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Target className="w-8 h-8 text-blue-600" />
                <div className="text-right">
                  <p className="text-3xl">{stats.completed}/{stats.total}</p>
                </div>
              </div>
              <p className="text-gray-600">Citations Complétées</p>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${stats.completionRate}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">{stats.completionRate}% complété</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 text-red-600" />
                <div className="text-right">
                  <p className="text-3xl">{stats.essentialCompleted}/{stats.essential}</p>
                </div>
              </div>
              <p className="text-gray-600">Essentielles Complétées</p>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-600 h-2 rounded-full"
                  style={{ width: `${stats.essentialCompletionRate}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {stats.essentialCompletionRate}% complété
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div className="text-right">
                  <p className="text-3xl">{stats.verified}</p>
                </div>
              </div>
              <p className="text-gray-600">Citations Vérifiées</p>
              <p className="text-sm text-green-600 mt-2">
                +{stats.pendingVerification} en attente
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <div className="text-right">
                  <p className="text-3xl">{stats.notStarted}</p>
                </div>
              </div>
              <p className="text-gray-600">À Créer</p>
              <p className="text-sm text-gray-500 mt-2">Opportunités restantes</p>
            </Card>
          </div>

          {/* NAP Info */}
          <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <h2 className="text-2xl mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              NAP - À Utiliser Partout (IDENTIQUE !)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Nom</p>
                <p className="font-medium text-lg">{NAP_INFO.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Adresse</p>
                <p className="font-medium text-lg">{NAP_INFO.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Téléphone</p>
                <p className="font-medium text-lg">{NAP_INFO.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium text-lg">{NAP_INFO.email}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-600">Site Web</p>
                <p className="font-medium text-lg">{NAP_INFO.website}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-600">Description</p>
                <p className="font-medium">{NAP_INFO.description}</p>
              </div>
            </div>
          </Card>

          {/* Impact Estimé */}
          <Card className="p-6 mb-8">
            <h2 className="text-2xl mb-6">📊 Impact Estimé des Citations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <Star className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">High Impact</p>
                <p className="text-2xl mb-2">{impact.highImpact.count} citations</p>
                <p className="text-sm text-gray-600">{impact.highImpact.estimatedTraffic}</p>
                <p className="text-sm text-gray-600">{impact.highImpact.estimatedLeads}</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <Star className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">Medium Impact</p>
                <p className="text-2xl mb-2">{impact.mediumImpact.count} citations</p>
                <p className="text-sm text-gray-600">{impact.mediumImpact.estimatedTraffic}</p>
                <p className="text-sm text-gray-600">{impact.mediumImpact.estimatedLeads}</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">Low Impact</p>
                <p className="text-2xl mb-2">{impact.lowImpact.count} citations</p>
                <p className="text-sm text-gray-600">{impact.lowImpact.estimatedTraffic}</p>
                <p className="text-sm text-gray-600">{impact.lowImpact.estimatedLeads}</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-xl text-center">
              <p className="text-sm text-gray-600 mb-2">TOTAL ESTIMÉ (toutes citations)</p>
              <p className="text-2xl mb-2">{impact.total.estimatedTraffic}</p>
              <p className="text-lg text-green-700 mb-1">{impact.total.estimatedLeads}</p>
              <p className="text-xl text-green-800">{impact.total.estimatedRevenue}</p>
            </div>
          </Card>

          {/* Prochaines Actions */}
          <Card className="p-6 mb-8">
            <h2 className="text-2xl mb-6">🎯 Prochaines Actions Prioritaires</h2>
            <div className="space-y-4">
              {nextActions.map((citation, index) => (
                <div
                  key={citation.id}
                  className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:border-black transition-colors"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg">{citation.platform}</h3>
                      <Badge className={getCategoryColor(citation.category)}>
                        {citation.category}
                      </Badge>
                      <Badge variant="outline">Priority: {citation.priority}/10</Badge>
                    </div>
                    <p className="text-gray-600 mb-2">{citation.notes}</p>
                    {citation.url && (
                      <a
                        href={citation.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                      >
                        Créer la citation
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Filters */}
          <div className="flex gap-2 mb-6 flex-wrap">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-black text-white'
                  : 'bg-white border border-gray-200 hover:border-black'
              }`}
            >
              Toutes ({localCitations.length})
            </button>
            <button
              onClick={() => setSelectedCategory('essential')}
              className={`px-4 py-2 rounded-xl transition-colors ${
                selectedCategory === 'essential'
                  ? 'bg-black text-white'
                  : 'bg-white border border-gray-200 hover:border-black'
              }`}
            >
              Essentielles ({getCitationsByCategory('essential').length})
            </button>
            <button
              onClick={() => setSelectedCategory('important')}
              className={`px-4 py-2 rounded-xl transition-colors ${
                selectedCategory === 'important'
                  ? 'bg-black text-white'
                  : 'bg-white border border-gray-200 hover:border-black'
              }`}
            >
              Importantes ({getCitationsByCategory('important').length})
            </button>
            <button
              onClick={() => setSelectedCategory('recommended')}
              className={`px-4 py-2 rounded-xl transition-colors ${
                selectedCategory === 'recommended'
                  ? 'bg-black text-white'
                  : 'bg-white border border-gray-200 hover:border-black'
              }`}
            >
              Recommandées ({getCitationsByCategory('recommended').length})
            </button>
          </div>

          {/* Citations List */}
          <div className="space-y-4">
            {filteredCitations.map((citation) => (
              <Card key={citation.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {getStatusIcon(citation.status)}
                      <h3 className="text-xl">{citation.platform}</h3>
                      <Badge className={getCategoryColor(citation.category)}>
                        {citation.category}
                      </Badge>
                      <Badge className={getStatusColor(citation.status)}>
                        {citation.status}
                      </Badge>
                      <Badge variant="outline">
                        {citation.impact} impact
                      </Badge>
                      <Badge variant="outline">
                        Priority: {citation.priority}/10
                      </Badge>
                    </div>

                    {citation.notes && (
                      <p className="text-gray-600 mb-3">{citation.notes}</p>
                    )}

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      {citation.dateCreated && (
                        <span>Créé: {citation.dateCreated}</span>
                      )}
                      {citation.verificationStatus && (
                        <span>
                          Vérification: {citation.verificationStatus}
                        </span>
                      )}
                    </div>

                    {/* Platform-specific tips */}
                    {PLATFORM_TIPS[citation.id as keyof typeof PLATFORM_TIPS] && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                        <p className="text-sm mb-2">💡 Conseils pour {citation.platform}:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {PLATFORM_TIPS[citation.id as keyof typeof PLATFORM_TIPS]
                            .slice(0, 3)
                            .map((tip, index) => (
                              <li key={index}>{tip}</li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 ml-4">
                    {citation.url && (
                      <a
                        href={citation.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Ouvrir la plateforme"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Checklist */}
          <Card className="p-6 mt-8">
            <h2 className="text-2xl mb-6">✅ Checklist Citation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg mb-3">Création</h3>
                <ul className="space-y-2">
                  {CITATION_CHECKLIST.creation.map((item, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-3">Vérification</h3>
                <ul className="space-y-2 mb-6">
                  {CITATION_CHECKLIST.verification.map((item, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg mb-3">Optimisation</h3>
                <ul className="space-y-2">
                  {CITATION_CHECKLIST.optimization.map((item, index) => (
                    <li key={index} className="text-sm text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
