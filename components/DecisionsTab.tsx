import React from 'react';

const DECISIONS = [
    { title: "عدم استفاده از کلمه «تضمین»", status: "قفل شد", reason: "ایجاد بار حقوقی و کاهش اعتماد در مخاطب هوشمند.", type: "cvi" },
    { title: "استفاده از تقویم میلادی در فرم‌ها", status: "معلق (TBD)", reason: "ممکن است برای کاربران داخل ایران گیج‌کننده باشد.", type: "ux" },
    { title: "حذف واتس‌اپ به عنوان کانال اول", status: "قفل شد", reason: "جلوگیری از مکالمات غیررسمی و پراکنده قبل از احراز صلاحیت.", type: "process" },
    { title: "نمایش قیمت‌ها در صفحه اول", status: "معلق (TBD)", reason: "نیاز به بررسی استراتژی قیمت‌گذاری دینامیک.", type: "biz" },
    { title: "رنگ سازمانی: مونوکروم + آبی تیره", status: "قفل شد", reason: "القای حس رسمی و سازمانی (Institutional).", type: "brand" }
];

const RULES = [
    "هیچ وقت کاربر را نترسانیم (Fear Mongering ممنوع).",
    "هیچ وقت قول نتیجه قطعی ندهیم.",
    "همیشه روی «قانون» تمرکز کنیم، نه «روابط».",
    "کپی نباید «فروشنده» باشد، باید «مشاور» باشد."
];

const DecisionsTab: React.FC = () => {
    return (
        <div className="w-full max-w-3xl mx-auto px-6 py-12" dir="rtl">

            {/* Header */}
            <div className="mb-12 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">ثبت تصمیم‌ها (Decision Log)</h2>
                <p className="text-sm text-gray-500">جلوگیری از بازگشت به عقب و بحث‌های تکراری</p>
            </div>

            {/* Discipline Rules */}
            <div className="bg-rose-50 border border-rose-100 rounded-lg p-6 mb-12">
                <div className="flex items-center gap-3 mb-4 text-rose-700">
                    <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                    <h3 className="font-bold text-sm uppercase tracking-wider">قوانین انضباطی (Red Lines)</h3>
                </div>
                <ul className="space-y-3">
                    {RULES.map((rule, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-800 font-medium">
                            <span className="text-rose-400 ml-2 font-bold">•</span>
                            {rule}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Locked Decisions */}
            <div className="space-y-4 mb-16">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 pr-2 border-r-2 border-green-500">تصمیم‌های قفل‌شده</h3>
                {DECISIONS.filter(d => d.status === "قفل شد").map((item, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 p-5 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                            <p className="text-xs text-gray-500">{item.reason}</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 whitespace-nowrap self-start md:self-center">
                            قفل شد
                        </span>
                    </div>
                ))}
            </div>

            {/* TBD Zone */}
            <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-8 bg-gray-50/50">
                <div className="absolute -top-3 right-6 bg-gray-100 px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest rounded-full">
                    No Entry Zone
                </div>

                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 pr-2 border-r-2 border-amber-400">موارد معلق (TBD) — فعلاً بررسی نمی‌شود</h3>

                <div className="space-y-3 opacity-60 hover:opacity-100 transition-opacity">
                    {DECISIONS.filter(d => d.status.includes("TBD")).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-3 rounded hover:bg-white transition-colors">
                            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                            <div>
                                <h4 className="font-bold text-gray-700 text-sm">{item.title}</h4>
                                <p className="text-xs text-gray-400 mt-1">{item.reason}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default DecisionsTab;
