import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { InteractiveUI } from "@/components/InteractiveUI";

const fontHeading = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const fontBody = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://italobotelho.vercel.app/"),
  title: "Ítalo Fraga Botelho | Data Science & AI Portfolio",
  description: "Portfolio de Ítalo Fraga Botelho. Estudante de Ciência de Dados e Inteligência Artificial na PUC-Campinas. Especialista em modelagem de dados, algoritmos de IA e desenvolvimento web moderno.",
  keywords: ["Data Science", "Artificial Intelligence", "Python", "SQL", "Desenvolvedor", "Machine Learning", "Portfolio"],
  authors: [{ name: "Ítalo Fraga Botelho" }],
  openGraph: {
    title: "Ítalo Fraga Botelho | Portfolio",
    description: "Data Science and Artificial Intelligence student. Specialist in AI, exploratory data analysis, and data modeling.",
    url: "https://italobotelho.vercel.app/",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fontHeading.variable} ${fontBody.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-black text-white" suppressHydrationWarning>
        <LanguageProvider>
          <InteractiveUI />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
