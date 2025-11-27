import React, { useState } from 'react';
import { generatePersonalizedAdvice } from '../services/geminiService';
import { Send, Loader2, Sparkles } from 'lucide-react';
import { Mascot } from './Mascot';

export const Advisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse(null);
    
    const context = "Mother of 2, age 40, feeling busy but wants to prioritize health and marriage.";
    const result = await generatePersonalizedAdvice(input, context);
    
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-6 pb-32">
      <header className="mb-4 text-center">
        <Mascot mood="love" size={100} className="mx-auto mb-2" />
        <h2 className="text-2xl font-bold text-rose-500">น้องอุ่นใจ</h2>
        <p className="text-slate-500 font-cute text-sm">พร้อมรับฟังทุกเรื่องเลยนะคะ</p>
      </header>

      {/* Response Area */}
      {response && (
        <div className="flex gap-3 animate-fade-in">
           <div className="flex-shrink-0 mt-2">
                <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                    <Mascot mood="excited" size={40} />
                </div>
           </div>
           <div className="bg-white p-5 rounded-3xl rounded-tl-none shadow-sm border border-rose-100 text-slate-700 leading-relaxed text-sm">
              <div className="prose prose-pink prose-sm max-w-none whitespace-pre-wrap font-cute">
                {response}
              </div>
           </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white p-2 rounded-[2rem] shadow-lg shadow-rose-100/50 border border-slate-100 mt-auto">
        <textarea
          className="w-full p-4 bg-transparent border-none focus:ring-0 outline-none resize-none text-slate-700 font-cute placeholder:text-slate-300"
          rows={3}
          placeholder="พิมพ์เรื่องที่กังวลใจ หรือสิ่งที่อยากให้ช่วยคิด..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex justify-between items-center px-2 pb-2">
             <span className="text-xs text-slate-300 px-2">AI กำลังรอฟังอยู่จ้ะ</span>
            <button
            onClick={handleAsk}
            disabled={loading || !input.trim()}
            className="w-12 h-12 bg-rose-500 hover:bg-rose-600 text-white rounded-full transition-all flex items-center justify-center shadow-md shadow-rose-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
            >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} className="ml-0.5" />}
            </button>
        </div>
      </div>

      {/* Suggestion Chips */}
      {!response && !loading && (
        <div className="space-y-4 mt-8">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider text-center">หัวข้อน่าคุย</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['จัดการเวลาเช้า ⏰', 'เติมความหวานกับพ่อ 💖', 'ดูแลผิวหน้าวัย 40 ✨', 'สงบจิตใจ 🧘‍♀️'].map((topic) => (
              <button
                key={topic}
                onClick={() => setInput(topic)}
                className="px-4 py-2 bg-white border-2 border-slate-100 rounded-2xl text-xs font-bold text-slate-500 hover:border-rose-200 hover:text-rose-500 hover:bg-rose-50 transition-all shadow-sm"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};