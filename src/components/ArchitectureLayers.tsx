import React from 'react';
import { ChevronDown } from 'lucide-react';
import LayerCard from './LayerCard';

const ArchitectureLayers: React.FC = () => {
  const layers = [
    {
      number: 1,
      title: "Couche d'Accès Contextuel (SDP / Zero Trust)",
      description: "Établit des connexions dynamiques uniquement si le contexte est vérifié (identité, posture du device, géolocalisation, etc.), supprimant toute exposition réseau non justifiée.",
      tags: ["Zero Trust", "SDP", "Vérification Contextuelle", "Géolocalisation"],
      color: "red",
      attackIcon: "⚠️",
      defenseIcon: "🚪",
      delay: 0
    },
    {
      number: 2,
      title: "Couche de Segmentation Logique",
      description: "Applique la micro-segmentation à tous les niveaux (VPC, namespace Kubernetes, IAM par tenant) pour compartimenter les services et limiter les mouvements inter-tenant.",
      tags: ["Micro-segmentation", "VPC", "Kubernetes", "IAM"],
      color: "teal",
      attackIcon: "🔄",
      defenseIcon: "🔒",
      delay: 200
    },
    {
      number: 3,
      title: "Couche de Supervision Comportementale",
      description: "S'appuie sur des technologies d'UEBA, de SIEM cloud, et de cartographie d'attaque pour détecter les chemins de mouvement latéral en temps réel.",
      tags: ["UEBA", "SIEM Cloud", "Rapid7", "Cartographie d'attaque"],
      color: "blue",
      attackIcon: "📊",
      defenseIcon: "👁️",
      delay: 400
    },
    {
      number: 4,
      title: "Couche d'Isolation Matérielle (Confidential Computing)",
      description: "Garantit que les données en cours de traitement sont protégées même si l'environnement d'exécution est compromis, via des enclaves sécurisées.",
      tags: ["Intel SGX", "AMD SEV", "Enclaves Sécurisées", "Confidential Computing"],
      color: "green",
      attackIcon: "🛡️",
      defenseIcon: "🔐",
      delay: 600
    },
    {
      number: 5,
      title: "Couche de Remédiation Adaptative",
      description: "Utilise des mécanismes SOAR pour déclencher des actions ciblées (isolement automatique, révocation de jetons, roll-back d'infrastructure).",
      tags: ["SOAR", "Automatisation", "Isolement Automatique", "Roll-back"],
      color: "yellow",
      attackIcon: "🚫",
      defenseIcon: "⚡",
      delay: 800
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          {layers.map((layer, index) => (
            <React.Fragment key={layer.number}>
              <LayerCard {...layer} />
              {index < layers.length - 1 && (
                <div className="flex justify-center" data-aos="fade-in" data-aos-delay={layer.delay + 100}>
                  <div className="flex flex-col items-center">
                    <ChevronDown className="w-8 h-8 text-red-400 animate-bounce" />
                    <span className="text-red-400 text-sm font-medium mt-2">Progression de l'attaque</span>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureLayers;