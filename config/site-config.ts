// src/config/site-config.ts

export type NavItem = {
    label: string;
    href: string;
    external?: boolean;
    children?: NavItem[]; // ALT MENÜLER (nested destekli)
};

export type ServiceItem = {
    id: string;
    title: string;
    description: string;
    icon?: string;
};

export type SiteConfig = {
    name: string;
    description: string;
    nav: {
        main: NavItem[];
        footer: NavItem[];
    };
    sections: {
        services: ServiceItem[];
    };
};

export const siteConfig: SiteConfig = {
    name: "Mersa Tech AI",
    description:
        "AI-based solutions for converting and optimizing business processes.",
    nav: {
        main: [
            {
                label: "Hizmetler",
                href: "#services",
                children: [
                    {
                        label: "İş Süreçleri",
                        href: "#is-surecleri",
                        children: [
                            { label: "Süreç Analizi", href: "#service-surec-analizi" },
                            { label: "Süreç Modelleme", href: "#service-surec-modelleme" },
                            { label: "Süreç Haritalama", href: "#service-surec-haritalama" },
                            {
                                label: "İş Akışı Otomasyonu (Workflow)",
                                href: "#service-workflow-otomasyonu",
                            },
                            {
                                label: "Dijital Formlar & Onay Süreçleri",
                                href: "#service-dijital-formlar-onay",
                            },
                            {
                                label: "Süreç Performansı ve KPI Yönetimi",
                                href: "#service-kpi-yonetimi",
                            },
                            {
                                label: "Uyum & Denetim Yönetimi",
                                href: "#service-uyum-denetim-yonetimi",
                            },
                            { label: "Risk Yönetimi", href: "#service-risk-yonetimi" },
                        ],
                    },
                    {
                        label: "AI Otomasyon",
                        href: "ai-otomasyon",
                        children: [
                            {
                                label: "AI Süreç Otomasyonu",
                                href: "#service-ai-surec-otomasyonu",
                            },
                            {
                                label: "Doküman Dönüştürme (PDF, Görüntü, Metin)",
                                href: "#service-dokuman-donusturme",
                            },
                            {
                                label: "Otomatik Veri Çıkarma (OCR, Form Tanıma)",
                                href: "#service-otomatik-veri-cikarma",
                            },
                            {
                                label: "RPA + AI İş Akışları",
                                href: "#service-rpa-ai-is-akislari",
                            },
                            { label: "Otomasyon Botları", href: "#service-otomasyon-botlari" },
                            {
                                label: "Otomatik Raporlama & Dashboard",
                                href: "#service-otomatik-raporlama-dashboard",
                            },
                            {
                                label: "AI Eğitim Modülleri",
                                href: "#service-ai-egitim-modulleri",
                                children: [
                                    { label: "AI Temelleri", href: "#service-ai-temelleri" },
                                    { label: "Prompt Engineering", href: "#service-prompt-engineering" },
                                    {
                                        label: "İş Süreçlerinde AI Kullanımı",
                                        href: "#service-is-sureclerinde-ai-kullanimi",
                                    },
                                    {
                                        label: "RPA ve AI Entegrasyonu",
                                        href: "#service-rpa-ai-entegrasyonu",
                                    },
                                    {
                                        label: "Kurumsal AI Eğitimleri",
                                        href: "#service-kurumsal-ai-egitimleri",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            { label: "Fiyatlandırma", href: "/fiyatlandirma" },
            { label: "Hakkımızda", href: "/hakkimizda" },
            { label: "İletişim", href: "/iletisim" },
        ],
        footer: [
            { label: "Gizlilik Politikası", href: "/privacy" },
            { label: "Kullanım Koşulları", href: "/terms" },
        ],
    },
    sections: {
        services: [
            // 1) İŞ SÜREÇLERİ
            {
                id: "service-surec-analizi",
                title: "Süreç Analizi",
                description:
                    "Kurumsal iş süreçlerinizi uçtan uca analiz ederek darboğazları, tekrar eden işleri ve verimsizlik noktalarını ortaya çıkarır.",
            },
            {
                id: "service-surec-modelleme",
                title: "Süreç Modelleme",
                description:
                    "Mevcut ve hedef süreçlerinizi BPMN gibi standartlar ile modellenmiş, herkes tarafından anlaşılır hale getirir.",
            },
            {
                id: "service-surec-haritalama",
                title: "Süreç Haritalama",
                description:
                    "Departmanlar, roller ve sistemler arasında veri ve iş akışını gösteren detaylı süreç haritaları oluşturur.",
            },
            {
                id: "service-workflow-otomasyonu",
                title: "İş Akışı Otomasyonu (Workflow)",
                description:
                    "Onay, bildirim ve görev akışlarını dijitalleştirerek manuel işleri azaltır, hataları ve gecikmeleri minimuma indirir.",
            },
            {
                id: "service-dijital-formlar-onay",
                title: "Dijital Formlar & Onay Süreçleri",
                description:
                    "Kağıt temelli tüm süreçleri dijital formlar ve esnek onay akışları ile uçtan uca yönetilebilir hale getirir.",
            },
            {
                id: "service-kpi-yonetimi",
                title: "Süreç Performansı ve KPI Yönetimi",
                description:
                    "Süreçler için KPI’lar tanımlar, gerçek zamanlı performans göstergeleri ve dashboard’lar ile takip imkânı sunar.",
            },
            {
                id: "service-uyum-denetim-yonetimi",
                title: "Uyum & Denetim Yönetimi",
                description:
                    "Regülasyon, standart ve iç prosedürlere uyumu süreç bazında takip eder, denetim bulgularını merkezi şekilde yönetir.",
            },
            {
                id: "service-risk-yonetimi",
                title: "Risk Yönetimi",
                description:
                    "Operasyonel ve süreç bazlı riskleri tanımlar, skorlar ve aksiyon planları ile entegre şekilde yönetir.",
            },

            // 3) AI OTOMASYON
            {
                id: "service-ai-surec-otomasyonu",
                title: "AI Süreç Otomasyonu",
                description:
                    "Yapay zeka destekli kurallar ve modellerle süreç adımlarını otomatikleştirir, insan müdahalesini en aza indirir.",
            },
            {
                id: "service-dokuman-donusturme",
                title: "Doküman Dönüştürme (PDF, Görüntü, Metin)",
                description:
                    "PDF, taranmış görüntü ve metin dosyalarını yapılandırılmış, aranabilir ve işlenebilir formatlara dönüştürür.",
            },
            {
                id: "service-otomatik-veri-cikarma",
                title: "Otomatik Veri Çıkarma (OCR, Form Tanıma)",
                description:
                    "Fatura, sözleşme, form gibi dokümanlardan alan bazlı verileri OCR ve AI modelleri ile otomatik olarak çıkarır.",
            },
            {
                id: "service-rpa-ai-is-akislari",
                title: "RPA + AI İş Akışları",
                description:
                    "Robotik süreç otomasyonu ile yapay zekayı birleştirerek uçtan uca tamamen otomatik iş akışları kurgular.",
            },
            {
                id: "service-otomasyon-botlari",
                title: "Otomasyon Botları",
                description:
                    "Tekrarlayan görevleri üstlenen, sistemler arası veri taşıyan ve kullanıcılara asistanlık yapan akıllı botlar geliştirir.",
            },
            {
                id: "service-otomatik-raporlama-dashboard",
                title: "Otomatik Raporlama & Dashboard",
                description:
                    "Farklı kaynaklardan gelen verileri toplayıp, periyodik raporları ve yönetim dashboard’larını otomatik üretir.",
            },
            {
                id: "service-ai-egitim-modulleri",
                title: "AI Eğitim Modülleri",
                description:
                    "AI temelleri, prompt engineering, iş süreçlerinde AI kullanımı, RPA–AI entegrasyonu ve kurumsal AI farkındalık eğitimlerini içerir.",
            },
            {
                id: "service-ai-temelleri",
                title: "AI Temelleri",
                description:
                    "Yapay zekanın temel kavramlarını, algoritma tiplerini ve gerçek hayat kullanım senaryolarını sade bir dille anlatır.",
            },
            {
                id: "service-prompt-engineering",
                title: "Prompt Engineering",
                description:
                    "LLM tabanlı sistemler için etkili prompt yazım tekniklerini, şablonları ve kurumsal kullanım örneklerini sunar.",
            },
            {
                id: "service-is-sureclerinde-ai-kullanimi",
                title: "İş Süreçlerinde AI Kullanımı",
                description:
                    "Satınalma, finans, insan kaynakları ve operasyon süreçlerinde AI ile nasıl verimlilik sağlanabileceğini gösterir.",
            },
            {
                id: "service-rpa-ai-entegrasyonu",
                title: "RPA ve AI Entegrasyonu",
                description:
                    "Mevcut RPA botlarınızı yapay zeka ile zenginleştirerek karar verebilen, esnek iş akışları oluşturmanıza yardımcı olur.",
            },
            {
                id: "service-kurumsal-ai-egitimleri",
                title: "Kurumsal AI Eğitimleri",
                description:
                    "Farklı departman ve seviye için tasarlanmış, kurumunuza özel AI eğitim programları ve workshop’lar sunar.",
            },
        ],
    },
};
