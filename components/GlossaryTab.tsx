import React from 'react';
import { GLOSSARY_ITEMS, GLOSSARY_TAB_INTRO } from '../constants';

const GlossaryTab: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-6 py-12">
      {/* Intro */}
      <div className="mb-20 text-center max-w-2xl">
        <div className="w-16 h-1 bg-gray-900 mx-auto mb-6 rounded-full"></div>
        <p className="text-base text-gray-600 font-medium leading-relaxed">
          {GLOSSARY_TAB_INTRO}
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-12 w-full">
        {GLOSSARY_ITEMS.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden group">
             
             {/* Decorative Background Blob */}
             <div className="absolute -top-20 -left-20 w-64 h-64 bg-gray-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700"></div>

             <div className="relative z-10 flex flex-col lg:flex-row gap-10">
                 {/* Term & Def */}
                 <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-l border-gray-100 lg:pl-10 pb-8 lg:pb-0 text-right">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center font-serif font-bold text-lg">
                            {index + 1}
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                            {item.term}
                        </h3>
                    </div>
                    <p className="text-base text-gray-600 leading-8 font-medium">
                        {item.definition}
                    </p>
                 </div>

                 {/* Logic Blocks */}
                 <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Reason */}
                    <div className="bg-blue-50/30 rounded-xl p-6 border border-blue-100/50 hover:bg-blue-50/60 transition-colors">
                        <div className="flex items-center gap-2 mb-3 text-blue-600">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            <span className="text-xs font-bold uppercase tracking-widest">منطق استراتژیک</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-7">
                            {item.reason}
                        </p>
                    </div>

                    {/* Excluded */}
                    <div className="bg-rose-50/30 rounded-xl p-6 border border-rose-100/50 hover:bg-rose-50/60 transition-colors">
                        <div className="flex items-center gap-2 mb-3 text-rose-600">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                            <span className="text-xs font-bold uppercase tracking-widest">مرز معنایی (حذفیات)</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-7">
                            {item.excluded}
                        </p>
                    </div>
                 </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlossaryTab;