# سبورة رمزي · Ramzi Board

سبورة ذكية تعمل **بالكامل بدون إنترنت** وتُثبَّت كتطبيق (PWA): كتابة بالقلم واللمس، PDF وPowerPoint، كيمياء، رياضيات وفيزياء.
An offline-first whiteboard you can install as an app (PWA).

## التشغيل · Run
- مباشرة: افتح `index.html` في Chrome/Edge (يعمل بدون تثبيت، لكن التثبيت كتطبيق يحتاج http/https).
- محلياً مع التثبيت: `python3 -m http.server 8000` ثم افتح `http://localhost:8000`.

## النشر على GitHub Pages
1. ارفع محتويات هذا المجلد إلى جذر المستودع.
2. **Settings → Pages → Deploy from a branch → `main` / `/ (root)`**.
3. افتح الرابط `https://<user>.github.io/<repo>/`.

## التثبيت كتطبيق
- **Chrome / Edge (كمبيوتر وأندرويد):** زر «تثبيت» في الشريط العلوي، أو أيقونة التثبيت في شريط العنوان.
- **iPhone / iPad (Safari):** مشاركة ← «إضافة إلى الشاشة الرئيسية».
بعد أول زيارة يعمل التطبيق بدون إنترنت.

## تحديث الإصدار
غيّر `VERSION` في `sw.js` عند كل إصدار حتى يتحدّث الكاش عند المستخدمين.

## البنية
| الملف | الوظيفة |
|---|---|
| `index.html` | التطبيق كاملاً (مكتبات PDF/PPTX/Chart مضمّنة) |
| `manifest.webmanifest` | بيانات التثبيت |
| `sw.js` | العمل بدون إنترنت (stale-while-revalidate) |
| `icons/` | أيقونات التطبيق ولقطات صفحة التثبيت |

## الخصوصية والأمان
- لا توجد أي طلبات شبكة خارجية؛ سياسة `Content-Security-Policy` تمنعها (`connect-src 'self'`).
- لا يُستخدم `eval` ولا `new Function` (تم استبدال محلل الدوال بمحلل آمن).
- يُحفظ العمل محلياً في المتصفح فقط (`localStorage`).

## المكتبات المضمّنة
pdf.js (Apache-2.0) · JSZip · Chart.js (MIT) · حزمة تصدير PPTX. حافظ على إشعارات الرخص الموجودة داخل `index.html`.

## مراجع المنهج (للاطلاع فقط)
https://www.moe.gov.sa/ar/mediacenter/MOEnews/Pages/i-85976-t.aspx · https://sites.moe.gov.sa/Qassim/services/service-15/ · https://www.ientv.edu.sa/

> ملاحظة: لم يُضف ملف `LICENSE` — اختر الرخصة التي تناسبك قبل النشر.
