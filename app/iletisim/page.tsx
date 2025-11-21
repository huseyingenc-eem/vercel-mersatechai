"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Check, Sparkles, ArrowRight, MessageSquare, Calendar } from "lucide-react";
import { Button, Card, H1, Lead, H2, Text } from "@/components/ui";
import {Container} from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { useMediaQuery } from "@/hooks/use-media-query";

const contactInfo = [
  {
    icon: Mail,
    title: "E-posta",
    content: "info@mersa.tech",
    link: "mailto:info@mersa.tech",
    description: "7/24 e-posta desteği"
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "+90 XXX XXX XX XX",
    link: "tel:+90XXXXXXXXXX",
    description: "Anlık görüşme"
  },
  {
    icon: MapPin,
    title: "Adres",
    content: "İstanbul, Türkiye",
    link: null,
    description: "Merkez ofisimiz"
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    content: "Pazartesi - Cuma, 09:00 - 18:00",
    link: null,
    description: "Esnek çalışma saatleri"
  }
];

// Use the shared PageHero component for the contact page


export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // API çağrısı simülasyonu
      const response = { ok: true, json: () => ({ message: "Success" }) }; // Gerçek çağrı yerine simülasyon

      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      const data: any = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Bir hata oluştu");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Bağlantı hatası. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScheduleMeeting = () => {
    window.open('https://calendly.com/mersa-tech', '_blank');
  };

  return (
    <div className="min-h-screen">
      
      {/* İstenen PageHero Componenti Kullanımı */}
      <PageHero
        sectionBg="gradient"
        badge={{ icon: <Sparkles className="w-4 h-4 text-primary" />, text: "24 Saat İçinde Geri Dönüş Garantisi" }}
        title={
          <>
            Projenizi Birlikte
            <br />
            <span className="text-gradient">Hayata Geçirelim</span>
          </>
        }
        description={"İhtiyacınızı anlayalım ve size en uygun AI çözümünü birlikte belirleyelim. İlk görüşme tamamen ücretsizdir."}
        backgroundVariant="gradient"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToForm}
            className="bg-gradient-primary-warm hover:brightness-110 text-white group text-lg px-8 py-6 glow-primary"
          >
            <MessageSquare className="mr-2 w-5 h-5" />
            Hemen İletişime Geç
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleScheduleMeeting}
            className="border-border text-foreground hover:bg-accent/10 hover:text-accent border-2 text-lg px-8 py-6"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Görüşme Planla
          </Button>
        </div>
      </PageHero>

      <Container sectionBg="white" className="py-20">
        <div className="text-center mb-16">
          <H2 animate>Bize Ulaşın</H2>
          <Lead theme="muted" animate animationDelay={0.2}>
            Size en uygun iletişim kanalını seçin
          </Lead>
        </div>

        <div className="mb-20">
          {isMobile ? (
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <Text as="h3" variant="p" className="font-semibold">{info.title}</Text>
                    <Text variant="small" theme="muted" className="mb-1">{info.description}</Text>
                    {info.link ? (
                      <a
                        href={info.link}
                        // Link rengi primary yapıldı
                        className="text-base font-medium text-primary hover:text-primary-hover hover:underline"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <Text className="text-base font-medium">{info.content}</Text>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  icon={info.icon}
                  title={info.title}
                  description={info.description}
                  index={index}
                  variant="elevated"
                  alignment="left"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      // Link rengi primary yapıldı
                      className="text-base font-semibold text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1 group"
                    >
                      {info.content}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Text className="text-base font-semibold">{info.content}</Text>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>

        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-3 gap-8 scroll-mt-24">
          <div className="lg:col-span-2">
            <Card
              icon={Send}
              title="Bize Mesaj Gönderin"
              description="Formu doldurun, 24 saat içinde size geri dönelim"
              variant="elevated"
              className="h-full"
              alignment="left"
            >
              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Adınız Soyadınız <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all hover:border-primary/50"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-posta Adresiniz <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all hover:border-primary/50"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all hover:border-primary/50"
                      placeholder="+90 XXX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Konu <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all hover:border-primary/50 appearance-none cursor-pointer"
                    >
                      <option value="">Konu Seçiniz</option>
                      <option value="AI Otomasyon">AI Otomasyon</option>
                      <option value="Chatbot Geliştirme">Chatbot Geliştirme</option>
                      <option value="Satış ve Müşteri Kazanımı">Satış ve Müşteri Kazanımı</option>
                      <option value="Müşteri Destek Otomasyonu">Müşteri Destek Otomasyonu</option>
                      <option value="Özel İş Akışları">Özel İş Akışları</option>
                      <option value="Fiyat Teklifi">Fiyat Teklifi</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mesajınız <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all hover:border-primary/50"
                    placeholder="Projeniz hakkında bize bilgi verin..."
                  ></textarea>
                </div>
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    // Hata renkleri destructive değişkenleri ile güncellendi
                    className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 text-destructive flex items-center gap-2"
                  >
                    <span className="font-medium">{errorMessage}</span>
                  </motion.div>
                )}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    // Başarı renkleri success değişkenleri ile güncellendi
                    className="bg-success/10 border border-success/20 rounded-xl p-4 text-success flex items-center gap-2"
                  >
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</span>
                  </motion.div>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  // Submit Buton: Primary gradient kullanıldı
                  className="w-full px-8 py-6 text-lg font-semibold bg-gradient-primary-warm hover:brightness-110 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed group glow-primary"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Gönderiliyor...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Mesajı Gönder
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  🔒 Verileriniz güvende • KVKK/GDPR uyumlu
                </p>
              </form>
            </Card>
          </div>
          <div className="lg:col-span-1 space-y-8">
            <Card
              icon={Sparkles}
              description="Size değer katacak avantajlarımız"
              title="Neden MERSA Technology?"
              variant="elevated"
              alignment="left"
            >
              <ul className="space-y-3 mt-4">
                {[
                  "Ücretsiz ilk görüşme ve ihtiyaç analizi",
                  "24 saat içinde geri dönüş garantisi",
                  "Size özel çözüm önerileri",
                  "Şeffaf fiyatlandırma",
                  "7/24 teknik destek",
                  "ROI odaklı yaklaşım"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 group"
                  >
                    <div 
                        // Checkmark gradienti primary renklerine güncellendi
                        className="w-5 h-5 rounded-full bg-gradient-primary-warm flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </Card>
            <Card
              icon={Check}
              title="Başarı Metrikleri"
              description="Rakamlarla MERSA Technology"
              variant="elevated"
              alignment="left"
            >
              <div className="space-y-4 mt-4">
                {[
                  { label: "Ortalama Yanıt Süresi", value: "< 1 saat" },
                  { label: "Müşteri Memnuniyeti", value: "%98" },
                  { label: "Proje Başarı Oranı", value: "%100" },
                  { label: "Aktif Projeler", value: "50+" }
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-border/50 last:border-0">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    {/* Metrik değeri primary rengine güncellendi */}
                    <span className="text-lg font-bold text-primary">{stat.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>

      {/* Harita Bölümü */}
      <section className="relative w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          // Harita Container'a glow-primary eklenerek tema uyumu artırıldı.
          className="relative group glow-primary" 
        >
          {/* Harita Glow: Primary ve Accent (Tamamlayıcı Mavi) renklerine güncellendi */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl group-hover:blur-2xl transition-all duration-300 pointer-events-none" />
          <div className="relative bg-card/80 dark:bg-card/50 backdrop-blur-xl border-y border-border overflow-hidden shadow-2xl">
            <div className="relative w-full h-[500px] md:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2469669924755!2d28.977609315443973!3d41.01542407930096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9bd6570f4e1%3A0xe8c5b5e4e2b3e3e3!2zxLBzdGFuYnVsLCBUw7xya2l5ZQ!5e0!3m2!1str!2str!4v1629789012345!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                // Üzerine gelinmediğinde Grayscale, gelindiğinde renkli (hover:grayscale-0)
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}