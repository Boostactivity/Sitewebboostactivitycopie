import { useState } from 'react';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  Link as LinkIcon,
  ExternalLink,
  TrendingUp,
  Target,
  CheckCircle,
  Clock,
  Mail,
  AlertCircle,
  BarChart3,
  Filter,
} from 'lucide-react';
import {
  backlinks,
  linkOpportunities,
  linkBuildingCampaigns,
  getLinkBuildingStats,
  getOpportunitiesByStatus,
  prioritizeOpportunities,
  calculateCampaignConversionRate,
  type Backlink,
  type LinkOpportunity,
} from '../data/linkBuilding';

export function LinkBuildingDashboard() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'backlinks' | 'opportunities' | 'campaigns'>('overview');
  const [opportunityFilter, setOpportunityFilter] = useState<LinkOpportunity['status'] | 'all'>('all');

  const stats = getLinkBuildingStats(backlinks, linkOpportunities);
  const prioritizedOpportunities = prioritizeOpportunities(linkOpportunities);

  const filteredOpportunities =
    opportunityFilter === 'all'
      ? prioritizedOpportunities
      : getOpportunitiesByStatus(prioritizedOpportunities, opportunityFilter);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'completed':
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'contacted':
      case 'negotiating':
        return 'bg-blue-100 text-blue-800';
      case 'new':
        return 'bg-purple-100 text-purple-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
      case 'lost':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <SEO
        title="Link Building Dashboard - Gestion des Backlinks | Boost Activité"
        description="Dashboard de gestion des backlinks, opportunités de link building et campagnes d'acquisition de liens."
        canonical="/admin/link-building"
        noIndex
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl mb-4">Link Building Dashboard</h1>
            <p className="text-gray-600">
              Gérez vos backlinks, opportunités et campagnes d'acquisition de liens
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 border-b border-gray-200">
            <button
              onClick={() => setSelectedTab('overview')}
              className={`px-6 py-3 border-b-2 transition-colors ${
                selectedTab === 'overview'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-600 hover:text-black'
              }`}
            >
              Vue d'ensemble
            </button>
            <button
              onClick={() => setSelectedTab('backlinks')}
              className={`px-6 py-3 border-b-2 transition-colors ${
                selectedTab === 'backlinks'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-600 hover:text-black'
              }`}
            >
              Backlinks ({stats.totalBacklinks})
            </button>
            <button
              onClick={() => setSelectedTab('opportunities')}
              className={`px-6 py-3 border-b-2 transition-colors ${
                selectedTab === 'opportunities'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-600 hover:text-black'
              }`}
            >
              Opportunités ({stats.totalOpportunities})
            </button>
            <button
              onClick={() => setSelectedTab('campaigns')}
              className={`px-6 py-3 border-b-2 transition-colors ${
                selectedTab === 'campaigns'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-600 hover:text-black'
              }`}
            >
              Campagnes ({linkBuildingCampaigns.length})
            </button>
          </div>

          {/* Overview Tab */}
          {selectedTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <LinkIcon className="w-8 h-8 text-blue-600" />
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-3xl mb-1">{stats.totalBacklinks}</p>
                  <p className="text-gray-600">Backlinks Actifs</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {stats.dofollowBacklinks} dofollow · {stats.nofollowBacklinks} nofollow
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <BarChart3 className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="text-3xl mb-1">{stats.averageDA}</p>
                  <p className="text-gray-600">Domain Authority Moyen</p>
                  <p className="text-sm text-green-600 mt-2">↑ +5 ce mois</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <p className="text-3xl mb-1">{stats.totalOpportunities}</p>
                  <p className="text-gray-600">Opportunités</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {stats.newOpportunities} nouvelles · {stats.contacted} contactées
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-3xl mb-1">{stats.completed}</p>
                  <p className="text-gray-600">Liens Acquis ce Mois</p>
                  <p className="text-sm text-green-600 mt-2">↑ +2 vs mois dernier</p>
                </Card>
              </div>

              {/* Active Campaigns */}
              <div>
                <h2 className="text-2xl mb-6">Campagnes Actives</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {linkBuildingCampaigns
                    .filter((c) => c.status === 'active')
                    .map((campaign) => {
                      const progress = (campaign.acquiredBacklinks / campaign.targetBacklinks) * 100;
                      const conversionRate = calculateCampaignConversionRate(campaign);

                      return (
                        <Card key={campaign.id} className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl mb-2">{campaign.name}</h3>
                              <Badge className={getStatusColor(campaign.status)}>
                                {campaign.status}
                              </Badge>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-600">Progression</span>
                                <span>
                                  {campaign.acquiredBacklinks} / {campaign.targetBacklinks}
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-green-600 h-2 rounded-full transition-all"
                                  style={{ width: `${Math.min(progress, 100)}%` }}
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                              <div>
                                <p className="text-sm text-gray-600">Contactés</p>
                                <p className="text-xl">{campaign.results.contacted}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">Taux conversion</p>
                                <p className="text-xl">{conversionRate}%</p>
                              </div>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                </div>
              </div>

              {/* Top Opportunities */}
              <div>
                <h2 className="text-2xl mb-6">Opportunités Prioritaires</h2>
                <div className="space-y-4">
                  {prioritizedOpportunities.slice(0, 5).map((opportunity) => (
                    <Card key={opportunity.id} className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg">{opportunity.domain}</h3>
                            <Badge className={getStatusColor(opportunity.status)}>
                              {opportunity.status}
                            </Badge>
                            <Badge className={getDifficultyColor(opportunity.difficulty)}>
                              {opportunity.difficulty}
                            </Badge>
                          </div>

                          <p className="text-gray-600 mb-3">{opportunity.notes}</p>

                          <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span>DA: {opportunity.domainAuthority}</span>
                            <span>PA: {opportunity.pageAuthority}</span>
                            <span>Value: {opportunity.estimatedValue}/100</span>
                            {opportunity.contactEmail && (
                              <span className="flex items-center gap-1">
                                <Mail className="w-4 h-4" />
                                {opportunity.contactEmail}
                              </span>
                            )}
                          </div>
                        </div>

                        <a
                          href={opportunity.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Backlinks Tab */}
          {selectedTab === 'backlinks' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl">Tous les Backlinks</h2>
                <Button>
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Ajouter un Backlink
                </Button>
              </div>

              <div className="space-y-4">
                {backlinks.map((backlink) => (
                  <Card key={backlink.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg">{backlink.sourceDomain}</h3>
                          <Badge className={getStatusColor(backlink.status)}>
                            {backlink.status}
                          </Badge>
                          <Badge variant={backlink.linkType === 'dofollow' ? 'default' : 'secondary'}>
                            {backlink.linkType}
                          </Badge>
                          <Badge variant="outline">{backlink.category}</Badge>
                        </div>

                        <p className="text-gray-600 mb-3">
                          Anchor text: <span className="font-medium">{backlink.anchorText}</span>
                        </p>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <span>DA: {backlink.domainAuthority}</span>
                          <span>Acquired: {new Date(backlink.acquiredDate).toLocaleDateString('fr-FR')}</span>
                          <span>Last checked: {new Date(backlink.lastChecked).toLocaleDateString('fr-FR')}</span>
                        </div>

                        {backlink.notes && (
                          <p className="text-sm text-gray-500 mt-2 italic">{backlink.notes}</p>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={backlink.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Source URL"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Opportunities Tab */}
          {selectedTab === 'opportunities' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl">Opportunités de Link Building</h2>
                <div className="flex gap-3">
                  <select
                    value={opportunityFilter}
                    onChange={(e) => setOpportunityFilter(e.target.value as any)}
                    className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="all">Tous les statuts</option>
                    <option value="new">Nouveau</option>
                    <option value="contacted">Contacté</option>
                    <option value="negotiating">En négociation</option>
                    <option value="accepted">Accepté</option>
                    <option value="rejected">Refusé</option>
                    <option value="completed">Complété</option>
                  </select>
                  <Button>
                    <Target className="w-4 h-4 mr-2" />
                    Nouvelle Opportunité
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {filteredOpportunities.map((opportunity) => (
                  <Card key={opportunity.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg">{opportunity.domain}</h3>
                          <Badge className={getStatusColor(opportunity.status)}>
                            {opportunity.status}
                          </Badge>
                          <Badge className={getDifficultyColor(opportunity.difficulty)}>
                            {opportunity.difficulty}
                          </Badge>
                          <Badge variant="outline">{opportunity.type}</Badge>
                        </div>

                        <p className="text-gray-600 mb-3">{opportunity.notes}</p>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                          <span>DA: {opportunity.domainAuthority}</span>
                          <span>PA: {opportunity.pageAuthority}</span>
                          <span>Value: {opportunity.estimatedValue}/100</span>
                          <span>Discovered: {new Date(opportunity.discoveredDate).toLocaleDateString('fr-FR')}</span>
                          {opportunity.lastContactDate && (
                            <span>
                              Last contact: {new Date(opportunity.lastContactDate).toLocaleDateString('fr-FR')}
                            </span>
                          )}
                        </div>

                        {opportunity.contactEmail && (
                          <div className="flex items-center gap-2 mt-3 text-sm">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span>{opportunity.contactEmail}</span>
                            {opportunity.contactName && <span>({opportunity.contactName})</span>}
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Mail className="w-4 h-4 mr-2" />
                          Contacter
                        </Button>
                        <a
                          href={opportunity.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Campaigns Tab */}
          {selectedTab === 'campaigns' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl">Campagnes de Link Building</h2>
                <Button>
                  <Target className="w-4 h-4 mr-2" />
                  Nouvelle Campagne
                </Button>
              </div>

              <div className="space-y-6">
                {linkBuildingCampaigns.map((campaign) => {
                  const progress = (campaign.acquiredBacklinks / campaign.targetBacklinks) * 100;
                  const conversionRate = calculateCampaignConversionRate(campaign);

                  return (
                    <Card key={campaign.id} className="p-6">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-xl mb-2">{campaign.name}</h3>
                          <div className="flex gap-2">
                            <Badge className={getStatusColor(campaign.status)}>
                              {campaign.status}
                            </Badge>
                            <Badge variant="outline">{campaign.type}</Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Voir Détails
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Contactés</p>
                          <p className="text-2xl">{campaign.results.contacted}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Réponses</p>
                          <p className="text-2xl">{campaign.results.responded}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Acceptés</p>
                          <p className="text-2xl text-green-600">{campaign.results.accepted}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Refusés</p>
                          <p className="text-2xl text-red-600">{campaign.results.rejected}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Taux conversion</p>
                          <p className="text-2xl">{conversionRate}%</p>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Progression vers l'objectif</span>
                          <span>
                            {campaign.acquiredBacklinks} / {campaign.targetBacklinks}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-green-600 h-3 rounded-full transition-all"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                          />
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
