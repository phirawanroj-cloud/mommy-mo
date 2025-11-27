import React from 'react';
import { ViewState } from '../types';
import { Droplets, Moon, Sparkles, Cloud } from 'lucide-react';
import { Mascot } from './Mascot';

interface DashboardProps {
    onChangeView: (view: ViewState) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onChangeView }) => {
  return (
    <div className="p-6 max-w-md mx-auto pb-32 relative overflow-hidden">
      
      {/* Decorative Clouds */}
      <div className="absolute top-10 -left-10 text-white opacity-40 animate-pulse">
         <Cloud size={80} fill="currentColor" />
      </div>
      <div className="absolute top-20 -right-8 text-white opacity-30 animate-pulse delay-700">
         <Cloud size={60} fill="currentColor" />
      </div>

      {/* Header with Mascot */}
      <header className="mb-8 flex items-end justify-between relative z-10 pt-4">
        <div>
            <div className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-sm text-rose-400 text-xs font-bold rounded-full mb-3 shadow-sm border border-rose-100">
                ✨ Super Mom Power!
            </div>
            <h1 className="text-3xl font-bold text-slate-800 leading-tight">
                สวัสดีจ้ะ<br/>
                <span className="text-rose-500 font-cute text-4xl">คุณแม่คนเก่ง</span>
            </h1>
        </div>
        <div className="relative">
             <div className="absolute inset-0 bg-white/30 blur-xl rounded-full"></div>
             <Mascot mood="cheer" size={140} className="-mr-4 transform hover:scale-105 transition-transform duration-300" />
        </div>
      </header>

      {/* Quote Bubble */}
      <div className="bg-white/90 backdrop-blur-md rounded-[2rem] p-6 shadow-lg shadow-rose-100/50 border-2 border-white relative mb-8 group hover:-translate-y-1 transition-transform">
        <div className="absolute -top-4 -left-2 bg-rose-400 text-white p-2 rounded-full shadow-lg border-2 border-white transform -rotate-12">
            <Sparkles size={20} />
        </div>
        <p className="text-slate-600 font-cute text-center text-xl leading-relaxed">
            "เหนื่อยไหมคะคนเก่ง? พักดื่มน้ำเย็นๆ สักแก้ว แล้วยิ้มให้ตัวเองหน้ากระจกนะ 💕"
        </p>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rotate-45 border-b-2 border-r-2 border-white"></div>
      </div>

      {/* Quick Self-Care Tracker */}
      <h3 className="text-lg font-bold text-slate-700 mb-4 font-cute flex items-center gap-2 pl-2">
         ดูแลตัวเองหน่อยนะ <span className="text-2xl animate-bounce">🧖‍♀️</span>
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-sky-50 rounded-[2.5rem] p-5 flex flex-col items-center justify-center text-center relative overflow-hidden group border-2 border-sky-100 hover:border-sky-200 transition-colors">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-sky-100 rounded-full opacity-50 group-hover:scale-125 transition-transform"></div>
            <Droplets className="text-sky-400 mb-2 relative z-10" size={32} fill="currentColor" fillOpacity={0.2} />
            <span className="text-xs text-sky-500 font-bold uppercase tracking-wider mb-1 relative z-10">ดื่มน้ำ</span>
            <span className="text-3xl font-black text-sky-600 font-eng-cute relative z-10">4/8</span>
        </div>
        <div className="bg-indigo-50 rounded-[2.5rem] p-5 flex flex-col items-center justify-center text-center relative overflow-hidden group border-2 border-indigo-100 hover:border-indigo-200 transition-colors">
            <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-indigo-100 rounded-full opacity-50 group-hover:scale-125 transition-transform"></div>
            <Moon className="text-indigo-400 mb-2 relative z-10" size={32} fill="currentColor" fillOpacity={0.2} />
            <span className="text-xs text-indigo-500 font-bold uppercase tracking-wider mb-1 relative z-10">นอนหลับ</span>
            <span className="text-3xl font-black text-indigo-600 font-eng-cute relative z-10">7 <span className="text-sm">ชม.</span></span>
        </div>
      </div>

      {/* Main Actions */}
      <div className="space-y-4">
        <button 
            onClick={() => onChangeView(ViewState.ADVISOR)}
            className="w-full bg-gradient-to-r from-rose-200 to-orange-100 p-1.5 rounded-[2.5rem] shadow-sm hover:shadow-lg hover:shadow-rose-100 transition-all cursor-pointer transform hover:-translate-y-1 group"
        >
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-[2rem] flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center text-3xl shadow-inner border-2 border-white group-hover:scale-110 transition-transform">
                    💬
                </div>
                <div className="flex-1 text-left">
                    <h3 className="font-bold text-slate-800 text-lg font-cute">คุยกับน้องอุ่นใจ</h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">ระบายความในใจ หรือขอคำแนะนำ</p>
                </div>
            </div>
        </button>

        <button 
            onClick={() => onChangeView(ViewState.ROUTINE)}
            className="w-full bg-gradient-to-r from-teal-200 to-emerald-100 p-1.5 rounded-[2.5rem] shadow-sm hover:shadow-lg hover:shadow-teal-100 transition-all cursor-pointer transform hover:-translate-y-1 group"
        >
             <div className="bg-white/70 backdrop-blur-sm p-4 rounded-[2rem] flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center text-3xl shadow-inner border-2 border-white group-hover:scale-110 transition-transform">
                    🗓️
                </div>
                <div className="flex-1 text-left">
                    <h3 className="font-bold text-slate-800 text-lg font-cute">ตารางความสุข</h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">จัดเวลา "เพื่อแม่" ให้ลงตัว</p>
                </div>
            </div>
        </button>
      </div>
    </div>
  );
};