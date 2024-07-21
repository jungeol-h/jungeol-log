// src/app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import BlogLayout from "@/components/layout/BlogLayout";

export const metadata: Metadata = {
  title: {
    default: "준걸로그",
    template: "%s | 준걸로그",
  },
  description: "주니어 PM이 성장하며 얻은 모든 것을 기록합니다",
  openGraph: {
    title: "준걸로그",
    description: "주니어 PM이 성장하며 얻은 모든 것을 기록합니다",
    url: "https://blog.jungeol.life",
    siteName: "준걸로그",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "준걸로그",
    card: "summary_large_image",
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BlogLayout>{children}</BlogLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
