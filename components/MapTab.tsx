import React, { useState } from 'react';
import { GLOSSARY_ITEMS } from '../constants';

const ROLES = [
    { title: "ارجاع‌دهنده (Referrer)", desc: "کسی که مشکل را می‌بیند اما خود درگیر نیست." },
    { title: "تصمیم‌گیرنده اصلی (Primary Decision Maker)", desc: "کسی که هزینه/ریسک را متحمل می‌شود." },
    { title: "پژوهشگر / شکاک (Skeptic)", desc: "کسی که دنبال ایراد و اطمینان است." }
];

const STATES = [
    "۰. بی‌خبر (Unaware)",
    "۱. مواجهه (Awareness)",
    "۲. کنجکاوی (Interest)",
    "۳. جستجو / ارزیابی (Consideration)",
    "۴. تصمیم (Decision)",
    "۵. اقدام (Action)",
    "۶. بازتاب (Reflection)"
];

const MapTab: React.FC = () => {
    const [glossaryOpen, setGlossaryOpen] = useState(false);

    return (
        <div className="w-full max-w-4xl mx-auto px-6 py-12" dir="rtl">

            {/* Header / Note */}
            <div className="mb-12 text-center border-b border-gray-100 pb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">نقشه ذهنی (Mental Model)</h2>
                <p className="text-sm text-gray-500 bg-gray-50 inline-block px-4 py-2 rounded-full border border-gray-100">
                    این بخش برای هم‌فهمی است، نه اجرا.
                </p>
            </div>

            {/* Roles Section */}
            <section className="mb-16">
                <h3 className="text-lg font-bold text-gray-800 mb-6 border-r-4 border-gray-900 pr-3">نقش‌های تصمیم‌گیری</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {ROLES.map((role, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:border-gray-300 transition-colors">
                            <h4 className="font-bold text-gray-900 mb-2 text-sm">{role.title}</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">{role.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* States Section */}
            <section className="mb-16">
                <h3 className="text-lg font-bold text-gray-800 mb-6 border-r-4 border-gray-900 pr-3">وضعیت‌های ذهنی (۰ تا ۶)</h3>
                <div className="flex flex-wrap gap-3">
                    {STATES.map((state, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 px-4 py-3 rounded-md shadow-sm text-sm text-gray-700 font-medium whitespace-nowrap">
                            {state}
                        </div>
                    ))}
                </div>
            </section>

            {/* Collapsible: North Star */}
            <section className="mb-6">
                <details className="group bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50/50 hover:bg-gray-50 transition-colors list-none">
                        <span className="font-bold text-gray-700 text-sm">قطب‌نما (North Star)</span>
                        <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 border-t border-gray-100">
                        <p className="text-sm text-gray-600 leading-8 text-justify">
                            هدف اصلی جلوگیری از سردرگمی کاربر در مواجهه با قوانین پیچیده تولد است. ما نمی‌خواهیم کاربر را بترسانیم یا به او امید واهی بدهیم. ما می‌خواهیم او را به سطح «آگاهی تصمیم‌ساز» برسانیم.
                        </p>
                    </div>
                </details>
            </section>

            {/* Collapsible: Glossary */}
            <section className="mb-12">
                <details className="group bg-white border border-gray-200 rounded-lg overflow-hidden" open={glossaryOpen} onToggle={(e) => setGlossaryOpen((e.currentTarget as HTMLDetailsElement).open)}>
                    <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50/50 hover:bg-gray-50 transition-colors list-none">
                        <span className="font-bold text-gray-700 text-sm">واژگان و ادبیات (Glossary)</span>
                        <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {GLOSSARY_ITEMS.map((item, idx) => (
                            <div key={idx} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="font-bold text-gray-900 text-sm">{item.term}</span>
                                    <span className="text-xs text-gray-400">← {item.definition}</span>
                                </div>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.reason}</p>
                            </div>
                        ))}
                    </div>
                </details>
            </section>

        </div>
    );
};

export default MapTab;
