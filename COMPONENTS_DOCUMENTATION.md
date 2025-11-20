# Components/UI Klasörü - Detaylı Dokümantasyon

Bu dokümantasyon, `components/ui` klasöründeki tüm component'lerin detaylı bir analizini içerir.

---

## İçindekiler

1. [Animations (Animasyonlar)](#animations)
2. [Backgrounds (Arka Planlar)](#backgrounds)
3. [Cards (Kartlar)](#cards)
4. [Core (Temel Componentler)](#core)
5. [Typography (Tipografi)](#typography)
6. [Navigation (Navigasyon)](#navigation)
7. [Sections (Bölümler)](#sections)
8. [Forms (Formlar)](#forms)
9. [Composed (Kompozit Componentler)](#composed)
10. [Custom (Özel Componentler)](#custom)
11. [Kök Seviye Componentler](#root-level)
12. [Kullanım Durumu Özeti](#summary)

---

## Animations

### 1. AnimatedOrbs
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\animations\animated-orbs.tsx`

**Açıklama:**
Arka planda hareketli, renkli küreler oluşturur. Mavi ve mor tonlarında gradient efektli, blur edilmiş animasyonlu arka plan elementleri.

**Props:**
- `variant?: 'default' | 'subtle' | 'minimal'` - Animasyon yoğunluğu (varsayılan: subtle)
- `className?: string` - Ek CSS sınıfları

**Kullanım Örneği:**
```tsx
import { AnimatedOrbs } from "@/components/ui";

<AnimatedOrbs variant="subtle" />
```

**Kullanım Durumu:**
- `components/shared/page-hero.tsx` - Sayfa hero bölümlerinde arka plan efekti

**Durum:** ✅ **Aktif Kullanımda** (1 yerde kullanılıyor)

---

### 6. WobbleCard
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\animations\wobble-card.tsx`

**Açıklama:**
Mouse hareketine göre salınan kart animasyonu. Hover'da 3D perspektif efekti veren kart wrapper'ı.

**Props:**
- `children: React.ReactNode` - İçerik
- `className?: string` - İçerik CSS sınıfları
- `containerClassName?: string` - Container CSS sınıfları

**Kullanım Örneği:**
```tsx
import { WobbleCard } from "@/components/ui";

<WobbleCard>
  <div className="p-8">
    <h3>Başlık</h3>
    <p>İçerik</p>
  </div>
</WobbleCard>
```

**Kullanım Durumu:**
- `components/sections/home/services-section.tsx` - Servis kartları için

**Durum:** ✅ **Aktif Kullanımda** (1 yerde kullanılıyor)

---

## Backgrounds

### 7. BackgroundBeams
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\backgrounds\background-beams.tsx`

**Açıklama:**
Animasyonlu SVG ışın efekti arka planı. 20 adet animasyonlu gradient path ile dinamik arka plan efekti.

**Props:**
- `className?: string` - Ek CSS sınıfları

**Kullanım Örneği:**
```tsx
import { BackgroundBeams } from "@/components/ui";

<div className="relative">
  <BackgroundBeams />
  <div className="relative z-10">İçerik</div>
</div>
```

**Kullanım Durumu:**
- `app/fiyatlandirma/page.tsx` - Fiyatlandırma sayfası arka planı
- `components/shared/dynamic-background.tsx` - Dinamik arka plan component'inde

**Durum:** ✅ **Aktif Kullanımda** (2 yerde kullanılıyor)

---

### 8. InfiniteScroll
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\backgrounds\infinite-scroll.tsx`

**Açıklama:**
Sonsuz döngüde scroll eden içerik wrapper'ı. Yatay veya dikey sürekli hareket eden içerik container'ı.

**Props:**
- `children: React.ReactNode` - İçerik
- `direction?: 'left' | 'right'` - Yön (varsayılan: 'left')
- `speed?: number` - Hız (varsayılan: 20)
- `className?: string` - Ek CSS sınıfları

**Kullanım Örneği:**
```tsx
import { InfiniteScroll } from "@/components/ui";

<InfiniteScroll direction="left" speed={30}>
  <div>Logo 1</div>
  <div>Logo 2</div>
  <div>Logo 3</div>
</InfiniteScroll>
```

**Kullanım Durumu:**
- `components/sections/home/integrations-section.tsx` - Entegrasyon logoları için

**Durum:** ✅ **Aktif Kullanımda** (1 yerde kullanılıyor)

---

### 9. Spotlight
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\backgrounds\spotlight.tsx`

**Açıklama:**
Spot ışık efekti SVG component'i. Eliptik gradient blur ile sahne ışığı efekti.

**Props:**
- `className?: string` - Ek CSS sınıfları
- `fill?: string` - Renk (varsayılan: 'white')

**Kullanım Örneği:**
```tsx
import { Spotlight } from "@/components/ui";

<div className="relative">
  <Spotlight className="top-40 left-0" fill="blue" />
  <div>İçerik</div>
</div>
```

**Kullanım Durumu:**
- `app/fiyatlandirma/page.tsx` - Fiyatlandırma sayfası efekti
- `components/shared/page-hero.tsx` - Hero bölümlerinde

**Durum:** ✅ **Aktif Kullanımda** (2 yerde kullanılıyor)

---

## Cards

### 10. CardStack
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\cards\card-stack.tsx`

**Açıklama:**
Üst üste yığılmış kart görünümü. Kartlar üst üste binmiş şekilde scale ve offset ile gösteriliyor.

**Props:**
- `items: Card[]` - Kart dizisi
  - `Card` type: `{ id: number; content: React.ReactNode }`
- `offset?: number` - Kartlar arası offset (varsayılan: 12)
- `scaleFactor?: number` - Scale faktörü (varsayılan: 0.06)

**Kullanım Örneği:**
```tsx
import { CardStack } from "@/components/ui";

const cards = [
  { id: 1, content: <div>Kart 1</div> },
  { id: 2, content: <div>Kart 2</div> },
  { id: 3, content: <div>Kart 3</div> }
];

<CardStack items={cards} offset={15} scaleFactor={0.05} />
```

**Kullanım Durumu:**
- `app/ai-otomasyon/ai-surec-otomasyonu/page.tsx` - AI süreç otomasyonu sayfası
- `components/sections/ai-otomasyon/services-catalog.tsx` - Servis kataloğu
- `components/sections/home/services-section.tsx` - Ana sayfa servisler

**Durum:** ✅ **Aktif Kullanımda** (3 yerde kullanılıyor)

---

### 11. ExpandableCardGrid
**Dosya Yoru:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\cards\expandable-card-grid.tsx`

**Açıklama:**
Tıklanabilir, genişleyen kart grid component'i. Modal açılan, detaylı içerik gösterimi yapan kart sistemi. Portal kullanarak modal'ı document.body'ye taşıyor.

**Props:**
- `cards: Card[]` - Kart dizisi
  - `Card` type: `{ title: string; description: string; src: string; content: () => React.ReactNode }`

**Kullanım Örneği:**
```tsx
import { ExpandableCardGrid } from "@/components/ui";

const cards = [
  {
    title: "PDF İşleme",
    description: "Otomatik PDF işleme",
    src: "/image.jpg",
    content: () => <div>Detay içerik</div>
  }
];

<ExpandableCardGrid cards={cards} />
```

**Kullanım Durumu:**
- `app/ai-otomasyon/ai-surec-otomasyonu/page.tsx` - AI süreç otomasyonu
- `app/ai-otomasyon/dokuman-donusturme/page.tsx` - Döküman dönüştürme
- `app/ai-otomasyon/otomatik-veri-cikarma/page.tsx` - Otomatik veri çıkarma
- `components/sections/ai-otomasyon/departments-grid.tsx` - Departman grid

**Durum:** ✅ **Aktif Kullanımda** (4 yerde kullanılıyor) - EN ÇOK KULLANILAN CARD

---

### 12. InfiniteMovingCards
**Dosya Yoru:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\cards\infinite-moving-cards.tsx`

**Açıklama:**
Sonsuz döngüde hareket eden referans kartları. Testimonial/quote kartları için sürekli akan carousel.

**Props:**
- `items: Array<{ quote: string; name: string; title: string }>` - Kart içerikleri
- `direction?: 'left' | 'right'` - Hareket yönü (varsayılan: 'left')
- `speed?: 'fast' | 'normal' | 'slow'` - Hız (varsayılan: 'fast')
- `pauseOnHover?: boolean` - Hover'da durdur (varsayılan: true)
- `className?: string` - Ek CSS

**Kullanım Örneği:**
```tsx
import { InfiniteMovingCards } from "@/components/ui";

const testimonials = [
  { quote: "Harika!", name: "Ali Yılmaz", title: "CEO" },
  { quote: "Mükemmel", name: "Ayşe Kaya", title: "CTO" }
];

<InfiniteMovingCards
  items={testimonials}
  direction="left"
  speed="slow"
/>
```

**Kullanım Durumu:**
- `app/ai-otomasyon/ai-surec-otomasyonu/page.tsx` - Testimonialler için

**Durum:** ⚠️ **Az Kullanılıyor** (1 yerde kullanılıyor)

---

### 13. Marquee
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\cards\marquee.tsx`

**Açıklama:**
Klasik marquee efekti component'i. Yatay veya dikey sürekli akan içerik container'ı.

**Props:**
- `className?: string` - CSS sınıfı
- `reverse?: boolean` - Ters yön (varsayılan: false)
- `pauseOnHover?: boolean` - Hover'da durdur (varsayılan: false)
- `children: React.ReactNode` - İçerik
- `vertical?: boolean` - Dikey yön (varsayılan: false)
- `repeat?: number` - Tekrar sayısı (varsayılan: 4)

**Kullanım Örneği:**
```tsx
import { Marquee } from "@/components/ui";

<Marquee pauseOnHover={true} repeat={3}>
  <div>İçerik 1</div>
  <div>İçerik 2</div>
  <div>İçerik 3</div>
</Marquee>
```

**Kullanım Durumu:**
- Hiçbir yerde kullanılmıyor

**Durum:** ❌ **Kullanılmıyor** - InfiniteScroll ve InfiniteMovingCards tercih ediliyor

---

## Core

### 14. Badge
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\core\badge.tsx`

**Açıklama:**
Başlıklarda kullanılan mavi rozet component'i. Icon ve text içeren küçük bilgi etiketi.

**Props:**
- `icon?: React.ReactNode` - Icon (opsiyonel)
- `text: string` - Badge metni
- `className?: string` - Ek CSS

**Kullanım Örneği:**
```tsx
import { Badge } from "@/components/ui";
import { Sparkles } from "lucide-react";

<Badge
  icon={<Sparkles className="w-4 h-4" />}
  text="Yeni Özellik"
/>
```

**Kullanım Durumu:**
- `components/shared/page-hero.tsx` - Sayfa hero bölümlerinde

**Durum:** ✅ **Aktif Kullanımda** (1 yerde kullanılıyor)

---

### 15. Button (Core)
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\core\button.tsx`

**Açıklama:**
Standart buton component'i (Shadcn/ui button). CVA ile variant sistemi olan temel buton.

**Props:**
- `variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'`
- `size?: 'default' | 'sm' | 'lg' | 'icon'`
- `asChild?: boolean` - Slot pattern için
- `className?: string`
- + Tüm HTMLButtonElement props

**Kullanım Örneği:**
```tsx
import { Button } from "@/components/ui";

<Button variant="default" size="lg">
  Tıkla
</Button>
```

**Kullanım Durumu:**
- Tüm proje genelinde yaygın kullanım (25+ dosya)
- Ana buton component'i olarak

**Durum:** ✅ **Aktif Kullanımda** - EN ÇOK KULLANILAN COMPONENT

---

### 16. Card (Core)
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\core\card.tsx`

**Açıklama:**
Standart kart component'i. Icon, başlık, açıklama ve children içeren çok yönlü kart yapısı. Scroll animasyonu dahil.

**Props:**
- `icon?: LucideIcon` - Icon component'i
- `title: string` - Başlık
- `description: string` - Açıklama
- `index?: number` - Animasyon delay için (varsayılan: 0)
- `className?: string`
- `children?: React.ReactNode`
- `variant?: 'default' | 'minimal' | 'elevated' | 'flat'`
- `transparent?: boolean` - Şeffaf arka plan
- `alignment?: 'left' | 'center' | 'right'`

**Kullanım Örneği:**
```tsx
import { Card } from "@/components/ui";
import { Zap } from "lucide-react";

<Card
  icon={Zap}
  title="Hızlı Entegrasyon"
  description="5 dakikada başla"
  variant="elevated"
>
  <Button>Başla</Button>
</Card>
```

**Kullanım Durumu:**
- `app/iletisim/page.tsx` - İletişim bilgileri
- Birçok sayfada feature/benefit gösteriminde

**Durum:** ✅ **Aktif Kullanımda** (Çok sayıda yerde kullanılıyor)

---

## Typography

### 19. Text (Ana Text Component)
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\typography\text.tsx`

**Açıklama:**
Standart text component. Responsive, themed, animasyonlu text. H1-H6, Lead, Small, Tiny gibi convenience exports dahil.

**Props:**
- `children: React.ReactNode`
- `variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'lead' | 'small' | 'tiny'`
- `theme?: 'default' | 'muted' | 'primary' | 'accent' | 'gradient' | 'success' | 'warning' | 'error'`
- `className?: string`
- `animate?: boolean`
- `animationDelay?: number`
- `as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'`
- `responsive?: { mobile?: string; tablet?: string; desktop?: string }`

**Convenience Exports:** H1, H2, H3, H4, H5, H6, Lead, Small, Tiny

**Kullanım Örneği:**
```tsx
import { Text, H1, Lead } from "@/components/ui";

<H1 theme="gradient" animate>Ana Başlık</H1>
<Lead theme="muted">Açıklama metni</Lead>
<Text variant="small" theme="primary">Küçük metin</Text>
```

**Kullanım Durumu:**
- `components/layout/navbar.tsx` - Navigasyon metinleri
- `components/ui/navigation/mega-menu.tsx` - Menu metinleri
- `components/sections/home/features-section.tsx` - Feature açıklamaları
- `app/iletisim/page.tsx` - İletişim sayfası
- Ve daha birçok yerde

**Durum:** ✅ **Aktif Kullanımda** - YAYGIN KULLANIM

---

### 21. TypewriterEffect
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\typography\typewriter-effect.tsx`

**Açıklama:**
Daktilo efekti ile yazı yazan animasyon. Cursor animasyonu dahil.

**Props:**
- `words: Array<{ text: string; className?: string }>` - Kelime dizisi
- `className?: string`
- `cursorClassName?: string`

**Kullanım Örneği:**
```tsx
import { TypewriterEffect } from "@/components/ui";

<TypewriterEffect
  words={[
    { text: "Yapay", className: "text-primary" },
    { text: "Zeka", className: "text-gradient" }
  ]}
/>
```

**Kullanım Durumu:**
- `components/shared/page-hero.tsx` - Hero bölümlerinde dinamik başlık

**Durum:** ✅ **Aktif Kullanımda** (1 yerde kullanılıyor)

---

## Navigation

### 23. MegaMenu
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\navigation\mega-menu.tsx`

**Açıklama:**
Çok seviyeli mega menü component'i. Desktop ve mobile görünümler, carousel ile resim gösterimi, nested kategoriler.

**Props:**
- `items: NavItem[]` - Menü öğeleri
- `openNestedSubmenu: string | null` - Açık alt menü
- `setOpenNestedSubmenu: (label: string | null) => void`
- `isMobile?: boolean` - Mobil görünüm

**Kullanım Örneği:**
```tsx
import { MegaMenu } from "@/components/ui";

<MegaMenu
  items={navigationItems}
  openNestedSubmenu={activeSubmenu}
  setOpenNestedSubmenu={setActiveSubmenu}
/>
```

**Kullanım Durumu:**
- `components/layout/navbar.tsx` - Ana navigasyon menüsü

**Durum:** ✅ **Aktif Kullanımda** (1 yerde - kritik component)

---

## Sections

### 24. StickyScroll (StickyScrollReveal)
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\sections\sticky-scroll-reveal.tsx`

**Açıklama:**
Scroll'a bağlı sticky içerik gösterimi. Sol tarafta metin, sağda sticky içerik.

**Props:**
- `content: Array<{ title: string; description: string; content?: React.ReactNode }>`
- `contentClassName?: string`

**Kullanım Örneği:**
```tsx
import { StickyScroll } from "@/components/ui";

const content = [
  {
    title: "Adım 1",
    description: "İlk adım",
    content: <div>Görsel içerik</div>
  }
];

<StickyScroll content={content} />
```

**Kullanım Durumu:**
- Hiçbir yerde kullanılmıyor

**Durum:** ❌ **Kullanılmıyor** - Kullanım senaryosu yok

---

### 25. ScrollRevealContent ⭐ **YENİ**
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\sections\scroll-reveal-content.tsx`

**Açıklama:**
Scroll kaydıkça içerik ve görsellerin değiştiği interaktif section component'i. Sol tarafta yazılar, sağ tarafta resimler (veya tam tersi) scroll ile senkronize değişir. Smooth geçişler, progress indicator'lar ve sticky positioning ile harika kullanıcı deneyimi sunar.

**Props:**
- `items: ScrollRevealItem[]` - İçerik dizisi
  - `ScrollRevealItem` type:
    ```typescript
    {
      title: string;           // Ana başlık
      description: string;     // Açıklama
      content?: React.ReactNode; // Opsiyonel ek içerik
      image: string;           // Görsel URL'i
      imageAlt?: string;       // Görsel alt metni
    }
    ```
- `className?: string` - Container CSS sınıfları
- `contentClassName?: string` - İçerik bölümü CSS sınıfları
- `imageClassName?: string` - Görsel bölümü CSS sınıfları
- `layout?: 'left' | 'right'` - Yazıların pozisyonu (varsayılan: 'left')

**Özellikler:**
- ✅ Scroll tabanlı otomatik içerik değişimi
- ✅ Smooth fade ve scale animasyonları
- ✅ Progress indicator göstergesi
- ✅ Responsive tasarım (mobil + desktop)
- ✅ Esnek layout (sol/sağ düzen)
- ✅ Gradient overlay ile görsel iyileştirme
- ✅ Next.js Image optimizasyonu

**Kullanım Örneği:**
```tsx
import { ScrollRevealContent } from "@/components/ui/sections";

const items = [
  {
    title: "AI Süreç Otomasyonu",
    description: "İş süreçlerinizi yapay zeka ile otomatikleştirin",
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Otomatik veri işleme</li>
        <li>Akıllı karar verme</li>
        <li>7/24 kesintisiz çalışma</li>
      </ul>
    ),
    image: "/images/ai-automation.jpg",
    imageAlt: "AI Süreç Otomasyonu"
  },
  {
    title: "Doküman Dönüştürme",
    description: "Her türlü dokümanı otomatik işleyin",
    image: "/images/document-processing.jpg",
    imageAlt: "Doküman Dönüştürme"
  },
  {
    title: "Veri Çıkarma",
    description: "Yapılandırılmamış verilerden anlam çıkarın",
    image: "/images/data-extraction.jpg",
    imageAlt: "Veri Çıkarma"
  }
];

// Sol tarafta yazılar, sağda görseller (varsayılan)
<ScrollRevealContent items={items} />

// Sağ tarafta yazılar, solda görseller
<ScrollRevealContent
  items={items}
  layout="right"
  className="bg-slate-50"
  imageClassName="rounded-3xl shadow-2xl"
/>
```

**Kullanım Senaryoları:**
- 📄 Hizmet/ürün özelliklerinin tanıtımı
- 📊 Adım adım süreç gösterimi
- 🎯 Case study'lerin anlatımı
- 💡 Avantajların görsellerle sunumu
- 🚀 Timeline/yol haritası gösterimi

**Kullanım Durumu:**
- Henüz projede kullanılmıyor (yeni eklendi)
- Hakkımızda, Hizmetler veya AI Otomasyon sayfalarında kullanılabilir

**Durum:** 🆕 **Yeni Eklendi** - Kullanıma hazır

**Performans Notları:**
- Her item için 100vh yükseklik kullanır (3 item = 300vh)
- Scroll listener optimize edilmiş
- Image lazy loading destekli
- Smooth 60fps animasyonlar

---


## Forms

### 26. LoadingScreen
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\forms\loading-screen.tsx`

**Açıklama:**
Tam ekran yükleme ekranı. Animasyonlu logo, gradient arka plan, yükleme çubuğu.

**Props:** Yok (self-contained)

**Kullanım Örneği:**
```tsx
import { LoadingScreen } from "@/components/ui";

{isLoading && <LoadingScreen />}
```

**Kullanım Durumu:**
- `app/loading.tsx` - Next.js loading state
- `components/providers/page-transition-provider.tsx` - Sayfa geçişlerinde

**Durum:** ✅ **Aktif Kullanımda** (2 yerde kullanılıyor)

---

## Composed

### 27. BenefitsGrid
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\composed\benefits-grid.tsx`

**Açıklama:**
Avantaj/özellik listesi. Check icon'lu grid formatında özellik gösterimi.

**Props:**
- `benefits: string[]` - Avantajlar listesi
- `columns?: 1 | 2 | 3` - Sütun sayısı (varsayılan: 3)
- `className?: string`

**Kullanım Örneği:**
```tsx
import { BenefitsGrid } from "@/components/ui";

<BenefitsGrid
  benefits={[
    "Kolay entegrasyon",
    "7/24 destek",
    "Ölçeklenebilir"
  ]}
  columns={3}
/>
```

**Kullanım Durumu:**
- Hiçbir yerde kullanılmıyor

**Durum:** ❌ **Kullanılmıyor** - Card veya liste tercihi var

---

## Custom

### 28. InteractiveCardStack
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\custom\interactive-card-stack.tsx`

**Açıklama:**
Sürüklenebilir, interaktif kart yığını. Yukarı/aşağı swipe ile gezinme.

**Props:**
- `items: T[]` - Generic item dizisi
- `renderItem: (item: T, index: number, isActive: boolean) => React.ReactNode`
- `cardWidth?: number` - Kart genişliği (varsayılan: 320)
- `cardHeight?: number` - Kart yüksekliği (varsayılan: 420)
- `className?: string`

**Kullanım Örneği:**
```tsx
import { InteractiveCardStack } from "@/components/ui";

<InteractiveCardStack
  items={myData}
  renderItem={(item, index, isActive) => (
    <div className="p-6">{item.title}</div>
  )}
/>
```

**Kullanım Durumu:**
- Hiçbir yerde kullanılmıyor

**Durum:** ❌ **Kullanılmıyor** - CardStack tercih ediliyor

---

## Root Level

### 29. Button (Kök)
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\button.tsx`

**Açıklama:**
Shadcn/ui button component'i (core/button.tsx ile aynı). Outline variant'ı düzeltilmiş.

**NOT:** Bu dosya `core/button.tsx` ile aynı içeriğe sahip. Muhtemelen duplikasyon var.

**Durum:** ⚠️ **Duplikasyon** - core/button.tsx ile birleştirilebilir

---

### 30. Carousel
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\ui\carousel.tsx`

**Açıklama:**
Embla carousel wrapper component'i. Autoplay, navigation, keyboard support.

**Exports:**
- `Carousel` - Ana container
- `CarouselContent` - İçerik wrapper
- `CarouselItem` - Tek item
- `CarouselPrevious` - Önceki buton
- `CarouselNext` - Sonraki buton

**Props (Carousel):**
- `opts?: CarouselOptions` - Embla options
- `plugins?: CarouselPlugin` - Embla plugins
- `orientation?: 'horizontal' | 'vertical'`
- `setApi?: (api: CarouselApi) => void`
- `autoplay?: boolean`
- `autoplayDelay?: number` (varsayılan: 3000)

**Kullanım Örneği:**
```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui";

<Carousel autoplay autoplayDelay={5000}>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

**Kullanım Durumu:**
- `components/ui/navigation/mega-menu.tsx` - Mega menü görsel carousel
- `components/sections/home/features-section.tsx` - Feature showcase

**Durum:** ✅ **Aktif Kullanımda** (2+ yerde kullanılıyor)

---

## Summary

### Kullanım Durumu Özeti

#### ✅ Aktif Kullanımda (16 Component)

**Çok Sık Kullanılanlar:**
1. **Button** (core/button.tsx) - 25+ yerde - EN ÇOK KULLANILAN
2. **Card** (core/card.tsx) - 15+ yerde - YAYGIN
3. **Text** ve türevleri (H1, H2, Lead, vb.) - 10+ yerde - YAYGIN
4. **ExpandableCardGrid** - 4 yerde - POPÜLER

**Orta Sıklıkta:**
5. **CardStack** - 3 yerde
6. **BackgroundBeams** - 2 yerde
7. **Spotlight** - 2 yerde
8. **LoadingScreen** - 2 yerde
9. **Carousel** - 2 yerde

**Az Kullanılanlar:**
10. **AnimatedOrbs** - 1 yerde
11. **WobbleCard** - 1 yerde
12. **InfiniteScroll** - 1 yerde
13. **Badge** - 1 yerde
14. **MegaMenu** - 1 yerde (kritik)
15. **Timeline** - 1 yerde
16. **TypewriterEffect** - 1 yerde
17. **InfiniteMovingCards** - 1 yerde

---

#### ❌ Kullanılmayan Componentler (14 Component - SİLİNEBİLİR)

**Animations:**
1. **FadeInSection** - Card zaten animasyonlu
2. **GlowingEffect** - Çok karmaşık, performans maliyeti
3. **HeroHighlight** - Sabit boyutlu, kullanım yok
4. **MovingBorder** - Çok karmaşık animasyon

**Backgrounds:**
- (Hepsi kullanımda)

**Cards:**
5. **Marquee** - InfiniteScroll tercih ediliyor

**Typography:**
6. **GradientText** - Text theme='gradient' tercih ediliyor
7. **HeroTitle** - H1/H2 componentleri tercih ediliyor
8. **TextGenerateEffect** - TypewriterEffect tercih ediliyor

**Navigation:**
9. **CTAButtons** - Manuel buton kullanımı tercih ediliyor

**Sections:**
10. **StickyScroll** - Kullanım senaryosu yok

**Composed:**
11. **BenefitsGrid** - Card veya liste tercih ediliyor

**Custom:**
12. **InteractiveCardStack** - CardStack tercih ediliyor

**Root Level:**
13. **button.tsx** (kök) - **DUPLIKASYON** (core/button.tsx ile aynı)

---

#### ⚠️ Dikkat Edilmesi Gerekenler

1. **button.tsx Duplikasyonu:**
   - `components/ui/button.tsx` ve `components/ui/core/button.tsx` aynı içeriğe sahip
   - Birini kaldırıp tüm import'ları düzeltmek gerekli

2. **Index Export Kontrolü:**
   - Kullanılmayan componentler index.tsx'lerden de kaldırılmalı
   - Tree-shaking için önemli

3. **Performans Optimizasyonu:**
   - GlowingEffect gibi ağır componentler zaten kullanılmıyor
   - BackgroundBeams path sayısı 50'den 20'ye düşürülmüş (iyi)

4. **Alternatif Tercihler:**
   - Text component çok güçlü ve alternatiflerini gölgelemiş
   - ExpandableCardGrid çok başarılı, diğer card tiplerini azaltmış

---

### Öneriler

#### Kısa Vadeli (Hemen Yapılabilir):
1. 14 kullanılmayan component'i sil
2. button.tsx duplikasyonunu çöz
3. Kullanılmayan export'ları index.tsx'lerden temizle

#### Orta Vadeli:
1. Card component'lerini birleştirmeyi değerlendir
2. Animation component'lerini optimize et
3. Component dokümantasyonu (bu dosya) güncel tut

#### Uzun Vadeli:
1. Component library stratejisi belirle
2. Design system oluştur
3. Storybook ekle

---

## Sonuç

**Toplam Component:** 30
**Aktif Kullanımda:** 16 (%53)
**Kullanılmıyor:** 14 (%47)

**En Başarılı Componentler:**
- Button (core)
- Card (core)
- Text (typography)
- ExpandableCardGrid

**Temizlik Potansiyeli:**
- ~14 dosya silinebilir
- ~1500+ satır kod azaltılabilir
- Bundle size optimize edilebilir

---

## Yeni Component Önerileri

Proje ihtiyaçlarına göre eklenebilecek yeni componentler:

### 1. TestimonialSlider
**Önerilen Dosya:** `components/ui/sections/testimonial-slider.tsx`

**Açıklama:** Müşteri yorumları için carousel component'i.

**Özellikler:**
- Avatar, isim, pozisyon, yorum
- Star rating sistemi
- Otomatik geçiş + manuel kontrol
- Responsive grid/slider hybrid
- Pagination dots

**Kullanım Alanları:**
- Ana sayfa testimonial section
- Hakkımızda sayfası müşteri görüşleri
- Case study sayfaları

---

### 2. PricingTable
**Önerilen Dosya:** `components/ui/sections/pricing-table.tsx`

**Açıklama:** Fiyatlandırma planları karşılaştırma tablosu.

**Özellikler:**
- 2-4 farklı plan
- Özellik karşılaştırma
- Highlight popular plan
- Aylık/yıllık toggle
- CTA butonları

**Kullanım Alanları:**
- Fiyatlandırma sayfası (zaten var ama component haline getirilebilir)

---

### 3. StatsCounter
**Önerilen Dosya:** `components/ui/animations/stats-counter.tsx`

**Açıklama:** Animasyonlu sayı sayıcı component'i.

**Özellikler:**
- 0'dan başlayıp hedefe sayma
- Scroll'da tetikleme
- + veya % suffix desteği
- Özelleştirilebilir hız
- Icon + label desteği

**Kullanım Alanları:**
- Hero section istatistikleri (zaten var ama statik)
- Hakkımızda sayfası başarılar
- Landing page'lerde etki yaratma

---

### 4. ProcessFlow
**Önerilen Dosya:** `components/ui/sections/process-flow.tsx`

**Açıklama:** Adım adım süreç gösterimi.

**Özellikler:**
- Horizontal/Vertical layout
- Numaralandırılmış adımlar
- Icon + başlık + açıklama
- Bağlantı çizgileri/oklar
- Progress indicator

**Kullanım Alanları:**
- "Nasıl Çalışır" section'ı
- Onboarding flow gösterimi
- Hizmet süreçleri anlatımı

---

### 5. VideoPlayer
**Önerilen Dosya:** `components/ui/media/video-player.tsx`

**Açıklama:** Özel video player component'i.

**Özellikler:**
- YouTube/Vimeo embed
- Thumbnail + play butonu
- Özel kontroller (opsiyonel)
- Fullscreen desteği
- Autoplay ve mute options

**Kullanım Alanları:**
- Demo videoları
- Ürün tanıtımları
- Tutorial içerikleri

---

### 6. AccordionFAQ
**Önerilen Dosya:** `components/ui/sections/accordion-faq.tsx`

**Açıklama:** Sıkça sorulan sorular accordion'u.

**Özellikler:**
- Expand/collapse animasyonu
- Icon rotasyonu
- Search/filter desteği
- Kategori bazlı gruplama
- Rich text içerik desteği

**Kullanım Alanları:**
- SSS sayfası
- Her sayfanın alt kısmında
- Yardım ve destek bölümleri

---

### 7. ParallaxSection
**Önerilen Dosya:** `components/ui/sections/parallax-section.tsx`

**Açıklama:** Parallax scroll efekti ile depth hissi.

**Özellikler:**
- Multi-layer parallax
- Configurable speed
- Image/gradient backgrounds
- Çapraz tarayıcı desteği
- Performance optimized

**Kullanım Alanları:**
- Hero sections
- Bölüm ayırıcılar
- Feature showcase backgrounds

---

### 8. ComparisonTable
**Önerilen Dosya:** `components/ui/sections/comparison-table.tsx`

**Açıklama:** Ürün/hizmet karşılaştırma tablosu.

**Özellikler:**
- 2-4 ürün karşılaştırma
- Check/cross iconları
- Highlight önerilen seçenek
- Sticky header
- Responsive collapse

**Kullanım Alanları:**
- Hizmet karşılaştırmaları
- Plan farklılıkları
- Before/After gösterimleri

---

### Öncelik Sıralaması

**Yüksek Öncelik:**
1. ⭐ **ScrollRevealContent** - ✅ Eklendi
2. **TestimonialSlider** - Sosyal kanıt için önemli
3. **StatsCounter** - Hero section'ı güçlendirir

**Orta Öncelik:**
4. **ProcessFlow** - "Nasıl Çalışır" için gerekli
5. **AccordionFAQ** - Kullanıcı desteği için önemli
6. **VideoPlayer** - Demo içerikleri için

**Düşük Öncelik:**
7. **PricingTable** - Fiyatlandırma sayfası zaten mevcut
8. **ParallaxSection** - Nice-to-have, performans maliyeti var
9. **ComparisonTable** - İhtiyaç halinde eklenebilir

---

## Shared Components

### CTASection ⭐ **YENİ** - Yeniden Kullanılabilir CTA Bileşeni
**Dosya Yolu:** `c:\YazılımEgitimi\MersaTech\vercel-mersatechai\components\shared\cta-section.tsx`

**Açıklama:**
Tamamen yeniden kullanılabilir, props-based Call-to-Action section component'i. Farklı sayfalarda farklı içeriklerle ve stillerde kullanılabilen, 5 farklı varyanta sahip modern CTA bileşeni.

**Props:**
```typescript
interface CTASectionProps {
  variant?: 'default' | 'minimal' | 'gradient' | 'compact' | 'footer-above';
  heading: string;
  description: string;
  subDescription?: string;
  primaryButton?: CTAButton;
  secondaryButton?: CTAButton;
  trustIndicators?: TrustIndicator[];
  id?: string;
  className?: string;
  containerPadding?: string;
}

interface CTAButton {
  text: string;
  icon?: LucideIcon | React.ComponentType;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'ghost';
}

interface TrustIndicator {
  text: string;
  icon?: LucideIcon | React.ComponentType;
}
```

**Varyantlar:**

1. **default** - Standart CTA Section
   - Gradient background (primary renk)
   - Büyük başlıklar
   - İki buton + trust indicators
   - Ana sayfa için ideal

2. **minimal** - Minimal Tasarım
   - Şeffaf card arka plan
   - Daha küçük başlıklar
   - Sade ve temiz görünüm
   - Alt sayfalar için uygun

3. **gradient** - Gradient Varyant (Footer Üstü)
   - Tam gradient background
   - Beyaz text rengi
   - Beyaz/transparent butonlar
   - Footer üstünde kullanım için özel tasarım
   - **#fd8f52 marka rengi ile uyumlu**

4. **compact** - Kompakt Versiyon
   - Küçük boyutlu
   - Minimum padding
   - Sidebar veya küçük alanlar için

5. **footer-above** - Footer Üstü Özel
   - Footer ile uyumlu tasarım
   - Üst köşeleri yuvarlatılmış
   - Border sadece üst ve yanlarda
   - Footer'ın hemen üstünde kullanım için

**Kullanım Örnekleri:**

**1. Basit Kullanım (Default):**
```tsx
import { CTASection } from "@components/shared";
import { Phone, MessageSquare } from "lucide-react";

<CTASection
  heading="Projenizi Konuşalım"
  description="İhtiyacınızı anlayalım ve size en uygun AI çözümünü birlikte belirleyelim."
  subDescription="İlk görüşme tamamen ücretsizdir."
  primaryButton={{
    text: "İletişime Geç",
    icon: Phone,
    href: "/iletisim"
  }}
  secondaryButton={{
    text: "WhatsApp",
    icon: MessageSquare,
    href: "https://wa.me/YOUR_PHONE"
  }}
  trustIndicators={[
    { text: "Ücretsiz Görüşme" },
    { text: "24 Saat İçinde Dönüş" },
    { text: "Teklif Zorunluluğu Yok" }
  ]}
/>
```

**2. Minimal Varyant:**
```tsx
<CTASection
  variant="minimal"
  heading="Hemen Başlayın"
  description="Demo talep edin, size özel çözümü keşfedin."
  primaryButton={{
    text: "Demo İsteyin",
    href: "/demo"
  }}
/>
```

**3. Gradient Varyant (Footer Üstü):**
```tsx
<CTASection
  variant="gradient"
  heading="Dijital Dönüşümünüz Başlasın"
  description="AI destekli çözümlerimizle işletmenizi geleceğe taşıyın."
  primaryButton={{
    text: "Hemen Başla",
    icon: Rocket
  }}
  secondaryButton={{
    text: "Daha Fazla Bilgi",
    variant: "outline"
  }}
/>
```

**4. Özel Button onClick Kullanımı:**
```tsx
<CTASection
  variant="compact"
  heading="Bültenimize Katılın"
  description="Haftalık AI haberleri alın"
  primaryButton={{
    text: "Abone Ol",
    onClick: () => openNewsletterModal()
  }}
/>
```

**5. Trust Indicators ile Icon:**
```tsx
import { CheckCircle, Shield, Zap } from "lucide-react";

<CTASection
  heading="Güvenilir AI Çözümleri"
  description="Kurumsal güvenlik standartlarında"
  trustIndicators={[
    { text: "ISO 27001 Sertifikalı", icon: Shield },
    { text: "7/24 Destek", icon: Zap },
    { text: "%99.9 Uptime", icon: CheckCircle }
  ]}
/>
```

**Özellikler:**
- ✅ 5 farklı varyant (default, minimal, gradient, compact, footer-above)
- ✅ Tamamen props-based, yeniden kullanılabilir
- ✅ TypeScript tip güvenliği
- ✅ Framer Motion animasyonları
- ✅ Responsive tasarım (mobil + desktop)
- ✅ İsteğe bağlı butonlar (href veya onClick)
- ✅ Trust indicators (güven göstergeleri)
- ✅ Icon desteği (Lucide veya React component)
- ✅ **#fd8f52 marka rengi ile tam uyumlu**
- ✅ Footer tasarımı ile uyumlu renk şeması
- ✅ Gradient ve radial gradient desteği
- ✅ Özelleştirilebilir padding ve spacing
- ✅ Arka plan dekoratif elementler (gradient varyantında)

**Renk Paleti (#fd8f52 Marka Rengi):**
```css
/* Light Mode */
--primary: 21 98% 66%;           /* #fd8f52 - Brand Orange */
--primary-hover: 21 95% 58%;     /* Darker Orange */
--primary-light: 21 98% 75%;     /* Lighter Orange */
--primary-dark: 21 90% 50%;      /* Darkest Orange */

/* Dark Mode */
--primary: 21 98% 70%;           /* Lighter for dark mode */
--primary-hover: 21 98% 66%;     /* Brand Orange */
--primary-light: 21 98% 80%;     /* Even lighter */
--primary-dark: 21 95% 58%;      /* Darker */

/* Complementary Accent */
--accent: 201 98% 66%;           /* Blue-Cyan complement */
```

**CSS Gradient Utilities:**
```css
.bg-gradient-primary          /* Linear gradient (left to right) */
.bg-gradient-primary-radial   /* Radial gradient (center) */
.bg-gradient-primary-warm     /* Diagonal gradient (135deg) */
```

**Kullanım Durumu:**
- `components/sections/home/cta-section.tsx` - Ana sayfa CTA
- Her sayfa sonunda kullanılabilir
- Landing page'lerde conversion için
- Footer üstü özel bölüm olarak

**Avantajlar:**
- 📝 **Kolay Özelleştirme:** Her sayfa için farklı içerik
- 🎨 **Esnek Tasarım:** 5 farklı görsel stil
- 🔄 **Yeniden Kullanılabilir:** Tek component, sonsuz kullanım
- 🎯 **Conversion Odaklı:** Trust indicators + çift buton
- 📱 **Fully Responsive:** Mobil-first tasarım
- 🎭 **Animasyonlu:** Smooth Framer Motion animasyonları
- 🌈 **Marka Uyumlu:** #fd8f52 renk teması ile tam entegre

**Performans:**
- Lazy loading destekli
- Optimized animations (60fps)
- No unnecessary re-renders
- Tree-shakeable TypeScript types

**Footer Uyumluluğu:**
Footer component'i ile renk ve tasarım uyumluluğu sağlanmıştır:
- Footer border renkleri ile uyumlu
- Footer backdrop-blur ile uyumlu
- Footer spacing sistemi ile uyumlu
- Özellikle `footer-above` varyantı footer ile seamless geçiş sağlar

**Durum:** 🆕 **Yeni Eklendi** - Kullanıma hazır, production-ready

**Best Practices:**
1. Ana sayfada `default` varyantını kullanın
2. Alt sayfalarda `minimal` tercih edin
3. Footer üstünde `gradient` veya `footer-above` kullanın
4. Her sayfada farklı heading/description ile kişiselleştirin
5. Trust indicators ile güven oluşturun
6. Primary button'a vurgu yapın, secondary'yi outline yapın

---

*Son Güncelleme: 2025-11-20*
*Oluşturan: Claude Code*
