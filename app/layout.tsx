import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { SiteFooter} from "@/components/layout/site-footer";
import { ThemeProvider } from "@components/providers/theme-provider";
import { PageTransitionProvider } from "@/components/providers/page-transition-provider";
import { SectionProvider } from "@/context/section-context";
import { Footer } from "@/components/layout/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MERSA Tech | AI Otomasyon Çözümleri",
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
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fd8f52" },
    { media: "(prefers-color-scheme: dark)", color: "#fd8f52" },
  ],
  appleWebApp: {
    title: "MERSA Tech",
    statusBarStyle: "black-translucent",
  },
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
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SectionProvider>
            <Navbar />
            <PageTransitionProvider>
              <main className="min-h-screen w-full overflow-x-hidden">
                {children}
              </main>
              <SiteFooter />
            </PageTransitionProvider>
          </SectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
