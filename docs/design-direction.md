# Lumina Factory — دراسة التوجه التصميمي

> وثيقة المرحلة الأولى: تحليل المنافسين + تحديد الهوية البصرية + أساسيات نظام التصميم

---

## 1. ملخص تنفيذي

Lumina Factory منصة AI لتوليد صور منتجات باستخدام هوية بصرية مرجعية (DNA). المنتج حالياً يعمل تقنياً، لكن الواجهة والهوية في مرحلة MVP. الهدف من هذه الدراسة هو رفع المنصة لمستوى يضاهر أكبر منصات AI العالمية من حيث الوضوح، الثقة، والجمال البصري.

### المشاكل الحالية
- Landing page مكونة من Hero فقط، لا تبني ثقة ولا تشرح المنتج بالعمق.
- لا يوجد App Shell أو نظام تنقل واضح داخل التطبيق.
- Typography و Colors و Spacing افتراضية من shadcn، غير مميزة.
- لا توجد Animations أو Micro-interactions.
- الصفحات الداخلية تبدو ك Forms بدائية.
- لا يوجد محتوى تسويقي (Pricing، Use Cases، Testimonials، FAQ).

---

## 2. تحليل المنافسين

### 2.1 Midjourney (midjourney.com)
**الشعور:** فني، مجتمعي، غامض، جميل.
**Strengths:**
- Landing page بسيطة جداً لكنها تترك انطباعاً قوياً.
- التركيز على الجمال البصري والفن.
- Community-driven positioning.
**Weaknesses:**
- صعبة الاستخدام للمبتدئين.
- لا تشرح المنتج بعمق للشركات.
**ما يمكن تطبيقه:**
- دراما بصرية في الـ Hero.
- ثقة في الجودة البصرية.
- Tone هادئ وفلسفي.

### 2.2 Runway (runwayml.com)
**الشعور:** تقني، بحثي، سينمائي، مستقبلي.
**Strengths:**
- تمركز واضح على Research + General World Models.
- تنقل احترافي وfooter ضخم.
- Case studies مع شركات كبرى.
**Weaknesses:**
- كثافة معلومات عالية.
**ما يمكن تطبيقه:**
- صفحات Use Cases و Case Studies.
- Navigation عمودي واضح.
- Trust signals (شركاء، أرقام).

### 2.3 Adobe Firefly
**الشعور:** آمن، احترافي، متكامل، enterprise.
**Strengths:**
- Commercially safe positioning.
- Integration مع Adobe ecosystem.
- FAQ ضخم وشرح مفصل.
**Weaknesses:**
- تصميم تقليدي نوعاً ما.
**ما يمكن تطبيقه:**
- صفحة Pricing واضحة.
- Trust badges و Content Credentials.
- محتوى تعليمي.

### 2.4 Leonardo.Ai
**الشعور:** مرن، creator-first، فعّال.
**Strengths:**
- Gallery قوية في الـ Hero تعرض أمثلة فورية.
- Tone عملي: "Create images without limits".
- Tutorial section واضح.
**Weaknesses:**
- تصميم مزدحم بعض الشيء.
**ما يمكن تطبيقه:**
- Show, don't tell — عرض أمثلة AI حقيقية.
- Galleries وتصنيفات.
- Tutorials / Onboarding.

### 2.5 Linear (linear.app)
**الشعور:** سريع، نظيف، منتجي، محترف.
**Strengths:**
- Typography استثنائي.
- Motion design خفيف ومؤثر.
- Layout واضح ومتناسق.
- Dark theme جميل.
**ما يمكن تطبيقه:**
- UI density الأمثل.
- Animations Purposeful.
- Dark mode premium.

---

## 3. توجيه العلامة التجارية (Brand Direction)

### 3.1 Brand Positioning
**Lumina Factory ليست مجرد مولد صور.**
هي **مصنع بصري ذكي** يحول استوديو تصوير واحد إلى إنتاج ضخم.

