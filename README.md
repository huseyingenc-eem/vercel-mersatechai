# MERSA AI - Yapay Zeka Destekli Çözümler

Modern ve yenilikçi bir AI şirket websitesi. Next.js, Tailwind CSS, ve Aceternity UI ile oluşturulmuştur.

## Özellikler

- ✨ Modern ve animasyonlu UI bileşenleri
- 🎨 Gradient ve glassmorphism efektleri
- 📱 Tam responsive tasarım
- ⚡ Next.js 14 App Router
- 🎯 TypeScript desteği
- 🌙 Dark mode tasarım
- 🔄 Framer Motion animasyonları

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development sunucusunu başlat
npm run dev

# Production build
npm run build

# Production sunucusunu başlat
npm start
```

## Kullanılan Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animasyonlar
- **Aceternity UI** - Modern UI bileşenleri
- **Lucide React** - İkonlar
- **shadcn/ui** - UI bileşenleri

## Sayfa Yapısı

- **Hero Section** - Ana başlık ve istatistikler
- **Services Section** - Global AI firmalarından ilham alınmış enterprise-grade hizmet kartları
  - 3 ana hizmet (Konuşma AI, Otonom Agentler, Kurumsal Platform)
  - Detaylı özellik listeleri ve metrikler
  - 3 ek hizmet kartı
  - Trust indicators (500+ AI Agent, 10M+ konuşma)
- **Features Section** - Özellikler ve çalışma süreci
- **CTA Section** - Call-to-action alanı
- **Footer** - İletişim ve linkler

## İçerik Referansları

Hizmetler bölümü içerikleri global AI liderlerinden ilham alınarak oluşturulmuştur:
- **Decagon, Sierra, Boost.ai** - Conversational AI platformları
- **OpenAI, Anthropic** - Autonomous AI agents
- **Rasa, Cognigy** - Enterprise AI infrastructure

## Geliştirme

Proje `http://localhost:3000` adresinde çalışacaktır.

Dosya yapısı:
```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── spotlight.tsx
│   │   ├── moving-border.tsx
│   │   └── text-generate-effect.tsx
│   ├── navbar.tsx
│   ├── hero-section.tsx
│   ├── services-section.tsx
│   ├── features-section.tsx
│   ├── cta-section.tsx
│   └── footer.tsx
└── lib/
    └── utils.ts
```

## Özelleştirme

- Renkler: `tailwind.config.ts` ve `app/globals.css`
- Animasyonlar: `tailwind.config.ts` içinde keyframes
- İçerik: Her component içinde doğrudan düzenlenebilir

## Lisans

© 2024 MERSA AI. Tüm hakları saklıdır.
