import React from 'react';

const PAGE_CARDS = [
    {
        title: 'صفحه معرفی ساده',
        goal: 'آیا این موضوع واقعاً مهم است یا نه؟',
        role: 'ارجاع‌دهنده — تحریک‌شده',
        does: [
            'جلب توجه با یک سوال مشترک',
            'ارائه پاسخ کوتاه و شفاف (Hook)',
            'هدایت به صفحه شفاف‌سازی'
        ],
        doesNot: [
            'فروش خدمات',
            'توضیح جزئیات حقوقی'
        ],
        outputs: 'وب / پست اینستاگرام / ریلز / موشن'
    },
    {
        title: 'صفحه شفاف‌سازی اولیه (افسانه / واقعیت)',
        goal: 'بتوان موضوع را ساده و درست برای دیگری توضیح داد',
        role: 'ارجاع‌دهنده — سردرگم',
        does: [
            'اصلاح باورهای غلط رایج',
            'ارائه یک دکترین ساده (این هست / این نیست)',
            'ایجاد اعتماد اولیه'
        ],
        doesNot: [
            'مشاوره تخصصی',
            'ایجاد احساس ترس بی‌مورد'
        ],
        outputs: 'وب / پست اینستاگرام / ریلز / موشن'
    },
    {
        title: 'صفحه اصلی (مرزبندی ریسک)',
        goal: 'بدانی دقیقاً کجا ممکن است اشتباه کنی',
        role: 'تصمیم‌گیرنده — آگاه از ریسک\nپژوهشگر / شکاک — آگاه از ریسک',
        does: [
            'تعریف دقیق ریسک‌ها',
            'مشخص کردن مرزهای قانونی',
            'معرفی راهکارهای مدیریت ریسک'
        ],
        doesNot: [
            'تضمین موفقیت صد در صد',
            'ساده‌انگاری بیش از حد'
        ],
        outputs: 'وب'
    },
    {
        title: 'صفحه تصویر کلی',
        goal: 'یک تصویر کلی بدون جزئیات خفه‌کننده',
        role: 'تصمیم‌گیرنده — سردرگم',
        does: [
            'نمایش نقشه راه کلی',
            'مشخص کردن مراحل اصلی',
            'ایجاد حس تسلط بر مسیر'
        ],
        doesNot: [
            'غرق کردن کاربر در جزئیات فنی',
            'استفاده از اصطلاحات پیچیده'
        ],
        outputs: 'وب',
        note: 'در صورت حفظ وضوح، می‌تواند با صفحه اصلی ادغام شود.'
    },
    {
        title: 'صفحه ارزیابی / بررسی وضعیت',
        goal: 'یک روش مشخص برای بررسی وضعیت شخصی',
        role: 'تصمیم‌گیرنده — دنبال شفافیت\nپژوهشگر / شکاک — دنبال شفافیت',
        does: [
            'پرسیدن سوالات کلیدی',
            'تحلیل اولیه شرایط کاربر',
            'پیشنهاد مسیر مناسب'
        ],
        doesNot: [
            'دریافت اطلاعات حساس غیرضروری',
            'ارائه حکم قطعی حقوقی'
        ],
        outputs: 'وب (تول) / فرم'
    },
    {
        title: 'صفحه اقدام (جلسه)',
        goal: 'بداند قدم بعدی دقیقاً چیست',
        role: 'تصمیم‌گیرنده — آماده تصمیم',
        does: [
            'توضیح شفاف فرآیند جلسه',
            'نمایش زمان‌های در دسترس',
            'تسهیل رزرو وقت'
        ],
        doesNot: [
            'فشار برای خرید فوری',
            'پنهان‌کاری در هزینه‌ها'
        ],
        outputs: 'وب'
    },
    {
        title: 'صفحه جمع‌بندی و اشتراک',
        goal: 'آرامش + امکان ارجاع طبیعی',
        role: 'تصمیم‌گیرنده — بعد از شفافیت\nارجاع‌دهنده (جدید)',
        does: [
            'خلاصه پرونده و مسیر طی شده',
            'امکان اشتراک‌گذاری امن اطلاعات',
            'دعوت به اقدامات بعدی (در صورت نیاز)'
        ],
        doesNot: [
            'تبلیغات مزاحم',
            'فروش اطلاعات کاربر'
        ],
        outputs: 'وب / PDF'
    }
];

const PagesTab: React.FC = () => {
    return (
        <div className="w-full max-w-4xl mx-auto px-6" dir="rtl">
            {/* Header */}
            <div className="mb-12 text-center md:text-right">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    صفحات استخراج‌شده از مسیر تصمیم
                </h2>
                <p className="text-gray-500 text-sm font-medium">
                    هر صفحه فقط یک کار انجام می‌دهد
                </p>
            </div>

            {/* Cards List */}
            <div className="flex flex-col gap-6 pb-20">
                {PAGE_CARDS.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-100 rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-shadow duration-200"
                    >
                        {/* Card Header: Title & Goal */}
                        <div className="mb-6 pb-4 border-b border-gray-50">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                {card.title}
                            </h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-xs text-gray-400 font-bold ml-1">هدف اصلی:</span>
                                <p className="font-bold text-gray-900 text-sm">
                                    {card.goal}
                                </p>
                            </div>
                        </div>

                        {/* Grid Layout for Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Left Column (Desktop) / Top (Mobile): Role & Status */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                                        نقش‌ها و وضعیت‌ها
                                    </h4>
                                    <pre className="text-sm text-gray-600 whitespace-pre-line font-sans leading-relaxed">
                                        {card.role}
                                    </pre>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                                        خروجی‌ها
                                    </h4>
                                    <span className="inline-block bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded border border-gray-100 font-medium">
                                        {card.outputs}
                                    </span>
                                </div>
                            </div>

                            {/* Right Column (Desktop) / Bottom (Mobile): Do's and Don'ts */}
                            <div className="space-y-6 bg-gray-50/50 p-4 rounded-md">
                                <div>
                                    <h4 className="text-xs font-bold text-green-700/80 mb-2 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                        این صفحه چه می‌کند
                                    </h4>
                                    <ul className="space-y-1.5 list-none">
                                        {card.does.map((item, idx) => (
                                            <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                                                <span className="opacity-50">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-red-700/80 mb-2 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                                        این صفحه چه کارهایی نباید بکند
                                    </h4>
                                    <ul className="space-y-1.5 list-none">
                                        {card.doesNot.map((item, idx) => (
                                            <li key={idx} className="text-xs text-gray-500 flex items-start gap-2">
                                                <span className="opacity-40">-</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>

                        {/* Optional Note */}
                        {card.note && (
                            <div className="mt-4 pt-3 border-t border-gray-50 text-[11px] text-gray-400 text-center md:text-right italic">
                                {card.note}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Footer Note */}
            <div className="text-center pb-12">
                <p className="text-[10px] text-gray-300 font-medium">
                    این لیست مرجع ساخت سایت است، نه کپی نهایی و نه سند حقوقی.
                </p>
            </div>
        </div>
    );
};

export default PagesTab;
