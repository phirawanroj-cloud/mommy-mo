import React from 'react';
import { ViewState } from '../types';
import { Home, Calendar, Heart, MessageCircle } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onChangeView }) => {
  const navItems = [
    { id: ViewState.DASHBOARD, icon: Home, label: 'หน้าหลัก' },
    { id: ViewState.ROUTINE, icon: Calendar, label: 'ตาราง' },
    { id: ViewState.RELATIONSHIP, icon: Heart, label: 'ความรัก' },
    { id: ViewState.ADVISOR, icon: MessageCircle, label: 'ผู้ช่วย' },
  ];

  return (
    <nav className="fixed bottom-6 left-4 right-4 z-50">
      <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white p-2 max-w-sm mx-auto flex justify-between items-center px-6">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className={`relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'bg-rose-100 text-rose-500 -translate-y-2 shadow-lg shadow-rose-100' 
                  : 'text-slate-400 hover:text-rose-300 hover:bg-rose-50'
              }`}
            >
              <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              {isActive && (
                  <span className="absolute -bottom-6 text-[10px] font-bold text-rose-500 font-cute whitespace-nowrap">
                      {item.label}
                  </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};