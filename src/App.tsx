import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import ArchitectureLayers from './components/ArchitectureLayers';
import ActorsSection from './components/ActorsSection';
import DataFlowSection from './components/DataFlowSection';
import SimulationSection from './components/SimulationSection';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/50 to-slate-900"></div>
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Q0EzQUYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0ibTM2IDE0IDggOEwzNiAzMFYxNHptOC04djE2SDMwdjhIODV2OEg1MHY4SDE0di04SDB2OGgzNFYxNGgxMHptLTEwIDhjMCA0LjQxOC0zLjU4MiA4LTggOHMtOC0zLjU4Mi04LTggMy41ODItOCA4LTggOCAzLjU4MiA4IDh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="relative z-10">
        <Header />
        <ArchitectureLayers />
        <ActorsSection />
        <DataFlowSection />
        <SimulationSection />
        
        {/* Footer */}
        <footer className="py-12 px-6 text-center border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-lg">
          <div className="max-w-4xl mx-auto">
            <p className="text-slate-400 text-lg">
              Architecture de défense multicouche pour environnements cloud multilocataire
            </p>
            <div className="mt-4 flex justify-center">
              <div className="h-px w-64 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;