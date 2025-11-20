import {
  MessageSquare,
  Workflow,
  GitBranch,
  Sparkles,
  TrendingUp,
  Zap,
  Users,
  ShoppingCart,
  Building2,
  Megaphone,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Lightbulb,
  Code,
  Rocket,
  Phone,
  ArrowRight,
} from "lucide-react";
import {
  SiTelegram,
  SiWhatsapp,
  SiFacebook,
  SiLinkedin,
  SiInstagram,
  SiHubspot,
  SiSlack,
  SiGooglesheets,
  SiZapier,
  SiMake,
  SiSalesforce,
  SiNotion,
  SiTrello,
  SiAsana,
  SiZendesk,
} from "react-icons/si";
import { MdGroups } from "react-icons/md";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

// ==================== HERO SECTION ====================
export const heroData = {
  badge: {
    text: "AI-Powered Business Automation",
  },
  title: [
    { text: "İş" },
    { text: "Süreçlerinizi" },
    { text: "Yapay" },
    { text: "Zeka" },
    { text: "ile" },
    { text: "Dönüştürün", className: "text-primary" },
  ],
  description:
    "Yapay zeka destekli çözümlerimizle iş süreçlerinizi otomatikleştirin, verimliliği %80 artırın ve maliyetleri düşürün",
  primaryCta: {
    text: "Ücretsiz Demo",
    href: "/iletisim",
  },
  secondaryCta: {
    text: "Hizmetlerimizi İnceleyin",
    href: "/hizmetler",
  },
  stats: [
    { icon: Zap, value: "7/24", label: "Kesintisiz Destek" },
    { icon: TrendingUp, value: "%80", label: "Verimlilik Artışı" },
    { icon: Users, value: "500+", label: "Mutlu Müşteri" },
    { icon: Sparkles, value: "3x", label: "Daha Hızlı" },
  ],
};

// ==================== SERVICES SECTION ====================
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  gradient: string;
  features: string[];
  advantages: string[];
}

export const servicesData = {
  badge: {
    text: "Solutions",
  },
  heading: "İş Süreçlerinizi Otomatikleştirin",
  subheading: "Satıştan müşteri desteğine, her iş akışınız için AI-powered çözümler",
  services: [
    {
      id: 0,
      title: "Satış ve Müşteri Kazanımı",
      description:
        "Web sitenize gelen ziyaretçileri otomatik olarak karşılayın, sorularını yanıtlayın ve randevu alın.",
      icon: MessageSquare,
      image: "/images/services/service-1.png",
      gradient: "from-green-400 to-emerald-600",
      features: [
        "Otomatik müşteri toplama",
        "Randevu yönetimi",
        "Satış entegrasyonu",
      ],
      advantages: [
        "%40'a varan potansiyel müşteri artışı",
        "7/24 kesintisiz hizmet",
        "Satış ekibi verimliliğinde artış",
      ],
    },
    {
      id: 1,
      title: "Müşteri Destek Otomasyonu",
      description:
        "Sık sorulan soruları otomatik yanıtlayın, destek taleplerini yönlendirin ve müşteri memnuniyetini artırın.",
      icon: Workflow,
      image: "/images/services/service-2.png",
      gradient: "from-blue-400 to-cyan-600",
      features: ["7/24 anlık destek", "Çok dilli destek", "Talep yönlendirme"],
      advantages: [
        "%80'e varan yanıt süresi azalması",
        "Müşteri memnuniyetinde artış",
        "Destek maliyetlerinde düşüş",
      ],
    },
    {
      id: 2,
      title: "Özel İş Akışları",
      description:
        "İş süreçlerinize özel AI sohbet robotları. Sipariş takibi, randevu alma, sipariş toplama ve daha fazlası.",
      icon: GitBranch,
      image: "/images/services/service-3.png",
      gradient: "from-purple-400 to-pink-600",
      features: [
        "Özel iş süreçleri",
        "Çoklu platform desteği",
        "Sistem entegrasyonu",
      ],
      advantages: [
        "Operasyonel verimlilik",
        "Manuel hata oranında azalma",
        "Tam esneklik ve ölçeklenebilirlik",
      ],
    },
  ] as Service[],
};

// ==================== USE CASES SECTION ====================
export interface UseCase {
  icon: LucideIcon;
  title: string;
  problem: string;
  solution: string;
  gradient: string;
}

