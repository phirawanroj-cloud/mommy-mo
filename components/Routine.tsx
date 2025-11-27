import React, { useState, useEffect } from 'react';
import { generateDailyRoutine } from '../services/geminiService';
import { DailyTask } from '../types';
import { RefreshCw, Coffee, Briefcase, User, Heart, Home as HomeIcon, Star, Sun, Moon } from 'lucide-react';
import { Mascot } from './Mascot';

export const Routine: React.FC = () => {
  const [routine, setRoutine] = useState<DailyTask[]>([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('full-time');

  const generateRoutine = async () => {
    setLoading(true);
    const context = `Work status: ${status}, Kids: 2 (school age).`;
    const data = await generateDailyRoutine(context);
    setRoutine(data.routine);
    setLoading(false);
  };

  useEffect(() => {
    if (routine.length === 0) generateRoutine();
  }, []);

  const getIcon = (type: string) => {
    switch(type) {
      case 'me-time': return <Coffee size={18} className="text-teal-600" />;
      case 'work': return <Briefcase size={18} className="text-slate-500" />;
      case 'kids': return <User size={18} className="text-amber-500" />;
      case 'couple': return <Heart size={18} className="text-rose-500 fill-rose-500" />;
      default: return <HomeIcon size={18} className="text-indigo-500" />;
    }
  };

  const getCardStyle = (type: string) => {
    switch(type) {
      case 'me-time': return 'bg-teal-50 border-teal-200 shadow-teal-100';
      case 'work': return 'bg-slate-50 border-slate-200 shadow-slate-100';
      case 'kids': return 'bg-amber-50 border-amber-200 shadow-amber-100';
      case 'couple': return 'bg-rose-50 border-rose-200 shadow-rose-100';
      default: return 'bg-indigo-50 border-indigo-200 shadow-indigo-100';
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto pb-32">
      <div className="flex justify-between items-end mb-6">
        <div>
            <div className="flex items-center gap-2 mb-1">
                <Sun className="text-orange-400 animate-spin-slow" size={24} />
                <h2 className="text-2xl font-bold text-slate-800 font-cute">ตารางวันนี้</h2>
            </div>
            <p className="text-slate-500 text-sm pl-8">จัดสรรเวลาเพื่อความสุข 💕</p>
        </div>
        <Mascot mood="thinking" size={80} className="-mb-4" />
      </div>

      {/* Type Selector */}
      <div className="bg-white p-1.5 rounded-[2rem] shadow-sm border border-slate-100 flex gap-1 mb-8 overflow-x-auto">
        {['full-time', 'part-time', 'homemaker'].map((s) => (
            <button
                key={s}
                onClick={() => setStatus(s)}
                className={`flex-1 px-4 py-2.5 rounded-[1.5rem] text-xs font-bold whitespace-nowrap transition-all ${
                    status === s 
                    ? 'bg-rose-400 text-white shadow-md shadow-rose-200' 
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
            >
                {s === 'full-time' ? 'งานประจำ' : s === 'part-time' ? 'ฟรีแลนซ์' : 'แม่บ้าน'}
            </button>
        ))}
      </div>

      <div className="relative px-2">
        {/* Timeline Line */}
        <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-gradient-to-b from-rose-200 to-indigo-200 rounded-full opacity-50"></div>
        
        {loading ? (
            <div className="text-center py-20 bg-white/50 rounded-3xl border-2 border-dashed border-rose-200">
                <Mascot mood="thinking" size={100} className="mx-auto animate-bounce mb-4" />
                <p className="text-rose-400 font-cute text-lg">กำลังจัดตารางให้อยู่นะคะ...</p>
            </div>
        ) : routine.length > 0 ? (
            <div className="space-y-6">
                {routine.map((item, idx) => (
                    <div key={idx} className="relative pl-14 group">
                        {/* Timeline Connector */}
                        <div className="absolute left-[19px] top-1/2 -mt-2 w-4 h-1 bg-rose-200"></div>
                        
                        {/* Timeline Icon */}
                        <div className="absolute left-0 top-1/2 -mt-5 w-10 h-10 bg-white border-4 border-rose-100 rounded-full z-10 shadow-sm flex items-center justify-center text-xs font-bold text-rose-400 group-hover:scale-110 transition-transform">
                            {idx + 1}
                        </div>
                        
                        {/* Card */}
                        <div className={`p-4 rounded-[2rem] border-2 ${getCardStyle(item.type)} shadow-sm flex items-center gap-4 transition-transform hover:scale-[1.02] bg-opacity-60 backdrop-blur-sm relative overflow-hidden`}>
                            
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-12 h-12 bg-white/20 rounded-bl-[2rem]"></div>

                            <div className="bg-white p-2.5 rounded-2xl text-center min-w-[70px] shadow-sm border border-slate-50">
                                <span className="text-sm font-black text-slate-600 font-eng-cute block">{item.time}</span>
                            </div>
                            <div className="flex-1 relative z-10">
                                <h4 className="text-slate-800 font-bold text-base font-cute">{item.activity}</h4>
                                <div className="flex items-center gap-1.5 mt-1.5">
                                    <div className="bg-white/60 p-1 rounded-full">{getIcon(item.type)}</div>
                                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wide opacity-70 bg-white/40 px-2 py-0.5 rounded-full">{item.type}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
                <button 
                  onClick={generateRoutine} 
                  className="w-full mt-8 py-4 border-2 border-dashed border-rose-300 text-rose-400 rounded-[2rem] font-bold hover:bg-rose-50 transition-colors flex items-center justify-center gap-2 group"
                >
                  <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" /> 
                  จัดตารางใหม่
                </button>
            </div>
        ) : (
            <div className="text-center py-12 text-slate-400 bg-white/50 rounded-[2rem] border border-slate-100">
                <Mascot mood="sleepy" size={80} className="mx-auto mb-2 opacity-50" />
                กดปุ่มเพื่อสร้างตารางเวลา
            </div>
        )}
      </div>
    </div>
  );
};