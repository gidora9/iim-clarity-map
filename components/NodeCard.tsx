
import React from 'react';
import { NodeContent, MockContent } from '../types';

interface NodeCardProps {
  content: NodeContent;
  type: 'mental' | 'trigger' | 'landing' | 'experience';
}

// Browser Mock - Handles Ad Step, LP Hero Step, LP Body Step
const BrowserMock: React.FC<{ data: MockContent }> = ({ data }) => (
  <div className="flex flex-col h-full bg-white text-right font-sans" dir="rtl">
    {/* Browser Chrome */}
    <div className="bg-[#f8f9fa] px-3 py-2 border-b border-[#e1e3e1] flex items-center gap-2 shrink-0">
      <div className="flex gap-1.5 opacity-30">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
      </div>
      <div className="flex-grow bg-white h-6 rounded-md border border-[#e1e3e1] flex items-center px-2 text-[10px] text-gray-400 font-mono truncate gap-2 ml-4">
        <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
        <span className="opacity-60">{data.url || 'google.com'}</span>
      </div>
    </div>
    
    {/* Content Area */}
    <div className="flex-grow bg-white overflow-hidden relative">
      <div className="p-4 flex flex-col gap-4 h-full">
        
        {/* MODE 1: Google Ad Only */}
        {data.adTitle && !data.lpHero && (
          <div className="flex flex-col justify-center h-full">
             <div className="bg-white rounded p-2 hover:bg-gray-50 transition-colors -mx-2">
                <div className="flex items-center gap-2 mb-1.5 text-[11px]">
                   <span className="font-bold text-gray-900">آگهی</span>
                   <span className="text-gray-400">•</span>
                   <span className="dir-ltr text-[#202124]">
                     {data.url?.includes('google') ? 'iim.life' : data.url}
                   </span>
                </div>
                <div className="font-medium text-[#1a0dab] text-[18px] leading-snug hover:underline cursor-pointer mb-2">
                  {data.adTitle}
                </div>
                <div className="text-[#4d5156] text-[13px] leading-relaxed">
                  {data.adDesc}
                </div>
            </div>
            {/* Fake other results blur */}
            <div className="mt-6 space-y-3 opacity-10 blur-[1px]">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        )}

        {/* MODE 2: LP Hero / Body */}
        {data.lpHero && (
          <div className="bg-white h-full flex flex-col">
             {/* Trust Nav */}
             <div className="flex justify-between items-center mb-6 border-b border-gray-50 pb-2">
                 <div className="w-6 h-6 bg-gray-800 rounded-sm rotate-45"></div>
                 <div className="flex gap-3">
                     <div className="w-12 h-1.5 bg-gray-100 rounded"></div>
                     <div className="w-12 h-1.5 bg-gray-100 rounded"></div>
                 </div>
             </div>

             <div className="flex flex-col items-center text-center flex-grow justify-center">
               <h2 className="text-[18px] font-extrabold text-gray-900 mb-4 leading-snug whitespace-pre-line tracking-tight">
                 {data.lpHero}
               </h2>
               
               <div className="w-8 h-0.5 bg-gray-200 mb-5 rounded-full"></div>
               
               {data.lpSubtext && (
                 <p className="text-[13px] text-gray-600 leading-7 whitespace-pre-line font-medium mb-6">
                   {data.lpSubtext}
                 </p>
               )}

               {data.lpBody && (
                 <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-50 text-[12px] text-gray-700 leading-6 text-justify w-full">
                    {data.lpBody}
                 </div>
               )}

               {data.buttonText && (
                   <button className="bg-gray-900 text-white border border-gray-900 px-6 py-2.5 rounded-md text-[12px] font-bold hover:bg-gray-800 transition-all mt-4 shadow-md">
                     {data.buttonText}
                   </button>
               )}
             </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

// Instagram Mock - Handles Post & Form
const InstagramMock: React.FC<{ data: MockContent }> = ({ data }) => (
  <div className="flex flex-col h-full bg-white text-right font-sans relative" dir="rtl">
    {/* Header */}
    <div className="h-10 border-b border-gray-100 flex items-center justify-between px-4 bg-white sticky top-0 z-10 shrink-0">
      <div className="w-6"></div>
      <span className="font-semibold text-[12px] text-gray-900">Instagram</span>
      <div className="w-6"></div>
    </div>
    
    <div className="flex-grow overflow-y-auto no-scrollbar bg-white relative">
      
      {/* MODE 1: Feed Post */}
      {data.postCaption && (
        <div className="flex flex-col h-full">
            {/* User Row */}
            <div className="flex items-center gap-2 p-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[1.5px]">
                    <div className="bg-white rounded-full w-full h-full p-0.5"><div className="bg-gray-200 rounded-full w-full h-full"></div></div>
                </div>
                <div className="flex flex-col">
                    <span className="text-[11px] font-bold">iimdotlife</span>
                    <span className="text-[9px] text-gray-400">Sponsored</span>
                </div>
                <div className="mr-auto text-gray-400">•••</div>
            </div>
            {/* Image Placeholder */}
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-300">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
            </div>
            {/* Actions */}
            <div className="flex items-center gap-3 p-3">
                <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 8 9 8z" /></svg>
            </div>
            {/* Caption */}
            <div className="px-3 pb-4">
                <p className="text-[12px] leading-6 text-gray-800">
                    <span className="font-bold ml-1">iimdotlife</span>
                    {data.postCaption}
                </p>
            </div>
        </div>
      )}

      {/* MODE 2: Lead Form */}
      {data.formFields && (
        <div className="p-5 flex flex-col gap-5 h-full">
            <div className="flex flex-col items-center gap-2 text-center pb-2">
                <h3 className="font-bold text-[14px] text-gray-900 leading-snug">{data.title}</h3>
                <p className="text-[11px] text-gray-500">{data.footerText}</p>
            </div>
            
            <div className="space-y-3">
                {data.formFields.map((f, i) => (
                <div key={i}>
                        <input 
                            type="text" 
                            className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2.5 text-[12px] text-gray-800 focus:outline-none focus:bg-white focus:border-gray-400 transition-colors"
                            placeholder={f.label}
                            readOnly
                        />
                </div>
                ))}
            </div>

            {data.formOptions && (
                <div className="space-y-2">
                {data.formOptions.map((o, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-2.5 border border-gray-200 rounded bg-white hover:bg-gray-50">
                    <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                    <div className="text-[12px] text-gray-700">{o.label}</div>
                    </div>
                ))}
                </div>
            )}

            <div className="mt-auto">
                <button className="w-full bg-[#0095f6] text-white font-semibold py-2.5 rounded text-[12px]">Next</button>
            </div>
        </div>
      )}

      {/* MODE 3: Success / Minimal */}
      {!data.postCaption && !data.formFields && data.title && (
          <div className="flex flex-col items-center justify-center h-full text-center p-6">
               <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                   <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
               </div>
               <h3 className="font-bold text-[14px] text-gray-900 mb-2">{data.title}</h3>
               <p className="text-[11px] text-gray-500">{data.footerText}</p>
          </div>
      )}

    </div>
  </div>
);

// AI Mock
const AIMock: React.FC<{ data: MockContent }> = ({ data }) => (
  <div className="flex flex-col h-full bg-white text-right font-sans" dir="rtl">
    <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2 bg-white shrink-0">
       <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
         <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
       </div>
       <span className="text-[12px] font-bold text-gray-900">AI Assistant</span>
    </div>
    
    <div className="flex-grow p-4 space-y-4 overflow-y-auto no-scrollbar bg-[#f9fafb]">
      {data.messages?.map((msg, i) => (
        <div key={i} className="flex gap-2 items-start">
          <div className="w-6 h-6 rounded-full bg-emerald-600 shrink-0 mt-1 flex items-center justify-center text-white text-[9px] font-bold shadow-sm">AI</div>
          <div className="bg-white p-3 rounded-2xl rounded-tr-none border border-gray-100 shadow-sm max-w-[95%]">
             <p className="text-[12px] text-gray-800 leading-6 text-justify">
               {msg}
             </p>
          </div>
        </div>
      ))}
      
      {/* Simulation of "Readiness" State if specified */}
      {data.title && (
          <div className="flex justify-center mt-8">
              <div className="bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full text-[11px] text-emerald-700 font-medium">
                  {data.title}
              </div>
          </div>
      )}
    </div>
  </div>
);

const NodeCard: React.FC<NodeCardProps> = ({ content, type }) => {
  let borderColor = "border-gray-200";
  let shadow = "shadow-sm";
  let widthClass = "w-[300px]"; 
  
  // Rule: Mocks are always wide and dominant
  if (content.mock) {
    widthClass = "w-[400px]";
  }

  // Visual styles for columns (subtle)
  switch (type) {
    case 'mental': borderColor = "border-slate-200"; break;
    case 'trigger': borderColor = "border-stone-200"; break;
    case 'landing': borderColor = "border-neutral-200"; break;
    case 'experience': borderColor = "border-zinc-200"; break;
  }

  const isMock = !!content.mock;

  return (
    <div className={`relative flex flex-col ${widthClass} shrink-0 bg-white rounded-xl border ${borderColor} ${shadow} overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]`}>
      
      {/* 1. MOCK AREA (Dominant) */}
      {isMock && content.mock ? (
        <div className="flex-grow h-[320px] border-b border-gray-100 bg-gray-50">
           {content.mock.type === 'browser' && <BrowserMock data={content.mock} />}
           {content.mock.type === 'instagram' && <InstagramMock data={content.mock} />}
           {content.mock.type === 'ai' && <AIMock data={content.mock} />}
        </div>
      ) : (
        // Non-mock nodes (Outcomes/Insights)
        <div className="h-24 bg-gray-50 flex items-center justify-center border-b border-gray-100">
             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             </div>
        </div>
      )}

      {/* 2. MICRO-NOTE (Bottom) */}
      <div className="p-4 bg-white flex flex-col justify-center min-h-[80px]">
         {/* Step Label (Small) */}
         <div className="flex items-center gap-2 mb-2">
             <span className={`w-1.5 h-1.5 rounded-full ${isMock ? 'bg-blue-500' : 'bg-green-500'}`}></span>
             <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                {isMock ? content.title : 'Outcome'}
             </span>
         </div>
         
         {/* Note Content */}
         {content.items && (
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">
                {content.items[0]}
            </p>
         )}
      </div>
    </div>
  );
};

export default NodeCard;