export const useCasesData = {
  heading: "Sektörünüze Özel Çözümler",
  subheading: "Her sektör için özelleştirilmiş AI otomasyon çözümleri",
  ctaText: "Tüm Kullanım Senaryoları",
  ctaHref: "/hizmetler",
  useCases: [
    {
      icon: ShoppingCart,
      title: "E-Ticaret",
      problem: "Ziyaretçiler soru sorup yanıt alamıyor",
      solution: "7/24 ürün danışmanlığı + sepet hatırlatıcısı",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      icon: Building2,
      title: "B2B Şirketler",
      problem: "Lead'ler kaybolup gidiyor",
      solution: "Otomatik lead toplama + CRM entegrasyonu",
      gradient: "from-blue-400 to-cyan-600",
    },
    {
      icon: Users,
      title: "Hizmet İşletmeleri",
      problem: "Rezervasyon takibi çok zor",
      solution: "WhatsApp üzerinden otomatik rezervasyon",
      gradient: "from-purple-400 to-pink-600",
    },
    {
      icon: Megaphone,
      title: "Ajanslar",
      problem: "Çoklu müşteri takibi karmaşık",
      solution: "Merkezi lead toplama + raporlama",
      gradient: "from-orange-400 to-red-600",
    },
    {
      icon: GraduationCap,
      title: "Eğitim",
      problem: "Öğrenci soruları yanıtsız kalıyor",
      solution: "Otomatik soru-cevap + kayıt sistemi",
      gradient: "from-indigo-400 to-purple-600",
    },
    {
      icon: Briefcase,
      title: "Profesyonel Hizmetler",
      problem: "Randevu yönetimi manuel",
      solution: "Akıllı randevu + hatırlatma sistemi",
      gradient: "from-teal-400 to-green-600",
    },
  ] as UseCase[],
};

// ==================== HORIZONTAL SCROLL SECTION ====================
export interface ScrollCard {
  id: number;
  title: string;
  description: string;
  color: string;
  icon?: LucideIcon;
  image: string;
}

export const horizontalScrollData = {
  cards: [
    {
      id: 1,
      title: "AI Süreç Otomasyonu",
      description:
        "Operasyonlarınızı baştan sona otonom hale getiren AI tabanlı iş akışları ile verimliliği artırın.",
      color: "from-blue-500 to-cyan-500",
      icon: Workflow,
      image: "/images/services/service-1.png",
    },
    {
      id: 2,
      title: "Otomatik Veri Çıkarma",
      description:
        "Faturalar, formlar ve sözleşmeler gibi dokümanlardan verileri otomatik olarak çıkarın ve işleyin.",
      color: "from-green-500 to-emerald-500",
      icon: GitBranch,
      image: "/images/services/service-2.png",
    },
    {
      id: 3,
      title: "Doküman Dönüştürme",
      description:
        "Her türlü dokümanı yapay zeka ile okunabilir ve kullanılır hale getirerek veri erişimini kolaylaştırın.",
      color: "from-purple-500 to-pink-500",
      icon: Sparkles,
      image: "/images/services/service-3.png",
    },
    {
      id: 4,
      title: "RPA + AI İş Akışları",
      description:
        "Klasik RPA'nın sınırlarını genişleten yapay zeka tabanlı robotlar ile karmaşık görevleri otomatikleştirin.",
      color: "from-orange-500 to-red-500",
      icon: Zap,
      image: "/images/services/service-4.png",
    },
  ] as ScrollCard[],
};

// ==================== FEATURES SECTION ====================
export interface FeatureStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const featuresData = {
  heading: "Nasıl Çalışıyoruz?",
  subheading: "5 basit adımda işiniz hazır",
  steps: [
    {
      icon: Users,
      title: "Sizi Dinliyoruz",
      description:
        "Ne istediğinizi, hangi probleminizi çözmek istediğinizi konuşuyoruz.",
    },
    {
      icon: Lightbulb,
      title: "Fikir Üretiyoruz",
      description:
        "Size en uygun çözümü buluyoruz. Nasıl çalışacağını gösteriyoruz.",
    },
    {
      icon: Code,
      title: "Yapıyoruz",
      description:
        "Sizin için özel olarak yapay zeka botunuzu veya sisteminizi kuruyoruz.",
    },
    {
      icon: Rocket,
      title: "Başlatıyoruz",
      description:
        "Sisteminiz çalışmaya başlıyor. Size nasıl kullanacağınızı öğretiyoruz.",
    },
    {
      icon: HeartHandshake,
      title: "Yanınızdayız",
      description: "Her zaman yanınızdayız. Sorun olursa hemen çözüyoruz.",
    },
  ] as FeatureStep[],
};

