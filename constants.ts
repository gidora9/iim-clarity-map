
import { FlowData, DecisionPhase, GlossaryItem } from './types';

export const FLOWS: FlowData[] = [
  {
    id: 'flow-1',
    name: 'جریان ۱ — جستجوی گوگل (کاربر با قصد)',
    connectorLabels: ['جستجو', 'کلیک', 'مطالعه'],
    nodes: {
      // STEP 1: Google Ad
      mental: {
        title: 'گام ۱',
        items: ['کاربر با قصد مشخص جستجو می‌کند.'],
        mock: {
          type: 'browser',
          url: 'google.com/search',
          adTitle: 'تولد فرزند در خارج | قانون خاک و خون',
          adDesc: 'تولد همیشه به معنای شهروندی یا پاسپورت نیست. تفاوت قانون خاک و خون را دقیق بفهمید.',
        }
      },
      // STEP 2: LP Hero
      trigger: {
        title: 'گام ۲',
        items: ['اولین مواجههٔ واقعی با محتوا'],
        mock: {
          type: 'browser',
          url: 'iim.life/status',
          lpHero: 'تولد فرزند در خارج از کشور\nهمیشه نتیجه‌ای را که فکر می‌کنیم ندارد',
          lpSubtext: 'در بعضی کشورها تولد کافی است؛\nدر بعضی دیگر، شرایط والدین تعیین‌کننده است.'
        }
      },
      // STEP 3: Reading / Deep Dive
      landing: {
        title: 'گام ۳',
        items: ['کاربر دنبال فهمیدن است، نه تصمیم فوری'],
        mock: {
          type: 'browser',
          url: 'iim.life/status',
          lpHero: 'تفاوت‌های ساده\nمنشأ بیشترین سوءبرداشت‌هاست',
          lpBody: 'بسیاری تصور می‌کنند با تولد فرزند، «پاسپورت» صادر می‌شود. اما در نظام‌های مبتنی بر خون، تابعیت فرزند به تابعیت والدین وابسته است، نه محل تولد.',
          buttonText: 'شفاف‌سازی وضعیت'
        }
      },
      // STEP 4: Outcome
      experience: {
        title: 'RESULT',
        items: ['نتیجه: آمادگی ذهنی بدون فشار فروش']
      }
    }
  },
  {
    id: 'flow-2',
    name: 'جریان ۲ — اینستاگرام (کنجکاوی)',
    connectorLabels: ['مواجهه', 'کلیک', 'ارسال'],
    nodes: {
      // STEP 1: IG Post
      mental: {
        title: 'گام ۱',
        items: ['مواجهه ناگهانی، بدون جستجو'],
        mock: {
          type: 'instagram',
          postCaption: 'فکر می‌کنید تولد فرزند، به معنای پاسپورت است؟\n\nدر بسیاری از کشورها این‌طور نیست. قانون خاک همه‌جا اجرا نمی‌شود.'
        }
      },
      // STEP 2: Lead Form
      trigger: {
        title: 'گام ۲',
        items: ['تعامل کم‌ریسک و سریع'],
        mock: {
          type: 'instagram',
          title: 'مطمئنید وضعیت تولد فرزند\nهمان چیزی است که فکر می‌کنید؟',
          formFields: [
            { label: 'نام شما', placeholder: '...' },
            { label: 'شماره تماس', placeholder: '...' }
          ],
          footerText: 'بدون وعده؛ فقط شفاف‌سازی'
        }
      },
      // STEP 3: Success State
      landing: {
        title: 'گام ۳',
        items: ['هنوز هیچ تعهدی ایجاد نشده'],
        mock: {
          type: 'instagram',
          title: 'درخواست ثبت شد',
          footerText: 'مشاوران ما به‌زودی برای شفاف‌سازی تماس می‌گیرند.'
        }
      },
      // STEP 4: Outcome
      experience: {
        title: 'RESULT',
        items: ['نتیجه: کنجکاوی ارضا شد، مسیر باز شد']
      }
    }
  },
  {
    id: 'flow-3',
    name: 'جریان ۳ — هوش مصنوعی (بی‌طرف)',
    connectorLabels: ['پرسش', 'پاسخ', 'مطالعه'],
    nodes: {
      // STEP 1: AI Chat Start
      mental: {
        title: 'گام ۱',
        items: ['مطالعه بدون فشار تبلیغاتی'],
        mock: {
          type: 'ai',
          messages: [
            'سوال: آیا تولد فرزند در هر کشوری باعث گرفتن پاسپورت می‌شود؟',
            'پاسخ: خیر. کشورها به دو دسته قانون خاک و قانون خون تقسیم می‌شوند.'
          ]
        }
      },
      // STEP 2: AI Deepening
      trigger: {
        title: 'گام ۲',
        items: ['فهم تدریجی و عمیق'],
        mock: {
          type: 'ai',
          messages: [
            'در قانون خون، تابعیت والدین مهم است.',
            'این یعنی حتی اگر فرزند در خاک آن کشور متولد شود، لزوماً شهروند نمی‌شود.'
          ]
        }
      },
      // STEP 3: Readiness
      landing: {
        title: 'گام ۳',
        items: ['آمادگی برای ورود آگاهانه به مسیر'],
        mock: {
          type: 'ai',
          messages: ['بنابراین قبل از سفر، باید قوانین کشور مقصد را دقیق چک کنید.'],
          title: 'پایان گفتگو - کاربر آگاه شد'
        }
      },
      // STEP 4: Outcome
      experience: {
        title: 'RESULT',
        items: ['نتیجه: اعتماد به دانش بی‌طرف ایجاد شد']
      }
    }
  }
];

