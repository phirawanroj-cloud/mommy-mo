import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { Advisor } from './components/Advisor';
import { Routine } from './components/Routine';
import { Relationship } from './components/Relationship';
import { ViewState } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <Dashboard onChangeView={setCurrentView} />;
      case ViewState.ADVISOR:
        return <Advisor />;
      case ViewState.ROUTINE:
        return <Routine />;
      case ViewState.RELATIONSHIP:
        return <Relationship />;
      default:
        return <Dashboard onChangeView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 font-sans selection:bg-rose-200 overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-60" 
           style={{
             backgroundImage: `
                radial-gradient(#fca5a5 1.5px, transparent 1.5px), 
                radial-gradient(#fdba74 1.5px, transparent 1.5px)
             `,
             backgroundSize: '32px 32px',
             backgroundPosition: '0 0, 16px 16px'
           }}>
      </div>
      
      {/* Floating Blobs */}
      <div className="fixed top-20 -left-20 w-60 h-60 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="fixed top-40 -right-20 w-60 h-60 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="fixed -bottom-20 left-20 w-60 h-60 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <main className="mx-auto max-w-lg min-h-screen shadow-2xl shadow-rose-100/50 relative bg-white/60 backdrop-blur-md border-x border-white/50">
        {renderView()}
        <Navigation currentView={currentView} onChangeView={setCurrentView} />
      </main>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}