import React, { useState } from 'react';
import { FOOTER_TEXT } from './constants';
import MapTab from './components/MapTab';
import JourneyTab from './components/JourneyTab';
import DecisionsTab from './components/DecisionsTab';
import ExecutionTab from './components/ExecutionTab';
import ClarityMap from './components/ClarityMap'; // v1 Component

const App: React.FC = () => {
    // Default to 'execution' (اجرایی)
    const [activeTab, setActiveTab] = useState<'map' | 'journey' | 'decisions' | 'execution' | 'v1_map'>('execution');

    return (
        <div className="min-h-screen bg-[#FDFDFD] text-gray-900 font-sans selection:bg-gray-100 selection:text-gray-900" dir="rtl">

            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-[#FDFDFD]/90 backdrop-blur-md border-b border-gray-200/80 transition-all duration-300 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
                <div className="px-8 pt-4 pb-0 flex flex-col md:flex-row justify-between items-center">

                    {/* Right Side: Title + v1 Tab */}
                    <div className="flex items-center gap-8 mb-4 md:mb-0 pb-3">
                        {/* Title */}
                        <div className="flex items-center space-x-4 space-x-reverse">
                            <div className="w-3 h-3 bg-gray-900 rounded-sm rotate-45"></div>
                            <h1 className="text-sm font-bold tracking-[0.2em] text-gray-800 uppercase">
                                IIM CLARITY MAP <span className="text-gray-400 font-normal ml-2 tracking-normal">v2.0</span>
                            </h1>
                        </div>

                        {/* Distinct v1 Tab */}
                        <button
                            onClick={() => setActiveTab('v1_map')}
                            className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded border transition-all ${activeTab === 'v1_map'
                                    ? 'bg-gray-100 text-gray-800 border-gray-300'
                                    : 'bg-transparent text-gray-400 border-gray-100 hover:text-gray-600 hover:border-gray-300'
                                }`}
                        >
                            نسخه ۱ (Visual Map)
                        </button>
                    </div>

                    {/* Left Side: Navigation Tabs (RTL Spine) */}
                    <div className="flex space-x-8 space-x-reverse overflow-x-auto max-w-full no-scrollbar">

                        <button
                            onClick={() => setActiveTab('map')}
                            className={`pb-3 text-[11px] font-bold uppercase tracking-widest transition-all border-b-2 whitespace-nowrap ${activeTab === 'map'
                                    ? 'border-gray-900 text-gray-900'
                                    : 'border-transparent text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            ۱. نقشه (Map)
                        </button>

                        <button
                            onClick={() => setActiveTab('journey')}
                            className={`pb-3 text-[11px] font-bold uppercase tracking-widest transition-all border-b-2 whitespace-nowrap ${activeTab === 'journey'
                                    ? 'border-gray-900 text-gray-900'
                                    : 'border-transparent text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            ۲. مسیر (Journey)
                        </button>

                        <button
                            onClick={() => setActiveTab('decisions')}
                            className={`pb-3 text-[11px] font-bold uppercase tracking-widest transition-all border-b-2 whitespace-nowrap ${activeTab === 'decisions'
                                    ? 'border-gray-900 text-gray-900'
                                    : 'border-transparent text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            ۳. تصمیم‌ها (Decisions)
                        </button>

                        <button
                            onClick={() => setActiveTab('execution')}
                            className={`pb-3 text-[11px] font-bold uppercase tracking-widest transition-all border-b-2 whitespace-nowrap ${activeTab === 'execution'
                                    ? 'border-gray-900 text-gray-900'
                                    : 'border-transparent text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            ۴. اجرایی (Execution)
                        </button>

                    </div>
                </div>
            </header>

            {/* Main Canvas Area */}
            <main className="pt-36 pb-32 overflow-x-auto min-w-full">
                {activeTab === 'map' && <MapTab />}
                {activeTab === 'journey' && <JourneyTab />}
                {activeTab === 'decisions' && <DecisionsTab />}
                {activeTab === 'execution' && <ExecutionTab />}

                {/* v1 Render */}
                {activeTab === 'v1_map' && (
                    <div className="w-full">
                        <div className="max-w-6xl mx-auto px-8 mb-8 text-center">
                            <span className="bg-gray-100 text-gray-500 text-[10px] uppercase font-bold px-3 py-1 rounded-full">
                                ARCHIVED VERSION 1.0
                            </span>
                        </div>
                        <ClarityMap />
                    </div>
                )}
            </main>

            {/* Global Footer (Visible on Map tabs) */}
            {(activeTab === 'map' || activeTab === 'v1_map') && (
                <footer className="fixed bottom-0 w-full bg-white/90 backdrop-blur border-t border-gray-200 py-4 px-8 z-50 flex justify-center shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)]">
                    <p className="text-[11px] text-gray-500 font-medium text-center bg-gray-50 px-4 py-2 rounded-lg border border-gray-100/50">
                        {FOOTER_TEXT}
                    </p>
                </footer>
            )}

        </div>
    );
};

export default App;