import React from 'react';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-12 px-6" data-aos="fade-down">
      <div className="flex justify-center items-center gap-4 mb-6">
        <div className="relative">
          <Shield className="w-16 h-16 text-cyan-400 animate-pulse" />
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-ping"></div>
        </div>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
        Architecture de Défense Multicouche
      </h1>
      
      <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
        Lutte contre les mouvements latéraux - Environnements Cloud Multilocataire
      </p>
      
      <div className="mt-8 flex justify-center">
        <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;