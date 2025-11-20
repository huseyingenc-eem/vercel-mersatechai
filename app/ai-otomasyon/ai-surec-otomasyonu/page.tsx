"use client";

import React, { useEffect, useState } from "react";
import { PageHero, Container} from "@components/shared";
import { H2, Lead, Card, Button } from "@components/ui";
import { ExpandableCardGrid, InfiniteMovingCards, CardStack} from "@components/ui/cards";
import { useIsMobile } from '@/hooks/use-mobile';

export default function AiSurecOtomasyonuPage() {
  const isMobileState = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isMobile = mounted ? isMobileState : false;

  const problems = [
    "Süreçler kişiye bağlıdır; çalışan izin aldığında veya ayrıldığında işler aksar.",
    "Veriler farklı sistemlerde dağınıktır; rapor almak saatler sürer.",
    "Aynı hatalar tekrar tekrar yapılır; kalite ve müşteri memnuniyeti düşer.",
    "Operasyon büyüdükçe, insan gücüyle işleri yönetmek imkânsız hale gelir.",
  ];

  const automateAreas = [
    {
      title: "Müşteri İletişimi & Satış",
      description: "Akıllı asistanlar, CRM entegrasyonu ve lead skorlaması",
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
      features: [
        "WhatsApp / web / sosyal medya asistanları",
        "Tekrarlayan sorulara otomatik yanıt",
        "CRM otomatik kayıt & follow-up",
      ],
    },
    {
      title: "Operasyon & Back Office",
      description: "OCR, RPA ve workflow ile faturalama ve sipariş süreçleri",
      src: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1600&auto=format&fit=crop",
      features: [
        "OCR + LLM veri çıkarma",
        "Satın alma ve sipariş akışları",
        "Otomatik raporlama",
      ],
    },
    {
      title: "İnsan Kaynakları",
      description: "CV ön eleme, otomatik iletişim ve HR chatbot",
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
      features: [
        "CV sınıflandırma ve puanlama",
        "Otomatik bilgilendirme (e-posta / SMS)",
        "Performans & eğitim analitiği",
      ],
    },
    {
      title: "Finans & Yönetim",
      description: "Tahminler, gecikme tespiti ve yönetici özetleri",
      src: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1600&auto=format&fit=crop",
      features: [
        "Nakit akışı & forecast otomasyonu",
        "Geciken faturalar için otomatik hatırlatma",
        "Yönetime tek tık özetler",
      ],
    },
    {
      title: "IT & Destek",
      description: "Destek triage, otomatik çözümler ve log analizi",
      src: "https://images.unsplash.com/photo-1526378720530-2c7f53f0d4d3?q=80&w=1600&auto=format&fit=crop",
      features: [
        "Taleplerin otomatik sınıflandırılması",
        "Script tetikleme ile otomatik çözüm",
        "Log analizi ve anomali tespiti",
      ],
    },
  ];

  // ExpandableCardGrid için görseller eklendi
  const fourSteps = [
    {
      id: 0,
      title: "Keşif & Analiz",
      // Grid için görsel (src) gerekli
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
      body: (
          <div>
            <p className="mb-2 text-neutral-600 dark:text-neutral-300">AS-IS süreç analizi; zaman kaybı ve hata kaynaklarını tespit ederiz.</p>
            <ul className="text-sm text-muted-foreground list-disc pl-5">
              <li>ROI odaklı süreç seçimi</li>
              <li>Zaman ve hata analizi</li>
            </ul>
          </div>
      ),
    },
    {
      id: 1,
      title: "Çözüm Tasarımı",
      src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop",
      body: (
          <div>
            <p className="mb-2 text-neutral-600 dark:text-neutral-300">Hangi adımların tamamen otomatikleşeceğini ve hangilerinin insan+AI hibrit olacağını belirleriz.</p>
            <ul className="text-sm text-muted-foreground list-disc pl-5">
              <li>LLM, RPA, API & doküman işleme seçimi</li>
              <li>TO-BE süreç taslağı</li>
            </ul>
          </div>
      ),
    },
    {
      id: 2,
      title: "Entegrasyon & Devreye Alma",
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      body: (
          <div>
            <p className="mb-2 text-neutral-600 dark:text-neutral-300">Mevcut CRM/ERP/e-posta/WhatsApp gibi sistemlerle entegrasyon kurup pilot başlatırız.</p>
            <ul className="text-sm text-muted-foreground list-disc pl-5">
              <li>Pilot → Ölçeklendirme</li>
              <li>Gerekirse dashboard & yönetim ekranı</li>
            </ul>
          </div>
      ),
    },
    {
      id: 3,
      title: "İzleme, İyileştirme & Ölçekleme",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      body: (
          <div>
            <p className="mb-2 text-neutral-600 dark:text-neutral-300">KPI ile izleriz; modelleri ve iş kurallarını gerçek veriye göre iyileştiririz.</p>
            <ul className="text-sm text-muted-foreground list-disc pl-5">
              <li>Model izleme (drift detection)</li>
              <li>Departmanlara yayılım</li>
            </ul>
          </div>
      ),
    },
  ];

  // Mobil Grid için veriyi map ediyoruz
  const stepCardsForGrid = fourSteps.map(step => ({
    title: step.title,
    description: "",
    src: step.src,
    content: () => step.body // Body içeriğini fonksiyon olarak veriyoruz
  }));

  const scenarios = [
    {
      title: "Satış Kutusu Asistanı",
      problem: "Gelen e-postuların büyük bölümü tekrarlayan sorular içerir.",
      solution: "AI asistan maili sınıflar, CRM'den veri çeker, otomatik yanıt veya taslak üretir.",
    },
    {
      title: "Fatura Otomasyonu",
      problem: "Fatura verileri manuel giriliyor ve hatalar çıkıyor.",
      solution: "OCR + LLM ile alanlar tespit edilir; ERP'ye aktarım insan onayı ile gerçekleşir.",
    },
    {
      title: "CV Ön Eleme",
      problem: "İlan başına çok sayıda CV geliyor.",
      solution: "CV'ler otomatik puanlanır ve kısa liste oluşturulur.",
    },
  ];

  const testimonials = [
    { quote: "AI otomasyon ile yanıt sürelerimiz %70 azaldı", name: "A. Yılmaz", title: "Operasyon Müdürü" },
    { quote: "Fatura işleme maliyetimiz yarı yarıya düştü", name: "B. Kaya", title: "Finans Direktörü" },
    { quote: "HR süreçlerimiz çok daha hızlı ilerliyor", name: "C. Demir", title: "İK Yöneticisi" },
  ];

  const techBullets = [
    "LLM: metin anlama, özetleme, sınıflandırma ve karar destek",
    "Süreç orkestrasyonu: workflow motorları ve insan-onaylı adımlar",
    "RPA & script otomasyonu: eski sistemlerde bile otomasyon",
    "Güvenli entegrasyon: CRM, ERP, e-posta, WhatsApp vb.",
    "Güvenlik & yetkilendirme: loglama, maskeleme, KVKK uyumu",
  ];

  const roiBullets = [
    "%50–80’e varan süre tasarrufu",
    "Maliyet azalması ve daha az manuel çalışma",
    "Hata oranında ciddi düşüş",
    "Çalışanların daha stratejik işlere odaklanması",
    "Daha hızlı ve tutarlı müşteri deneyimi (7/24)",
  ];

  if (!mounted) return null; // Hydration hatasını önlemek için

  return (
      <>
        <PageHero
            title="AI Süreç Otomasyonu — MersaTech"
            description="Süreçlerinizi ölçeklenebilir, ölçülebilir ve kendini optimize eden AI destekli süreçlere dönüştürüyoruz."
            backgroundVariant="minimal"
        />

        {/* Bölüm 1: Problemler */}
        <Container sectionBg="transparent" className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <H2>Neden AI Süreç Otomasyonu?</H2>
            <Lead theme="muted" className="mt-4">
              Geleneksel iş süreçleri; Excel, e-posta trafiği ve manuel onay zincirleri arasında kaybolmuş ekipler demektir. İşler yürür; ama verimlilik, doğruluk ve ölçeklenebilirlik zarar görür.
            </Lead>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {problems.map((p, i) => (
                  <Card key={i} title={`Problem ${i + 1}`} description={p} index={i} />
              ))}
            </div>
          </div>
        </Container>

        {/* Bölüm 2: Hangi Süreçler - Burada zaten Grid kullanıyordun */}
        <Container sectionBg="slate" className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <H2>MersaTech ile Hangi Süreçleri Otomatize Edebilirsiniz?</H2>
              <Lead theme="muted" className="mt-4">Uçtan uca AI çözümleri: müşteri iletişiminden finans, İK ve IT operasyonlarına kadar.</Lead>
            </div>

            <ExpandableCardGrid
                cards={automateAreas.map((a) => ({
                  title: a.title,
                  description: a.description,
                  src: a.src,
                  content: () => (
                      <div className="space-y-2">
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          {a.features.map((f, idx) => (
                              <li key={idx}>{f}</li>
                          ))}
                        </ul>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm" className="px-4 py-2">Detaylı Bilgi</Button>
                          <Button size="sm" variant="outline" className="px-4 py-2">Pilot Talebi</Button>
                        </div>
                      </div>
                  ),
                }))}
            />
          </div>
        </Container>

        {/* Bölüm 3: Yolculuk (DÜZELTİLDİ) */}
        <Container sectionBg="transparent" className="py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <H2 className="mb-4">4 Adımda AI Otomasyon Yolculuğunuz</H2>
              <Lead theme="muted">Adım adım dijital dönüşüm yol haritası.</Lead>
            </div>

            {/* DESKTOP GÖRÜNÜMÜ (isMobile: false) -> CardStack */}
            {isMobile ? (
                <div className="flex justify-center items-center w-full h-[25rem] md:h-[30rem]">
                  <CardStack
                      items={fourSteps.map((s) => ({
                        id: s.id,
                        content: (
                            <div className="p-6 flex flex-col h-full justify-center">
                              <h3 className="font-bold text-2xl mb-4 text-neutral-800 dark:text-neutral-100">{s.title}</h3>
                              <div className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                {s.body}
                              </div>
                            </div>
                        ),
                      }))}
                  />
                </div>
            ) : (
                /* MOBİL GÖRÜNÜM (isMobile: true) -> ExpandableCardGrid */
                <div className="w-full">
                  <ExpandableCardGrid cards={stepCardsForGrid} />
                </div>
            )}
          </div>
        </Container>

        {/* Bölüm 4: Senaryolar */}
        <Container sectionBg="slate" className="py-20">
          <div className="max-w-7xl mx-auto text-center">
            <H2>Örnek Kullanım Senaryoları</H2>
            <Lead theme="muted" className="mt-4 mb-8">Gerçek dünya problemlerine yönelik çözüm örnekleri.</Lead>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scenarios.map((sc, idx) => (
                  <Card key={idx} title={sc.title} description={sc.problem} index={idx}>
                    <div className="mt-4 text-sm text-muted-foreground">
                      <p className="font-semibold text-primary">Çözüm</p>
                      <p>{sc.solution}</p>
                    </div>
                  </Card>
              ))}
            </div>
          </div>
        </Container>

        {/* Bölüm 5: Teknik yaklaşım */}
        <Container sectionBg="transparent" className="py-20">
          <div className="max-w-6xl mx-auto text-center">
            <H2>Teknik Yaklaşımımız</H2>
            <Lead theme="muted" className="mt-4 mb-8">Görünmeyen karmaşıklığı biz üstleniyoruz; siz sade bir deneyim yaşarsınız.</Lead>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techBullets.map((t, idx) => (
                  <Card key={idx} title={`Teknoloji ${idx + 1}`} description={t} index={idx} />
              ))}
            </div>
          </div>
        </Container>

        {/* Infinite Moving Cards */}
        <div className="py-10 overflow-hidden bg-slate-50 dark:bg-neutral-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <InfiniteMovingCards items={testimonials} speed="normal" />
          </div>
        </div>

        {/* Bölüm 6: ROI */}
        <Container sectionBg="slate" className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <H2>Yatırım Getirisi (ROI) ve İş Faydaları</H2>
            <Lead theme="muted" className="mt-4">AI Süreç Otomasyonu iyi tasarlandığında kısa sürede geri dönen bir yatırımdır.</Lead>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {roiBullets.map((r, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-background/50 p-3 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm sm:text-base">{r}</p>
                  </div>
              ))}
            </div>
          </div>
        </Container>

        {/* Bölüm 7: SSS + CTA */}
        <Container sectionBg="transparent" className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <H2>Sık Sorulan Sorular</H2>
            <div className="mt-8 space-y-4 text-left">
              <Card title="Çalışanlar işsiz mi kalacak?" description="Hayır. Amaç, tekrarlayan düşük katma değerli işleri almak ve çalışanları stratejik görevlere yönlendirmektir." index={0} />
              <Card title="Hangi büyüklükte şirketler için uygun?" description="KOBİ'den kurumsala kadar; küçük bir pilot ile başlayıp kademeli olarak ölçekleyebiliriz." index={1} />
              <Card title="Verilerimiz güvende mi?" description="Veri gizliliği ve güvenlik tasarımın merkezindedir; maskeleme ve loglama uygulanır." index={2} />
            </div>

            <div className="mt-12">
              <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/50">
                <div className="text-left max-w-md">
                  <h3 className="font-bold text-xl sm:text-2xl">Başlamaya Hazır mısınız?</h3>
                  <p className="text-sm text-muted-foreground mt-2">Küçük bir POC ile başlayalım; ilk 30–60 günde somut kazançları görün.</p>
                </div>

                <div className="flex gap-3">
                  <Button size="lg" className="px-6 py-4">Ücretsiz Keşif Talebi</Button>
                  <Button size="lg" variant="outline" className="px-6 py-4">POC / Demo</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>

      </>
  );
}