import DevWarning from '@/components/devWarning';
import Footer from '@/components/footer';
import NavBar from '@/components/navBar';
import Title from '@/components/title';
import '@/style/globals.scss';
import '@/style/navBar.scss';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Florian Frauenfelder',
  description: "Florian Frauenfelder's personal website",
  authors: [{ name: 'Florian Frauenfelder' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${sourceCodePro.className} antialiased`}>
        <DevWarning />
        <header>
          <Title />
        </header>
        <NavBar />
        <div id='content'>{children}</div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
