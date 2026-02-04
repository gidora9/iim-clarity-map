
import React from 'react';
import { FLOWS } from '../constants';
import FlowRow from './FlowRow';

const ClarityMap: React.FC = () => {
  return (
    <div className="min-w-[1800px] flex flex-col relative px-8">
      {/* Legend / Axis Labels */}
      <div className="flex flex-row px-12 mb-8 text-xs font-bold text-gray-400 uppercase tracking-widest select-none text-center">
        <div className="w-[400px]">گام ۱: مواجهه (Touchpoint)</div>
        <div className="flex-grow"></div>
        <div className="w-[400px]">گام ۲: تعامل (Interaction)</div>
        <div className="flex-grow"></div>
        <div className="w-[400px]">گام ۳: تجربه (Experience)</div>
        <div className="flex-grow"></div>
        <div className="w-[300px]">گام ۴: نتیجه (Outcome)</div>
      </div>

      {/* Render Flows */}
      {FLOWS.map((flow, index) => (
        <FlowRow 
          key={flow.id} 
          flow={flow} 
          isLast={index === FLOWS.length - 1} 
        />
      ))}
    </div>
  );
};

export default ClarityMap;