// ==================== INTEGRATIONS SECTION ====================
export interface Integration {
  name: string;
  category: string;
  description: string;
  color: string;
  icon: IconType;
}

export const integrationsData = {
  badge: {
    text: "Integrations",
  },
  heading: "100+ Platform Entegrasyonu",
  subheading: "Kullandığınız tüm araçlarla sorunsuz entegrasyon",
  ctaText: "Özel Entegrasyon Talebi",
  ctaHref: "/iletisim",
  ctaDescription: "Aradığınız entegrasyonu bulamadınız mı?",
  integrations: [
    {
      name: "Telegram",
      category: "Mesajlaşma",
      description: "Telegram botları ile müşterilerinizle anlık iletişim",
      color: "from-blue-500 to-cyan-500",
      icon: SiTelegram,
    },
    {
      name: "WhatsApp",
      category: "Mesajlaşma",
      description: "WhatsApp Business API entegrasyonu",
      color: "from-green-500 to-emerald-500",
      icon: SiWhatsapp,
    },
    {
      name: "Facebook",
      category: "Lead Kaynağı",
      description: "Facebook Messenger ve lead form entegrasyonu",
      color: "from-blue-600 to-indigo-600",
      icon: SiFacebook,
    },
    {
      name: "LinkedIn",
      category: "Lead Kaynağı",
      description: "LinkedIn lead generation ve mesajlaşma",
      color: "from-blue-700 to-blue-800",
      icon: SiLinkedin,
    },
    {
      name: "Instagram",
      category: "Mesajlaşma",
      description: "Instagram Direct Message otomasyonu",
      color: "from-pink-500 to-rose-500",
      icon: SiInstagram,
    },
    {
      name: "HubSpot",
      category: "CRM",
      description: "HubSpot CRM ve marketing automation",
      color: "from-orange-500 to-red-500",
      icon: SiHubspot,
    },
    {
      name: "Salesforce",
      category: "CRM",
      description: "Salesforce CRM entegrasyonu",
      color: "from-cyan-500 to-blue-600",
      icon: SiSalesforce,
    },
    {
      name: "Notion",
      category: "Veri",
      description: "Notion workspace entegrasyonu",
      color: "from-gray-700 to-gray-900",
      icon: SiNotion,
    },
    {
      name: "Slack",
      category: "İletişim",
      description: "Slack workspace entegrasyonu",
      color: "from-purple-500 to-pink-500",
      icon: SiSlack,
    },
    {
      name: "Microsoft Teams",
      category: "İletişim",
      description: "Teams chatbot ve bildirimler",
      color: "from-blue-500 to-purple-500",
      icon: MdGroups,
    },
    {
      name: "Google Sheets",
      category: "Veri",
      description: "Otomatik veri senkronizasyonu",
      color: "from-green-500 to-lime-500",
      icon: SiGooglesheets,
    },
    {
      name: "Trello",
      category: "Proje Yönetimi",
      description: "Trello board otomasyonu",
      color: "from-blue-500 to-blue-700",
      icon: SiTrello,
    },
    {
      name: "Asana",
      category: "Proje Yönetimi",
      description: "Asana task yönetimi",
      color: "from-red-500 to-pink-500",
      icon: SiAsana,
    },
    {
      name: "Zendesk",
      category: "Müşteri Desteği",
      description: "Zendesk ticket sistemi entegrasyonu",
      color: "from-green-600 to-teal-600",
      icon: SiZendesk,
    },
    {
      name: "Zapier",
      category: "Otomasyon",
      description: "5000+ uygulama ile bağlantı",
      color: "from-orange-500 to-amber-500",
      icon: SiZapier,
    },
    {
      name: "Make",
      category: "Otomasyon",
      description: "Karmaşık iş akışı otomasyonları",
      color: "from-purple-600 to-indigo-600",
      icon: SiMake,
    },
  ] as Integration[],
};

// ==================== CTA SECTION ====================
export const ctaData = {
  heading: "Projenizi Konuşalım",
  description:
    "İhtiyacınızı anlayalım ve size en uygun AI çözümünü birlikte belirleyelim.",
  subDescription: "İlk görüşme tamamen ücretsizdir.",
  primaryCta: {
    text: "İletişime Geç",
    icon: "Phone",
  },
  secondaryCta: {
    text: "WhatsApp",
    icon: "MessageSquare",
  },
  trustIndicators: [
    { text: "Ücretsiz Görüşme" },
    { text: "24 Saat İçinde Dönüş" },
    { text: "Teklif Zorunluluğu Yok" },
  ],
};
