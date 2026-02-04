import React from 'react';
import { DECISION_PHASES, DECISION_TAB_INTRO, DECISION_TAB_FOOTER } from '../constants';

const DecisionSequencing: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-6 py-12">
      {/* Purpose / Intro */}
      <div className="mb-16 text-center max-w-xl">
        <p className="text-base text-gray-600 font-medium leading-relaxed">
          {DECISION_TAB_INTRO}
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full pr-8 md:pr-0">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 right-0 md:left-1/2 md:right-auto w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent transform md:-translate-x-1/2"></div>

        {DECISION_PHASES.map((phase, index) => {
           const isLeft = index % 2 === 0;
           return (
            <div key={phase.id} className={`relative flex items-center mb-16 md:justify-between ${isLeft ? 'flex-row' : 'flex-row md:flex-row-reverse'}`}>
                
                {/* Timeline Node Dot */}
                <div className="absolute right-[-4px] md:left-1/2 md:right-auto w-2.5 h-2.5 bg-white border-2 border-gray-800 rounded-full transform md:-translate-x-1/2 z-10"></div>
                
                {/* Connector Line (Horizontal) */}
                <div className={`absolute top-1/2 h-px bg-gray-200 w-8 md:w-16 ${isLeft ? 'right-0 md:left-1/2' : 'right-0 md:right-1/2 md:mr-0'}`}></div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] bg-white p-6 rounded-2xl border border-gray-200 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] relative hover:border-gray-300 transition-colors mr-8 md:mr-0`}>
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{`PHASE ${index}`}</span>
                        <span className="text-[10px] font-mono font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">{phase.duration}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{phase.title.split('—')[1] || phase.title}</h3>
                    
                    <ul className="space-y-3">
                        {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-[13px] text-gray-600 font-medium leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 ml-3 shrink-0 opacity-60"></span>
                            {item}
                        </li>
                        ))}
                    </ul>
                </div>
                
                {/* Empty Space for alignment on desktop */}
                <div className="hidden md:block md:w-[45%]"></div>
            </div>
           );
        })}
      </div>

      {/* Tab Specific Footer */}
      <div className="mt-8 text-center">
        <p className="text-[11px] text-gray-400 font-medium bg-white border border-gray-200 px-6 py-2.5 rounded-full shadow-sm inline-block">
          {DECISION_TAB_FOOTER}
        </p>
      </div>
    </div>
  );
};

export default DecisionSequencing;