export const FOOTER_TEXT = "قاعده: هر گام یک تجربه بصری مستقل است.";

export const DECISION_TAB_TITLE = "سکانس تصمیم‌گیری";
export const DECISION_TAB_INTRO = "ترتیب تصمیم‌ها در پروژه، نه ترتیب اجرا.";
export const DECISION_TAB_FOOTER = "یادآوری: ما اینجا روی فرض‌ها توافق می‌کنیم، نه رنگ دکمه‌ها.";

export const GLOSSARY_TAB_TITLE = "منطق واژگان (چرا این کلمه؟)";
export const GLOSSARY_TAB_INTRO = "اینجا توضیح نمی‌دهیم کلمات چه معنی‌ای دارند، توضیح می‌دهیم چرا انتخابشان کردیم.";

export const DECISION_PHASES: DecisionPhase[] = [
  {
    id: 'phase-0',
    title: 'فاز ۰ — هم‌فکری',
    duration: '۱ جلسه',
    items: [
      'توافق روی نقشه',
      'پذیرش اینکه «هنوز نمی‌دانیم»'
    ]
  },
  {
    id: 'phase-1',
    title: 'فاز ۱ — قفل مفروضات',
    duration: '۲ روز',
    items: [
      'کدام فرض‌ها خطرناک‌ترین هستند؟',
      'روی چه چیزهایی توافق نداریم؟'
    ]
  },
  {
    id: 'phase-2',
    title: 'فاز ۲ — طراحی تست',
    duration: '۲ روز',
    items: [
      'ساده‌ترین راه برای چک کردن فرض چیست؟',
      'متریک موفقیت: کلیک یا ثبت‌نام؟'
    ]
  },
  {
    id: 'phase-3',
    title: 'فاز ۳ — اجرای تست',
    duration: '۱۰ روز',
    items: [
      'اجرا روی تعداد کم',
      'بدون تغییر وسط کار'
    ]
  },
  {
    id: 'phase-4',
    title: 'فاز ۴ — تصمیم',
    duration: '۳۰ دقیقه',
    items: [
      'ادامه بدهیم یا متوقف کنیم؟'
    ]
  }
];

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    term: "فهم دقیق",
    definition: "جایگزین «درخواست» یا «مشاوره»",
    reason: "به کاربر حس کنترل می‌دهد؛ انگار دارد یاد می‌گیرد نه خرید می‌کند.",
    excluded: "مشاوره، اقدام، بررسی پرونده"
  },
  {
    term: "شفاف‌سازی",
    definition: "جایگزین «ارزیابی»",
    reason: "بار خنثی دارد. کاربر حس نمی‌کند کسی قرار است قضاوتش کند.",
    excluded: "سنجش، ارزیابی، تایید صلاحیت"
  },
  {
    term: "وضعیت",
    definition: "جایگزین «پرونده حقوقی»",
    reason: "کلمه «پرونده» استرس‌زاست. «وضعیت» یک چیز جاری و طبیعی است.",
    excluded: "کیس، پرونده، مشکل حقوقی"
  },
  {
    term: "تفاوت‌ها",
    definition: "جایگزین «قوانین پیچیده»",
    reason: "پیچیدگی کاربر را می‌ترساند، اما «تفاوت» فقط یک دانستنی است.",
    excluded: "ریسک‌ها، موانع قانونی، تبصره‌ها"
  }
];
