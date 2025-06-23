import React from 'react';
import { User, Settings, AlertTriangle, Bot, Building2, Cloud } from 'lucide-react';

const ActorsSection: React.FC = () => {
  const actors = [
    {
      name: "👤 Utilisateur Légitime",
      description: "Accède aux ressources cloud dans un cadre métier défini, soumis aux contrôles contextuels et comportementaux.",
      icon: User,
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "⚙️ Administrateur", 
      description: "Configure les règles de sécurité, gère les identités et supervise les journaux d'activité système.",
      icon: Settings,
      color: "from-green-400 to-emerald-400"
    },
    {
      name: "🔴 Attaquant",
      description: "Interne ou externe, cherche à contourner les protections pour accéder aux ressources d'autres tenants.",
      icon: AlertTriangle,
      color: "from-red-400 to-rose-400"
    },
    {
      name: "🤖 Système d'Orchestration",
      description: "Mécanismes automatisés déclenchant des mesures de réponse adaptées selon les alertes détectées.",
      icon: Bot,
      color: "from-purple-400 to-violet-400"
    },
    {
      name: "🏢 Tenant A / B",
      description: "Entités clientes partageant une même infrastructure cloud mutualisée, isolées logiquement et physiquement.",
      icon: Building2,
      color: "from-orange-400 to-amber-400"
    },
    {
      name: "☁️ Fournisseur Cloud",
      description: "Configure et approvisionne le matériel sécurisé (CPUs Intel SGX, AMD SEV) pour la couche d'isolation matérielle.",
      icon: Cloud,
      color: "from-teal-400 to-cyan-400"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              🎭 Acteurs du Système
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actors.map((actor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${actor.color} rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse`}>
                    <actor.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-cyan-300 text-lg group-hover:text-white transition-colors">
                    {actor.name}
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {actor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActorsSection;