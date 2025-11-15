import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@components/providers/theme-provider";
import { PageTransitionProvider } from "@/components/providers/page-transition-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MERSA Technology - AI Conversational Flows & Chatbot Solutions",
  description:
    "Telegram, WhatsApp ve diğer platformlar için context-aware AI chatbot'lar ve özelleştirilmiş conversation flow'ları. Google Gemini, OpenAI entegrasyonu ve performans optimizasyonu.",
  keywords: [
    "AI chatbot",
    "conversational AI",
    "Telegram bot",
    "WhatsApp bot",
    "conversation flows",
    "Google Gemini",
    "AI integration",
    "prompt engineering",
    "custom AI flows",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <PageTransitionProvider>
            <main className="min-h-screen w-full overflow-x-hidden">
              {children}
            </main>
          </PageTransitionProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
