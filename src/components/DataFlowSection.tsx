import React from 'react';
import { ArrowDown, ArrowRight, ArrowUp } from 'lucide-react';

const DataFlowSection: React.FC = () => {
  const flowSteps = [
    {
      from: { label: "👤\nUtilisateur", type: "user" },
      to: { label: "🚪\nSDP/ZT", type: "sdp" },
      action: "1. Demande d'accès",
      direction: "right"
    },
    {
      from: { label: "🚪\nSDP/ZT", type: "sdp" },
      to: { label: "🔒\nSegmentation", type: "segment" },
      action: "2. Vérification identité/contexte",
      direction: "right"
    },
    {
      from: { label: "🔒\nSegmentation", type: "segment" },
      to: { label: "👁️\nUEBA/SIEM", type: "ueba" },
      action: "3. Logs comportementaux",
      direction: "down"
    },
    {
      from: { label: "👁️\nUEBA/SIEM", type: "ueba" },
      to: { label: "🔐\nSGX/SEV", type: "sgx" },
      action: "4. Données vers enclave",
      direction: "right"
    },
    {
      from: { label: "☁️\nFournisseur", type: "cloud" },
      to: { label: "🔐\nSGX/SEV", type: "sgx" },
      action: "5. Config matérielle",
      direction: "up"
    }
  ];

  const getNodeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      user: "from-red-400 to-red-600",
      sdp: "from-teal-400 to-blue-600",
      segment: "from-blue-400 to-green-600",
      ueba: "from-green-400 to-yellow-600",
      sgx: "from-yellow-400 to-pink-600",
      cloud: "from-teal-300 to-pink-300"
    };
    return colors[type] || "from-gray-400 to-gray-600";
  };

  const getArrowIcon = (direction: string) => {
    switch (direction) {
      case 'right': return <ArrowRight className="w-6 h-6" />;
      case 'down': return <ArrowDown className="w-6 h-6" />;
      case 'up': return <ArrowUp className="w-6 h-6" />;
      default: return <ArrowRight className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              🔄 Flux de Données et Interactions
            </h2>
          </div>

          <div className="space-y-8">
            {flowSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-8 p-6 bg-gradient-to-r from-slate-700/20 to-slate-800/20 rounded-2xl backdrop-blur-sm border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300"
                data-aos="fade-right"
                data-aos-delay={index * 150}
              >
                {/* From Node */}
                <div className={`w-24 h-24 bg-gradient-to-r ${getNodeColor(step.from.type)} rounded-2xl flex items-center justify-center text-white font-bold text-sm text-center shadow-lg hover:scale-110 transition-transform`}>
                  {step.from.label}
                </div>

                {/* Arrow and Action */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xs text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-600/30 text-center">
                    {step.action}
                  </span>
                  <div className="text-cyan-400 animate-pulse">
                    {getArrowIcon(step.direction)}
                  </div>
                </div>

                {/* To Node */}
                <div className={`w-24 h-24 bg-gradient-to-r ${getNodeColor(step.to.type)} rounded-2xl flex items-center justify-center text-white font-bold text-sm text-center shadow-lg hover:scale-110 transition-transform`}>
                  {step.to.label}
                </div>
              </div>
            ))}

            {/* Anomaly Detection Alert */}
            <div 
              className="flex items-center justify-between gap-8 p-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm border-2 border-red-500/50 animate-pulse"
              data-aos="fade-up"
              data-aos-delay={800}
            >
              <div className="w-24 h-24 bg-gradient-to-r from-red-400 to-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm text-center shadow-lg animate-none">
                👁️<br />DÉTECTION<br />ANOMALIE
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-red-400 bg-red-800/50 px-3 py-1 rounded-full border border-red-600/30 animate-pulse">
                  6. Alerte critique
                </span>
                <ArrowRight className="w-6 h-6 text-red-400 animate-pulse" />
              </div>
              
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm text-center shadow-lg">
                ⚡<br />SOAR
              </div>
            </div>

            {/* Automated Response */}
            <div 
              className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 border-2 border-yellow-500/50"
              data-aos="fade-up"
              data-aos-delay={1000}
            >
              <div className="flex items-center justify-between">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm text-center shadow-lg">
                  ⚡<br />SOAR
                </div>
                
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 ml-8">
                  {["Isolement automatique", "Révocation jetons", "Roll-back infra"].map((action, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-lg border border-yellow-400/30">
                      <ArrowRight className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-300 text-sm font-medium">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataFlowSection;