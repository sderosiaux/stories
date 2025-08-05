import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kafka Self-Service, Without the Kafkaesque | Conduktor",
  description: "An interactive story about how Conduktor's Self-Service product makes Kafka accessible to everyone - safely, smartly, and with style. Experience the transformation from chaos to zen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
