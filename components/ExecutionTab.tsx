import React from 'react';
import PagesTab from './PagesTab'; // We'll reuse the cards as the "Materials Map"

const EXECUTION_INDEX = [
    { persona: "ارجاع‌دهنده", awareness: "۰. بی‌خبر", keywords: "تولد کانادا، پاسپورت نوزاد", source: "گوگل / اینستاگرام", asset: "Landing (Hero)", msg: "تولد همیشه پاسپورت نمی‌دهد.", cta: "بیشتر بخوانید", status: "Active" },
    { persona: "ارجاع‌دهنده", awareness: "۱. مواجهه", keywords: "قانون خاک کانادا", source: "لندینگ", asset: "Micro-Content", msg: "تفاوت خاک و خون.", cta: "دانلود PDF", status: "Draft" },
    { persona: "تصمیم‌گیرنده", awareness: "۳. جستجو", keywords: "هزینه زایمان در...", source: "ایمیل / سرچ", asset: "Comparison Page", msg: "ریسک‌های پنهان را بشناسید.", cta: "ارزیابی رایگان", status: "Planned" },
    { persona: "شکاک", awareness: "۴. تصمیم", keywords: "کلاهبرداری زایمان", source: "ریسرچ", asset: "Legal Doc / Validations", msg: "ما مشاور حقوقی نیستیم، پلتفرم ثبتیم.", cta: "رزرو جلسه", status: "TBD" }
];

const ExecutionTab: React.FC = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-12" dir="rtl">

            {/* Header */}
            <div className="mb-12 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">برنامه اجرایی (Execution Plan)</h2>
                <p className="text-sm text-gray-500">تبدیل استراتژی به خروجی قابل لمس</p>
            </div>

            {/* Execution Index Table */}
            <div className="mb-20 overflow-x-auto">
                <h3 className="text-lg font-bold text-gray-800 mb-6 border-r-4 border-blue-600 pr-3">ایندکس اجرایی</h3>
                <div className="min-w-[900px] bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    <table className="w-full text-right text-sm">
                        <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-gray-200">
                            <tr>
                                <th className="p-4">پرسونا / مخاطب</th>
                                <th className="p-4">وضعیت آگاهی</th>
                                <th className="p-4">کلمات کلیدی</th>
                                <th className="p-4">منبع ترافیک</th>
                                <th className="p-4">دارایی (ASSET)</th>
                                <th className="p-4">پیام اصلی</th>
                                <th className="p-4">CTA</th>
                                <th className="p-4 text-center">وضعیت</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {EXECUTION_INDEX.map((row, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 font-bold text-gray-800">{row.persona}</td>
                                    <td className="p-4 text-gray-600">{row.awareness}</td>
                                    <td className="p-4 text-gray-500 text-xs">{row.keywords}</td>
                                    <td className="p-4 text-gray-600">{row.source}</td>
                                    <td className="p-4 text-blue-600 font-medium">{row.asset}</td>
                                    <td className="p-4 text-gray-600 truncate max-w-[200px]" title={row.msg}>{row.msg}</td>
                                    <td className="p-4 text-gray-800 font-bold text-xs">{row.cta}</td>
                                    <td className="p-4 text-center">
                                        <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase ${row.status === 'Active' ? 'bg-green-100 text-green-700' :
                                                row.status === 'Draft' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-gray-100 text-gray-400'
                                            }`}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Materials Map (Reusing PagesTab info) */}
            <div>
                <h3 className="text-lg font-bold text-gray-800 mb-8 border-r-4 border-purple-600 pr-3">نقشه متریال‌ها (Materials Map)</h3>

                {/* Embed existing PagesTab functionality but simplified wrapper mostly */}
                <PagesTab />
            </div>

        </div>
    );
};

export default ExecutionTab;
