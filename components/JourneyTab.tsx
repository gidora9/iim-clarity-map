import React from 'react';

const STATES = [1, 2, 3, 4, 5, 6];
const ROLES = [
    { id: 'referrer', title: 'ارجاع‌دهنده', active: [1, 2] },
    { id: 'decision', title: 'تصمیم‌گیرنده اصلی', active: [3, 4, 5, 6] },
    { id: 'skeptic', title: 'پژوهشگر / شکاک', active: [3, 4, 5] }
];

// Simple mapping of needs (Truth Table)
const NEEDS_MAP: Record<string, string> = {
    'referrer-1': 'پاسخ کوتاه به سوال ذهنی (Hook)',
    'referrer-2': 'سندیت اولیه (نه تبلیغ)',

    'decision-3': 'مرزبندی ریسک (قرمز/سبز)',
    'decision-4': 'نقشه راه شفاف',
    'decision-5': 'روش بررسی وضعیت شخصی',
    'decision-6': 'مسیر اقدام (جلسه)',

    'skeptic-3': 'رفرنس قانونی / دکترین',
    'skeptic-4': 'نمونه‌های واقعی (Case Studies)',
    'skeptic-5': 'متدولوژی تحلیل'
};

const JourneyTab: React.FC = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-12 overflow-x-auto" dir="rtl">
            {/* Header */}
            <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">مسیر شفافیت (Clarity Loop)</h2>
                <p className="text-sm text-gray-500">جدول حقیقت: نقش × وضعیت = نیاز واحد</p>
            </div>

            {/* Matrix Board */}
            <div className="min-w-[800px] border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">

                {/* Header Row */}
                <div className="grid grid-cols-[200px_repeat(6,1fr)] bg-gray-50 border-b border-gray-200">
                    <div className="p-4 font-bold text-gray-400 text-xs uppercase tracking-widest flex items-center justify-center">
                        نقش / وضعیت
                    </div>
                    {STATES.map(s => (
                        <div key={s} className="p-4 text-center border-r border-gray-100 last:border-0">
                            <span className="block text-xl font-bold text-gray-300 mb-1">{s}</span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">وضعیت</span>
                        </div>
                    ))}
                </div>

                {/* Rows */}
                {ROLES.map((role) => (
                    <div key={role.id} className="grid grid-cols-[200px_repeat(6,1fr)] border-b border-gray-100 last:border-0 hover:bg-gray-50/30 transition-colors">
                        {/* Role Cell */}
                        <div className="p-4 border-l border-gray-100 flex items-center justify-end md:justify-center font-bold text-gray-800 text-sm bg-gray-50/10">
                            {role.title}
                        </div>

                        {/* State Cells */}
                        {STATES.map(state => {
                            const key = `${role.id}-${state}`;
                            const content = NEEDS_MAP[key];
                            const isActive = role.active.includes(state);

                            return (
                                <div key={state} className={`p-4 border-r border-gray-100 flex items-center justify-center text-center text-sm relative ${isActive ? 'bg-white' : 'bg-gray-50/50'}`}>
                                    {content ? (
                                        <div className="w-full">
                                            <span className="block font-medium text-gray-800 leading-tight">
                                                {content}
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="text-[10px] text-gray-300 select-none">
                                            {isActive ? '---' : 'فعلاً پوشش نمی‌دهیم'}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}

            </div>
        </div>
    );
};

export default JourneyTab;
