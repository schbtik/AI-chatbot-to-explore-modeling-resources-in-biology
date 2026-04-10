import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// В версии 3.5.0 импортируем просто UserProvider
import { UserProvider } from '@auth0/nextjs-auth0/client'; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VCell AI Assistant",
  description: "AI-chatbot for biology modeling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      {}
      <body>
        <UserProvider>
          <div className="min-h-full flex flex-col">
            {children}
          </div>
        </UserProvider>
      </body>
    </html>
  );
}