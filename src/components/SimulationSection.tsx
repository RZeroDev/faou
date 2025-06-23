import React from 'react';
import { Target, RotateCcw, Shield as ShieldIcon, Building } from 'lucide-react';

const SimulationSection: React.FC = () => {
  const scenarios = [
    {
      name: "Scénario 1: Compromission d'Identité",
      icon: Target,
      threat: "Critique",
      threatColor: "border-red-500 bg-red-500/20 text-red-400",
      timeline: [
        {
          step: 1,
          title: "🔓 Attaque Initiale",
          desc: "Attaquant obtient les credentials d'un utilisateur du Tenant A via phishing",
          status: null
        },
        {
          step: 2,
          title: "🚪 Couche SDP/ZT",
          desc: "Tentative de connexion détectée → Vérification contextuelle (géolocalisation suspecte)",
          status: { type: "blocked", text: "🛡️ BLOQUÉ" }
        },
        {
          step: 3,
          title: "⚡ Réaction SOAR",
          desc: "Isolement automatique du compte + Notification admin + Révocation tokens",
          status: { type: "success", text: "✅ MITIGÉ" }
        }
      ]
    },
    {
      name: "Scénario 2: Mouvement Latéral Interne",
      icon: RotateCcw,
      threat: "Élevé",
      threatColor: "border-yellow-500 bg-yellow-500/20 text-yellow-400",
      timeline: [
        {
          step: 1,
          title: "💻 Compromission Interne",
          desc: "Utilisateur légitime du Tenant A avec permissions élevées compromis",
          status: null
        },
        {
          step: 2,
          title: "🚪 Couche SDP/ZT",
          desc: "Connexion autorisée (contexte valide)",
          status: { type: "passed", text: "⚠️ PASSÉ" }
        },
        {
          step: 3,
          title: "🔒 Segmentation",
          desc: "Tentative d'accès aux ressources du Tenant B",
          status: { type: "blocked", text: "🛡️ BLOQUÉ" }
        },
        {
          step: 4,
          title: "👁️ UEBA Détection",
          desc: "Comportement anormal détecté → Tentative d'escalade de privilèges",
          status: { type: "alert", text: "🚨 ALERTE" }
        },
        {
          step: 5,
          title: "⚡ Réaction SOAR",
          desc: "Quarantaine dynamique + Roll-back des accès + Investigation automatique",
          status: { type: "success", text: "✅ CONTENU" }
        }
      ]
    },
    {
      name: "Scénario 3: Attaque sur Infrastructure",
      icon: ShieldIcon,
      threat: "Critique",
      threatColor: "border-red-600 bg-red-600/20 text-red-300",
      timeline: [
        {
          step: 1,
          title: "⚡ Exploitation Hyperviseur",
          desc: "Attaque sophistiquée visant l'hyperviseur pour accéder aux données des enclaves",
          status: null
        },
        {
          step: 2,
          title: "🔐 Isolation SGX/SEV",
          desc: "Données protégées dans les enclaves matérielles - Accès refusé",
          status: { type: "blocked", text: "🛡️ PROTÉGÉ" }
        },
        {
          step: 3,
          title: "👁️ Détection Avancée",
          desc: "Analyse des patterns d'attaque → Corrélation avec threat intelligence",
          status: { type: "alert", text: "🚨 ALERTE MAX" }
        },
        {
          step: 4,
          title: "⚡ Réaction d'Urgence",
          desc: "Isolement complet du tenant + Migration vers infrastructure saine",
          status: { type: "success", text: "✅ SAUVEGARDÉ" }
        }
      ]
    },
    {
      name: "Scénario 4: Mouvement Latéral Cross-Tenant",
      icon: Building,
      threat: "Critique",
      threatColor: "border-purple-500 bg-purple-500/20 text-purple-300",
      timeline: [
        {
          step: 1,
          title: "🎯 Attaque Ciblée",
          desc: "Tenant A malveillant tente d'exploiter les ressources partagées pour accéder au Tenant B",
          status: null
        },
        {
          step: 2,
          title: "🚪 Couche SDP/ZT",
          desc: "Connexion légitime du Tenant A autorisée (identité valide)",
          status: { type: "passed", text: "⚠️ PASSÉ" }
        },
        {
          step: 3,
          title: "🔒 Segmentation Stricte",
          desc: "Tentative d'accès aux VPC/namespaces du Tenant B → Isolation IAM par tenant",
          status: { type: "blocked", text: "🛡️ BLOQUÉ" }
        },
        {
          step: 4,
          title: "👁️ Détection Cross-Tenant",
          desc: "UEBA détecte patterns d'accès anormaux vers ressources externes + Cartographie d'attaque",
          status: { type: "alert", text: "🚨 ALERTE CROSS-TENANT" }
        },
        {
          step: 5,
          title: "🔐 Isolation Matérielle",
          desc: "Données du Tenant B protégées dans enclaves SGX/SEV distinctes",
          status: { type: "blocked", text: "🛡️ ISOLÉ" }
        },
        {
          step: 6,
          title: "⚡ Réaction Coordonnée",
          desc: "Quarantaine du Tenant A + Investigation forensique + Notification aux deux tenants",
          status: { type: "success", text: "✅ NEUTRALISÉ" }
        }
      ]
    }
  ];

  const getStatusStyle = (type: string) => {
    const styles: { [key: string]: string } = {
      blocked: "border-teal-400 bg-teal-400/20 text-teal-300",
      success: "border-green-400 bg-green-400/20 text-green-300",
      alert: "border-red-400 bg-red-400/20 text-red-300 animate-pulse",
      passed: "border-yellow-400 bg-yellow-400/20 text-yellow-300"
    };
    return styles[type] || "";
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
            ⚔️ Simulation d'Attaques et Réponses
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <scenario.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-300">
                    {scenario.name}
                  </h3>
                </div>
                <div className={`px-4 py-2 rounded-full border text-sm font-bold ${scenario.threatColor}`}>
                  {scenario.threat}
                </div>
              </div>

              <div className="space-y-4">
                {scenario.timeline.map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300"
                    data-aos="fade-right"
                    data-aos-delay={index * 200 + stepIndex * 100}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-cyan-300 mb-2">{step.title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed mb-2">{step.desc}</p>
                      {step.status && (
                        <div className={`inline-block px-3 py-1 rounded-full border text-xs font-bold ${getStatusStyle(step.status.type)}`}>
                          {step.status.text}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Summary */}
        <div 
          className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-cyan-500/30"
          data-aos="fade-up"
          data-aos-delay={800}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "98.5%", label: "Taux de détection", color: "from-green-400 to-emerald-600" },
              { value: "< 25s", label: "Temps de réaction", color: "from-blue-400 to-cyan-600" },
              { value: "0%", label: "Faux positifs critiques", color: "from-purple-400 to-violet-600" },
              { value: "100%", label: "Isolation cross-tenant", color: "from-orange-400 to-red-600" }
            ].map((metric, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-gradient-to-r ${metric.color} rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300`}
                data-aos="zoom-in"
                data-aos-delay={900 + index * 100}
              >
                <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-white/80 text-sm font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulationSection;