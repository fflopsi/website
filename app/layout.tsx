import DevWarning from '@/components/devWarning';
import Footer from '@/components/footer';
import NavBar from '@/components/navBar';
import Title from '@/components/title';
import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import './res/globals.scss';
import './res/navBar.scss';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Florian Frauenfelder',
  description: "Florian's personal website",
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
      </body>
    </html>
  );
}