### 3.2 Brand Personality
- **دقيق:** مثل المصور المحترف.
- **قوي:** يتعامل مع آلاف الصور.
- **أنيق:** يجذب العلامات التجارية الفاخرة.
- **بسيط:** يجعل التعقيد التقني غير مرئي.

### 3.3 Brand Promise
> "صوّر مرة واحدة. استنسخ هويتك مليون مرة."

### 3.4 Tone of Voice
- عربي فصيح قريب، بدون تعقيد.
- إنجليزي احترافي وموجز.
- لا نبالغ في المصطلحات التقنية.
- نركز على النتيجة: صور منتجات احترافية.

---

## 4. التوجه البصري (Visual Direction)

### 4.1 Theme: Dark Premium
بناءً على طبيعة المنتج (استوديوهات، منتجات فاخرة، AI)، نقترح:
- **خلفية داكنة** (Near-black or deep charcoal) كأساس.
- **لمحات ضوئية** (Light accents) ترمز للضوء والاستوديو.
- **Glassmorphism خفيف** للبطاقات والـ overlays.
- **Gradients دقيقة** للـ Hero والـ CTAs.

### 4.2 Color Palette المقترح

#### الأساسيات
| اللون | القيمة | الاستخدام |
|-------|--------|-----------|
| Background | `#0A0A0B` | خلفية التطبيق |
| Surface | `#141416` | البطاقات والأقسام |
| Surface Elevated | `#1C1C1F` | Hover، dropdowns |
| Border | `rgba(255,255,255,0.08)` | الحدود الدقيقة |
| Text Primary | `#FAFAFA` | النصوص الرئيسية |
| Text Secondary | `#A1A1AA` | النصوص الثانوية |
| Text Muted | `#71717A` | التلميحات |

#### لون التمييز (Accent)
| اللون | القيمة | الاستخدام |
|-------|--------|-----------|
| Primary Accent | `#F59E0B` (Amber 500) | CTA، Brand moments |
| Accent Glow | `rgba(245,158,11,0.3)` | Glow effects |
| Secondary Accent | `#8B5CF6` (Violet 500) | AI moments، highlights |
| Success | `#22C55E` | حالات النجاح |
| Error | `#EF4444` | حالات الخطأ |
| Warning | `#F97316` | التحذيرات |

> لماذا Amber/Gold؟ يرمز للضوء، الاستوديو، الفخامة، والدفء. مناسب جداً لاسم "Lumina".

### 4.3 Typography المقترح

#### عربي
**الخيار الأول: IBM Plex Sans Arabic**
- نظيف، احترافي، يقرأ جيداً على الشاشات.
- يدعم الأرقام العربية والإنجليزية بشكل متناسق.

**الخيار الثاني: Tajawal**
- حديث، عصري، مناسب للتقنية.
- أقل وزناً من IBM Plex.

**الخيار الثالث: Cairo**
- شائع، نظيف، but slightly overused.

> **التوصية:** IBM Plex Sans Arabic للـ body + Tajawal Bold للـ Headings.

#### إنجليزي
- **Primary:** Inter أو Geist.
- **Headings:** Space Grotesk أو Cal Sans (للشعور التقني).

### 4.4 Icons
- **Lucide React** (موجود حالياً) — نظيف و scalable.
- يمكن إضافة **Phosphor Icons** للشعور الأكثر حداثة.
- الأيقونات تكون بسماكة 1.5px أو 2px.

### 4.5 Imagery Style
- صور منتجات واقعية + توليد AI.
- إضاءة استوديو ناعمة.
- خلفيات داكنة أو gradient خفيف.
- تأثيرات ضوئية (light rays, glows) ترمز للـ "Lumina".

---

## 5. أساسيات نظام التصميم (Design System Foundations)

### 5.1 Spacing Scale
نستخدم نظام 4px base:
- `space-1`: 4px
- `space-2`: 8px
- `space-3`: 12px
- `space-4`: 16px
- `space-5`: 24px
- `space-6`: 32px
- `space-7`: 48px
- `space-8`: 64px
- `space-9`: 96px
- `space-10`: 128px

