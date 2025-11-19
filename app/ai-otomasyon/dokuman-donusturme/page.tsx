"use client";

import React, { useEffect, useState } from "react";
import { PageHero } from "@components/shared/page-hero";
import { Container } from "@components/shared/container";
import { H2, Lead, Button, ExpandableCardGrid } from "@components/ui";
import { ArrowRight, FileText, ScanLine, Folders } from "lucide-react";

const CTASection = () => null;

export default function DokumanDonusturmePage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // --- VERİ SETLERİ ---

    // 1. ANA HİZMETLER (ExpandableCardGrid İçin)
    const services = [
        {
            title: "PDF → Word, Excel, JSON Dönüşümü",
            description: "Dosyalarınızı tek tuşla kullanılabilir ve düzenlenebilir formata dönüştüren gelişmiş altyapı.",
            src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
            icon: <FileText className="w-6 h-6 text-blue-500" />,
            content: () => (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2">Özellikler</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Statik PDF&apos;leri düzenlenebilir Word formatına çevirme</li>
                            <li>Tablo ve veri içeren PDF&apos;leri Excel&apos;e aktarma</li>
                            <li>Fatura/İrsaliye gibi belgeleri JSON verisine çevirme</li>
                            <li>Çok sayfalı PDF&apos;lerde sayfa/satır bazlı ayrıştırma</li>
                            <li><strong>Formatlar:</strong> PDF, DOCX, XLSX, PNG, JPG, TIFF, HTML, TXT</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2">Faydalar</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Manuel veri girişi hataları %0&apos;a iner.</li>
                            <li>ERP/CRM sistemlerine otomatik veri aktarımı sağlanır.</li>
                            <li>Raporlar ve analizler saniyeler içinde hazırdır.</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "Görüntüden Metin Çıkarma (OCR + AI)",
            description: "Sadece okumuyoruz, anlıyoruz. OCR çıktılarını yapay zeka ile anlamlandıran akıllı sistem.",
            src: "https://images.unsplash.com/photo-1555421689-4926337d387e?q=80&w=1600&auto=format&fit=crop",
            icon: <ScanLine className="w-6 h-6 text-purple-500" />,
            content: () => (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2">Yetenekler</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Fatura, irsaliye ve makbuzlardan yapılandırılmış veri çıkarma</li>
                            <li>Damgalı, silik, yamuk veya düşük çözünürlüklü görsel desteği</li>
                            <li>Çok dilli tanıma (TR, EN, DE, AR, RU ve dahası)</li>
                            <li>Tablo, imza alanı ve dipnotların otomatik tespiti</li>
                        </ul>
                    </div>
                    <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
                        <h4 className="font-bold text-sm text-neutral-800 dark:text-neutral-200 mb-2">AI Anlamlandırma Örneği</h4>
                        <p className="text-xs text-muted-foreground italic">
                            Sistem sadece metni okumaz, şu sorulara yanıt verir:<br/>
                            — &quot;Bu belge bir fatura mı yoksa iade makbuzu mu?&quot;<br/>
                            — &quot;Toplam tutar (KDV dahil) hangisidir?&quot;<br/>
                            — &quot;Tedarikçi vergi numarası nerede yazıyor?&quot;
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "Kurumsal Doküman Standardizasyonu",
            description: "Kontrolsüz doküman enflasyonuna son. Tüm belgeleri tek bir kurumsal standartta toplayın.",
            src: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1600&auto=format&fit=crop",
            icon: <Folders className="w-6 h-6 text-green-500" />,
            content: () => (
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2">Neleri Standartlaştırıyoruz?</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Dosya adlandırma kuralları (Örn: 2024_Fatura_FirmaAdi.pdf)</li>
                            <li>İçerik formatı (Başlık stilleri, tarih formatları)</li>
                            <li>Şirket içi formlar (Satın alma, izin, masraf formları)</li>
                            <li>Versiyon kontrolü ve meta veri etiketleme</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-neutral-800 dark:text-neutral-200 mb-2">AI Destekli Avantajlar</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                            <li>Belge türüne göre otomatik klasörleme/sınıflandırma.</li>
                            <li>Yanlış şablonla hazırlanan belgelerin otomatik tespiti.</li>
                            <li>Eksik alanlarda (imza, tarih vb.) kullanıcı uyarısı.</li>
                        </ul>
                    </div>
                </div>
            ),
        },
    ];

    // 2. NEDEN ÖNEMLİ (Dönüşüm Kartları)
    const transformationBenefits = [
        {
            before: "Dağınık PDF'ler",
            after: "Yapılandırılmış Veri (JSON/XML)",
            desc: "İçerikte arama yapılamayan yığınlar yerine, sorgulanabilir veritabanı."
        },
        {
            before: "Tarama Görüntüleri",
            after: "Makine Okunabilir Metin",
            desc: "Görüntüdeki pikselleri anlamlı metin bloklarına dönüştürürüz."
        },
        {
            before: "Rastgele Formlar",
            after: "Standart Şablonlar",
            desc: "Kurumsal kimliğe ve iş kurallarına %100 uyumlu dokümanlar."
        },
        {
            before: "Manuel Veri Girişi",
            after: "Otomatik İş Akışları",
            desc: "İnsana dayalı veri giriş hatalarını ve zaman kaybını ortadan kaldırın."
        }
    ];

    if (!mounted) return null;

    return (
        <>
            <PageHero
                title="Doküman Dönüştürme ve Dijitalizasyon"
                description="MersaTech ile dokümanlarınız sadece dönüştürülmez; yapay zeka ile anlamlandırılır, sınıflandırılır ve iş akışlarınıza entegre edilir."
                backgroundVariant="minimal"
            />

            {/* GİRİŞ BÖLÜMÜ */}
            <Container sectionBg="transparent" className="py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <H2>Dokümanlarınız Veriye Dönüşsün</H2>
                    <Lead theme="muted" className="mt-4">
                        Modern işletmelerin en büyük problemi: dağınık, uyumsuz ve manuel işlenen dokümanlar.
                        Biz, her türlü dokümanı yapay zeka destekli olarak okunabilir, düzenlenebilir ve sistemlere (ERP/CRM) entegre edilebilir hale getiriyoruz.
                    </Lead>
                </div>
            </Container>

            {/* ANA HİZMETLER (Expandable Card Grid) */}
            <Container sectionBg="slate" className="py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <H2>Neler Sunuyoruz?</H2>
                        <Lead theme="muted" className="mt-4">Dönüştürme, Anlamlandırma ve Standardizasyon üçgeninde tam çözüm.</Lead>
                    </div>

                    {/* Cards prop'unu ExpandableCardGrid'in beklediği formata map ediyoruz.
             content fonksiyonunu yukarıda tanımladık.
          */}
                    <ExpandableCardGrid
                        cards={services.map(s => ({
                            title: s.title,
                            description: s.description,
                            src: s.src,
                            content: s.content
                        }))}
                    />
                </div>
            </Container>

            {/* DÖNÜŞÜM FAYDALARI (Comparison Cards) */}
            <Container sectionBg="transparent" className="py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <H2>Neden Bu Hizmet Önemli?</H2>
                        <Lead theme="muted" className="mt-4">Belge yönetimi dönüşümü, zaman tasarrufu sağlar, hataları azaltır ve şirketin dijital omurgasını güçlendirir.</Lead>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {transformationBenefits.map((benefit, idx) => (
                            <div
                                key={idx}
                                className="group relative p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                                    <div className="px-4 py-2 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-medium text-sm w-full sm:w-auto text-center">
                                        {benefit.before}
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-neutral-400 rotate-90 sm:rotate-0 flex-shrink-0" />
                                    <div className="px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-bold text-sm w-full sm:w-auto text-center">
                                        {benefit.after}
                                    </div>
                                </div>
                                <p className="text-center sm:text-left text-muted-foreground text-sm">
                                    {benefit.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            {/* CTA SECTION */}
            <Container sectionBg="slate" className="py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 p-8 sm:p-12 rounded-3xl text-white text-center shadow-2xl">
                        {/* Dekoratif arka plan şekilleri */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

                        <h2 className="relative z-10 text-3xl sm:text-4xl font-bold mb-4">Doküman Yığınlarından Kurtulun</h2>
                        <p className="relative z-10 text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                            Kağıt ve PDF yığınları arasında kaybolmayın. Ücretsiz bir analiz yapalım ve doküman süreçlerinizi nasıl %80 hızlandırabileceğimizi gösterelim.
                        </p>

                        <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" variant="secondary" className="text-blue-700 font-bold">
                                Demo Talep Et
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                                Örnek Dosya Yükle
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>


            <CTASection />
        </>
    );
}