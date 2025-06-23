import React from 'react';

interface LayerCardProps {
  number: number;
  title: string;
  description: string;
  tags: string[];
  color: string;
  attackIcon: string;
  defenseIcon: string;
  delay: number;
}

const LayerCard: React.FC<LayerCardProps> = ({
  number,
  title,
  description,
  tags,
  color,
  attackIcon,
  defenseIcon,
  delay
}) => {
  const colorMap: { [key: string]: string } = {
    red: 'border-red-500/60 bg-gradient-to-br from-red-500/20 to-red-600/10',
    teal: 'border-teal-500/60 bg-gradient-to-br from-teal-500/20 to-teal-600/10',
    blue: 'border-blue-500/60 bg-gradient-to-br from-blue-500/20 to-blue-600/10',
    green: 'border-green-500/60 bg-gradient-to-br from-green-500/20 to-green-600/10',
    yellow: 'border-yellow-500/60 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10',
  };

  return (
    <div 
      className={`relative ${colorMap[color]} border-2 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30 group shadow-lg bg-white/10`} 
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex items-center gap-6 mb-6">
        <div className={`w-16 h-16 bg-gradient-to-r from-${color}-400 to-${color}-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white/20`}>
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
        </div>
      </div>
      <p className="text-slate-200 leading-relaxed mb-6 text-lg">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-400/30 rounded-full text-cyan-200 text-xs font-semibold shadow hover:bg-cyan-500/40 transition-all cursor-default backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Indicateurs attaque/défense en bas */}
      <div className="flex justify-end gap-2 mt-2">
        <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-red-500/40 to-orange-400/40 text-red-100 shadow border border-red-400/30 flex items-center gap-1">
          {attackIcon} <span className="ml-1">Attaque</span>
        </span>
        <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500/40 to-teal-400/40 text-cyan-100 shadow border border-cyan-400/30 flex items-center gap-1">
          {defenseIcon} <span className="ml-1">Défense</span>
        </span>
      </div>
    </div>
  );
};

export default LayerCard;