### 5.2 Border Radius
- `radius-sm`: 6px — inputs, badges.
- `radius-md`: 10px — buttons small.
- `radius-lg`: 14px — cards.
- `radius-xl`: 20px — modals, large cards.
- `radius-2xl`: 28px — hero cards, feature cards.
- `radius-full`: 999px — pills, avatars.

### 5.3 Shadows
- `shadow-sm`: `0 1px 2px rgba(0,0,0,0.3)`
- `shadow-md`: `0 4px 12px rgba(0,0,0,0.4)`
- `shadow-lg`: `0 12px 40px rgba(0,0,0,0.5)`
- `shadow-glow`: `0 0 40px rgba(245,158,11,0.15)`

### 5.4 Component Guidelines

#### Buttons
- **Primary:** خلفية amber، نص داكن، بدون border، shadow-glow خفيف.
- **Secondary:** خلفية شفافة، border أبيض خفيف، نص أبيض.
- **Ghost:** خلفية شفافة، نص ثانوي، hover يظهر خلفية خفيفة.
- جميع الأزرار بـ radius-md والـ transition 200ms.

#### Cards
- خلفية surface، border دقيق، radius-xl.
- Hover: border يصبح أكثر وضوحاً + translateY(-2px).
- لا نستخدم shadows كثيفة إلا للبطاقات المهمة.

#### Inputs
- خلفية داكنة، border دقيق، radius-md.
- Focus: border amber + glow خفيف.
- Labels واضحة فوق الـ input.

#### Badges
- Pill shape، radius-full.
- ألوان muted مع text واضح.

---

## 6. توصيات صفحة بصفحة

### 6.1 Landing Page
يجب أن تحتوي على الأقسام التالية:
1. **Hero:**
   - Headline قوي: "مصنع بصري ذكي لعلامتك التجارية".
   - Subheadline يشرح القيمة.
   - CTA Primary + Secondary.
   - Hero visual: grid من صور AI متحركة أو تفاعلية.
   - Trust badges: "مدعوم بـ Fal.ai"، "توليد آلاف الصور".

2. **Logo Cloud:**
   - شعارات شركات افتراضية أو حقيقية تستخدم المنصة.

3. **Features (Bento Grid):**
   - DNA Builder.
   - Spatial Canvas.
   - Batch Generation.
   - Error Jail & Regenerate.
   - Cost Calculator.
   - Admin Approval.

4. **How It Works:**
   - 3-4 خطوات بصرية.
   - Upload reference → Build DNA → Add products → Generate.

5. **Use Cases:**
   - E-commerce products.
   - Real estate staging.
   - Fashion catalogs.
   - Food photography.

6. **Gallery / Showcase:**
   - أمثلة صور حقيقية مولدة بالمنصة.

7. **Pricing:**
   - 3 plans: Free / Pro / Enterprise.
   - Credits-based pricing.

8. **Testimonials:**
   - آراء عملاء.

9. **FAQ:**
   - أسئلة شائعة.

10. **CTA Section:**
    - "ابدأ إنتاجك البصري اليوم".

11. **Footer:**
    - روابط المنتج، الشركة، القانونية، التواصل.

### 6.2 Auth Pages
- **Login / Signup:**
  - Split layout: صورة/illustration على اليسار، form على اليمين.
  - Dark theme.
  - Social login (Google) مستقبلاً.
  - Clear error messages.
- **Pending Review:**
  - Illustration أو animation لساعة رملية.
  - توضيح أن الفريق سيراجع الطلب.
- **Confirm / Error:**
  - Branding واضح.
  - زر واضح للخطوة التالية.

### 6.3 App Shell
- **Sidebar:**
  - Logo في الأعلى.
  - Navigation items: Dashboard, Workspace, DNA Profiles, Gallery, Wallet, Settings.
  - User profile في الأسفل.
- **Top Bar:**
  - Credits المتبقية.
  - Notifications.
  - Profile dropdown.
- **Breadcrumbs:**
  - للتنقل بين المستويات.

### 6.4 Dashboard
- **Stats Cards:**
  - Credits، Total Batches، Successful Images، Failed Images.
