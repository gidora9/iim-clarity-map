import React from 'react';

interface ConnectorProps {
  label?: string;
}

const Connector: React.FC<ConnectorProps> = ({ label }) => {
  return (
    <div className="flex-grow flex items-center justify-center relative h-full min-w-[80px] max-w-[120px] group select-none">
      {/* SVG Line with Arrow */}
      <div className="w-full relative h-px bg-gray-200 flex items-center justify-center">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-300 rounded-full transition-colors group-hover:bg-gray-400"></div>
        
        {/* Directional Chevron */}
        <svg className="w-3 h-3 text-gray-300 transform rotate-180 absolute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-300 rounded-full transition-colors group-hover:bg-gray-400"></div>
      </div>
      
      {/* Label Pill */}
      {label && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2.5 py-1 z-10 border border-gray-100 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.03)] transition-all group-hover:border-gray-300 group-hover:shadow-md">
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap group-hover:text-gray-600 transition-colors">
            {label}
          </span>
        </div>
      )}
    </div>
  );
};

export default Connector;