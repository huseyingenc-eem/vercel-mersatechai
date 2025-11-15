"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Check, Sparkles, ArrowRight, MessageSquare, Calendar } from "lucide-react";
import { Button, BackgroundBeams, Spotlight, Card } from "@/components/ui";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
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

  // Scroll with offset for header
  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      const headerOffset = 100; // Header yüksekliği + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Görüşme planla fonksiyonu
  const handleScheduleMeeting = () => {
    // Calendly veya başka bir randevu sistemi entegrasyonu
    window.open('https://calendly.com/mersa-tech', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Effects */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <BackgroundBeams className="absolute inset-0 z-0" />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 z-0" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw] z-0" fill="purple" />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-[100px] will-change-transform"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-cyan-500 via-blue-500 to-indigo-500 rounded-full blur-[120px] will-change-transform"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              24 Saat İçinde Geri Dönüş Garantisi
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6"
          >
            Projenizi Birlikte
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Hayata Geçirelim
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            İhtiyacınızı anlayalım ve size en uygun AI çözümünü birlikte belirleyelim.
            İlk görüşme tamamen ücretsizdir.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group text-lg px-8 py-6"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Hemen İletişime Geç
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleScheduleMeeting}
              className="border-border text-foreground hover:bg-accent text-lg px-8 py-6"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Görüşme Planla
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-0 opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bize Ulaşın
            </h2>
            <p className="text-lg text-muted-foreground">
              Size en uygun iletişim kanalını seçin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                icon={info.icon}
                title={info.title}
                description={info.description}
                index={index}
                variant="elevated"
              >
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-base font-semibold text-blue-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1 group"
                  >
                    {info.content}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <p className="text-base font-semibold text-foreground">{info.content}</p>
                )}
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes 2 columns */}
            <div id="contact-form" className="lg:col-span-2 scroll-mt-24">
              <Card
                icon={Send}
                title="Bize Mesaj Gönderin"
                description="Formu doldurun, 24 saat içinde size geri dönelim"
                variant="elevated"
                className="h-full"
              >
                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Adınız Soyadınız <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500/50"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-posta Adresiniz <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500/50"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Input */}
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
                        className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500/50"
                        placeholder="+90 XXX XXX XX XX"
                      />
                    </div>

                    {/* Subject Select */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Konu <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-500/50 appearance-none cursor-pointer"
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

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mesajınız <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all hover:border-blue-500/50"
                      placeholder="Projeniz hakkında bize bilgi verin..."
                    ></textarea>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-500 flex items-center gap-2"
                    >
                      <span className="font-medium">{errorMessage}</span>
                    </motion.div>
                  )}

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-green-500 flex items-center gap-2"
                    >
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
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

            <div className="lg:col-span-1 space-y-6">
              <Card
                icon={Sparkles}
                description="Size değer katacak avantajlarımız"
                title="Neden MERSA Technology?"
                variant="elevated"
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
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </Card>

              {/* Quick Stats Card */}
              <Card
                icon={Check}
                title="Başarı Metrikleri"
                description="Rakamlarla MERSA Technology"
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
                      <span className="text-lg font-bold text-blue-500">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section - Full Width */}
      <section className="relative w-full overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-0 opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl group-hover:blur-2xl transition-all duration-300 pointer-events-none" />

          {/* Map Container - Full Width */}
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
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

