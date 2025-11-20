import type { LucideIcon } from "lucide-react";
import {
  TrendingUp,
  Users,
  Headphones,
  DollarSign,
  Package,
  FileCheck,
  MessageSquare,
  ShoppingCart,
  BarChart,
} from "lucide-react";

export type DepartmentCardData = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  features: string[];
};

export type TrustIndicatorData = {
  text: string;
  value: string;
};

export type UseCaseStat = {
  value: string;
  label: string;
};

export type UseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
  stats: UseCaseStat;
};

export type CtaData = {
  heading: string;
  description: string;
  subDescription?: string;
  primaryCta: {
    text: string;
    icon?: "phone" | "message";
  };
  secondaryCta: {
    text: string;
    icon?: "phone" | "message";
  };
  trustIndicators: TrustIndicatorData[];
};

export const ctaData: CtaData = {
  heading: "AI Otomasyon ile Süreçlerinizi Hızlandırın",
  description:
    "Tekrarlayan görevleri AI Agent’lara devredin, insan hatasını azaltın ve operasyonlarınızı uçtan uca otonom hale getirin.",
  subDescription:
    "İlk görüşmede süreçlerinizi dinliyor, kısa bir keşif çalışmasıyla en hızlı değer üretecek otomasyon alanlarını birlikte seçiyoruz.",
  primaryCta: {
    text: "Ücretsiz Danışmanlık",
    icon: "message",
  },
  secondaryCta: {
    text: "Demo Talebi",
    icon: "phone",
  },
  trustIndicators: [
    {
      text: "Zaman Tasarrufu",
      value: "%70’e kadar",
    },
    {
      text: "Hata Azaltma",
      value: "%80’e varan",
    },
    {
      text: "Kesintisiz Otomasyon",
      value: "7/24",
    },
  ],
};

export const departmentCardsData: DepartmentCardData[] = [
  {
    icon: TrendingUp,
    title: "Satış, Pazarlama ve Müşteri Yönetimi",
    description: "Müşteri yönetimi ve kampanya otomasyonu.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    features: [
      "Potansiyel müşteri takibi ve puanlama",
      "Otomatik e-posta ve sosyal medya kampanyaları",
      "CRM sistemlerinin otomatik güncellenmesi",
      "Pazar trend analizi ve raporlama",
    ],
  },
  {
    icon: Users,
    title: "İşe Alımdan Eğitime Tüm İnsan Kaynakları",
    description: "İşe alımdan eğitime tüm İK süreçleri.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    features: [
      "Aday başvuru takip sistemi (ATS) otomasyonu",
      "Yeni çalışanlar için dijital belge toplama",
      "Otomatik eğitim atama ve takip sistemi",
      "Performans değerlendirme ve geri bildirim döngüleri",
    ],
  },
  {
    icon: Headphones,
    title: "Müşteri Destek Süreçlerinizi Hızlandırın",
    description: "Destek taleplerini hızlandırın ve çözün.",
    image:
      "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    features: [
      "Gelen talepleri akıllı bilet sistemine yönlendirme",
      "Sık sorulan sorular için 7/24 otomatik yanıt botu",
      "Müşteri geri bildirimlerini duygu analizi ile raporlama",
      "Canlı destek yoğunluğunu tahmin etme",
    ],
  },
  {
    icon: DollarSign,
    title: "Finansal Süreçlerinizi Kolaylaştırın",
    description: "Finansal süreçlerinizi otomatikleştirin.",
    image:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    features: [
      "Gelen faturaların otomatik işlenmesi ve onayı",
      "Akıllı gider takibi ve kategori bazlı raporlama",
      "Gerçek zamanlı finansal dashboard'lar",
      "Bordro ve ödeme süreçlerinin otomasyonu",
    ],
  },
  {
    icon: Package,
    title: "Envanterden Teslimata Operasyonlar",
    description: "Envanterden teslimata tüm operasyonlar.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    features: [
      "Akıllı stok ve envanter yönetimi",
      "Tedarik zinciri ve talep tahmini optimizasyonu",
      "Otomatik sipariş takibi ve müşteri bilgilendirme",
      "Rota optimizasyonu ve lojistik koordinasyonu",
    ],
  },
];

export const useCasesData: UseCase[] = [
  {
    icon: FileCheck,
    title: "Otomatik Fatura ve Form Okuma",
    description: "PDF → JSON → ERP %90 zaman tasarrufu",
    details:
      "Fatura, makbuz ve formları otomatik okuyarak ERP sisteminize aktarın. Manuel veri girişini ortadan kaldırın.",
    stats: { value: "%90", label: "Zaman Tasarrufu" },
  },
  {
    icon: MessageSquare,
    title: "WhatsApp – Telegram – CRM Otomasyonu",
    description: "Müşteri mesajlarını sınıflandır, yanıtla, CRM'e kaydet.",
    details:
      "Gelen mesajları AI ile analiz edin, otomatik yanıt verin ve tüm müşteri etkileşimlerini CRM'de saklayın.",
    stats: { value: "7/24", label: "Kesintisiz Destek" },
  },
  {
    icon: ShoppingCart,
    title: "Teklif – Sipariş – Stok Otomasyonu",
    description: "E-posta → AI → ERP → rapor",
    details:
      "E-posta ile gelen siparişleri otomatik işleyin, stok kontrolü yapın ve ERP'ye aktarın. Anlık raporlama sağlayın.",
    stats: { value: "%80", label: "Hata Azaltma" },
  },
  {
    icon: Users,
    title: "İnsan Kaynakları Otomasyonu",
    description: "CV analizi, aday sınıflandırma, toplantı planlama.",
    details:
      "Binlerce CV'yi AI ile analiz edin, en uygun adayları belirleyin ve görüşme sürecini otomatikleştirin.",
    stats: { value: "10x", label: "Daha Hızlı İşe Alım" },
  },
  {
    icon: BarChart,
    title: "Raporlama Otomasyonu",
    description:
      "Her gün otomatik e-posta: Satış – stok – insan kaynakları – finans verileri.",
    details:
      "Tüm departmanlardan veri toplayıp, günlük/haftalık/aylık raporları otomatik oluşturun ve gönderin.",
    stats: { value: "100%", label: "Otomatik Raporlama" },
  },
];
