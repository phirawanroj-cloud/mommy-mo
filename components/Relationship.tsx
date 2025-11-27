import React, { useState } from 'react';
import { generateDateIdeas } from '../services/geminiService';
import { Heart, Gift, ChevronRight, Sparkles, Stars } from 'lucide-react';
import { Mascot } from './Mascot';

export const Relationship: React.FC = () => {
  const [ideas, setIdeas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const getIdeas = async () => {
    setLoading(true);
    const result = await generateDateIdeas();
    setIdeas(result);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto pb-32">
      <header className="text-center mb-8 pt-4 relative">
        <div className="absolute top-0 right-10 animate-bounce duration-[2000ms]">
            <Heart size={24} className="text-rose-400 fill-rose-200" />
        </div>
        <div className="absolute top-10 left-8 animate-bounce delay-75 duration-[2500ms]">
            <Heart size={16} className="text-pink-300 fill-pink-100" />
        </div>
        <div className="absolute bottom-0 right-16 animate-pulse">
            <Stars size={20} className="text-amber-300" />
        </div>
        
        <div className="relative inline-block">
            <div className="absolute inset-0 bg-rose-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <Mascot mood="love" size={140} className="relative z-10" />
        </div>
        
        <h2 className="text-3xl font-bold text-rose-500 relative z-20 mt-2 font-cute drop-shadow-sm">
            มุมเติมรักหวาน
        </h2>
      </header>

      <div className="space-y-6">
        {/* Challenge Card */}
        <div className="bg-gradient-to-br from-rose-400 to-pink-500 rounded-[2.5rem] p-1 shadow-xl shadow-rose-200 transform transition-transform hover:scale-[1.02] cursor-pointer group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-[2.3rem] p-6 relative overflow-hidden h-full">
                
                <Sparkles className="absolute top-4 right-4 text-white/60 animate-spin-slow" />
                
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-white text-rose-500 px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">
                            MISSION 🎯
                        </span>
                        <span className="text-rose-100 text-xs font-bold uppercase tracking-wider">ประจำสัปดาห์</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 font-cute text-white">"บอกรักผ่าน Post-it"</h3>
                    <p className="text-rose-50 text-sm mb-5 font-cute leading-relaxed opacity-90">
                        แอบแปะโน้ตหวานๆ ไว้ที่กระจกห้องน้ำ หรือกระเป๋าทำงานของเขาดูสิคะ 💌
                    </p>
                    
                    <button className="w-full bg-white text-rose-500 px-5 py-3 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm group-hover:bg-rose-50 group-hover:shadow-md">
                        รับคำท้านี้! <ChevronRight size={14} />
                    </button>
                </div>
                
                {/* Background Decor */}
                <Heart className="absolute -bottom-4 -right-4 text-white/10 rotate-12" size={140} fill="currentColor" />
            </div>
        </div>

        {/* Date Ideas */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-[2.5rem] shadow-sm border border-white text-center relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white border-2 border-rose-100 px-6 py-2 rounded-full text-xs font-bold text-rose-400 uppercase tracking-widest shadow-sm">
                💖 Mini Dates 💖
            </div>

            <h3 className="text-lg font-bold text-slate-800 mb-2 mt-4 font-cute">ไอเดียเดทสั้นๆ ฉบับพ่อแม่</h3>
            
            {ideas.length === 0 && !loading && (
                 <button 
                 onClick={getIdeas}
                 className="mt-6 bg-rose-100 text-rose-500 px-8 py-3 rounded-2xl font-bold hover:bg-rose-200 transition-all hover:scale-105 shadow-sm border-2 border-white"
               >
                 🎲 สุ่มไอเดีย
               </button>
            )}

            {loading && (
                <div className="py-8">
                    <Mascot mood="love" size={80} className="mx-auto animate-bounce" />
                    <p className="text-rose-400 font-cute mt-3 animate-pulse">กำลังคิดแผนโรแมนติก...</p>
                </div>
            )}

            {ideas.length > 0 && (
                <div className="mt-6 space-y-3">
                    {ideas.map((idea, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-rose-50 p-4 rounded-[1.5rem] text-slate-700 text-sm font-cute text-left group hover:bg-rose-100 transition-colors border border-rose-100/50">
                            <div className="bg-white p-2.5 rounded-full shadow-sm text-rose-400 group-hover:scale-110 transition-transform group-hover:rotate-12">
                                <Gift size={18} />
                            </div>
                            <span className="leading-snug">{idea.replace(/^[-*]\s*/, '')}</span>
                        </div>
                    ))}
                    <button onClick={getIdeas} className="w-full text-xs text-center text-rose-400 mt-6 hover:text-rose-600 font-bold underline decoration-dotted decoration-2 underline-offset-4">
                        ขอลองดูไอเดียอื่น
                    </button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};