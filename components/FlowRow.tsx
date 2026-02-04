import React from 'react';
import { FlowData } from '../types';
import NodeCard from './NodeCard';
import Connector from './Connector';

interface FlowRowProps {
  flow: FlowData;
  isLast: boolean;
}

const FlowRow: React.FC<FlowRowProps> = ({ flow, isLast }) => {
  return (
    <div className={`w-full py-16 ${!isLast ? 'border-b border-gray-100' : ''}`}>
      {/* Flow Label (Optional visual guide, usually purely structural but helps identify the row) */}
      <div className="absolute left-0 mt-[-40px] px-8 opacity-20 pointer-events-none">
        <span className="text-4xl font-bold text-gray-300 select-none font-sans">
            {flow.id.replace('flow-', '0')}
        </span>
      </div>

      <div className="flex flex-row items-stretch justify-start px-12">
        {/* 1. Mental Model */}
        <NodeCard content={flow.nodes.mental} type="mental" />

        {/* Connector */}
        <Connector label={flow.connectorLabels[0]} />

        {/* 2. Trigger */}
        <NodeCard content={flow.nodes.trigger} type="trigger" />

        {/* Connector */}
        <Connector label={flow.connectorLabels[1]} />

        {/* 3. Landing */}
        <NodeCard content={flow.nodes.landing} type="landing" />

        {/* Connector */}
        <Connector label={flow.connectorLabels[2]} />

        {/* 4. Experience */}
        <NodeCard content={flow.nodes.experience} type="experience" />
      </div>
    </div>
  );
};

export default FlowRow;