- **Recent Activity:**
  - آخر الدفعات مع status واضح.
- **Quick Actions:**
  - Create DNA, New Batch, Top Up.
- **Charts (مستقبلاً):**
  - Usage over time.
  - Success rate.

### 6.5 DNA Builder
- **List View:**
  - بطاقات لكل DNA مع preview thumbnail.
  - Edit / Duplicate / Delete.
- **Create/Edit View:**
  - Form منظم في خطوات (Stepper).
  - Preview مباشر.
  - Upload images بدلاً من روابط فقط.

### 6.6 Workspace
- **Create Batch:**
  - Stepper: Select DNA → Upload Products → Configure → Review → Submit.
  - Cost estimate واضح.
- **Batches List:**
  - Table مع sorting/filtering.
  - Progress bar.
- **Batch Detail:**
  - Gallery من الصور.
  - Download selected / all.
  - Regenerate failed.

### 6.7 Canvas
- **Spatial Canvas محسّن:**
  - Background grid ناعم.
  - Nodes بتصميم أفضل.
  - MiniMap و Controls أصغر.
  - Sidebar للتفاصيل.

### 6.8 Admin Panel
- **Overview:**
  - إحصائيات: Users, Batches, Images, Revenue.
- **Users Table:**
  - Filter, Search, Approve/Reject, Change Role.
- **Configs:**
  - Editor محسّن مع validation.
- **Audit Logs:**
  - Table مع pagination.

---

## 7. الحركة والتفاعل (Motion & Interaction)

### 7.1 Principles
- **Purposeful:** كل animation له سبب (توضيح، feedback، delight).
- **Fast:** لا تبطئ المستخدم.
- **Consistent:** نفس الأنماط في كل الصفحات.

### 7.2 Patterns
- **Page transitions:** fade + slight slide.
- **Card hover:** lift + border glow.
- **Button hover:** scale(1.02) + glow.
- **Loading:** skeleton screens بدلاً من spinners.
- **Toast notifications:** slide-in من الأعلى.
- **Stagger animations:** للـ lists والـ grids.

### 7.3 Libraries
- **Framer Motion:** للـ React animations.
- **GSAP:** للـ complex sequences في الـ Hero.
- **@number-flow/react:** للأرقام المتحركة.

---

## 8. خطة التنفيذ المقترحة

### المرحلة 1: الأساس (3-4 أيام)
- [x] تحليل المنافسين.
- [x] توثيق التوجه التصميمي.
- [ ] تثبيت dependencies (Framer Motion, fonts).
- [ ] إعداد Design Tokens في Tailwind.
- [ ] إنشاء App Shell (Sidebar + Top Bar + Layout).

### المرحلة 2: التصميم الخارجي (4-5 أيام)
- [ ] Landing page كاملة مع جميع الأقسام.
- [ ] صفحات About / Pricing / Contact.
- [ ] Footer و Navigation.

### المرحلة 3: المصادقة (2-3 أيام)
- [ ] Redesign Login / Signup / Pending Review / Confirm / Error.

### المرحلة 4: التطبيق الداخلي (5-7 أيام)
- [ ] Dashboard جديد.
- [ ] DNA Builder و DNA List.
- [ ] Workspace و Batch Detail.
- [ ] Canvas محسّن.

### المرحلة 5: التلميع (3-4 أيام)
- [ ] Animations و Micro-interactions.
- [ ] Empty states, Loading states, Error states.
- [ ] Mobile responsive.
- [ ] SEO + Meta tags.

### المرحلة 6: الإدارة والمدفوعات (5-7 أيام)
- [ ] Admin panel محسّن.
- [ ] Audit logs viewer.
- [ ] Payment integration.

---

## 9. الخطوة التالية

بعد موافقة المستخدم على هذا التوجه:
1. البدء بإعداد Design Tokens والـ App Shell.
2. تثبيت الخطوط والـ animation libraries.
3. بناء Landing Page الجديدة.

---

*تم إعداد هذه الوثيقة في 16 يونيو 2026.*
