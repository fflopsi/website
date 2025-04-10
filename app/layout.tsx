import '@/components/css/globals.scss';
import '@/components/css/navBar.scss';
import DevWarning from '@/components/devWarning';
import Footer from '@/components/footer';
import NavBar from '@/components/navBar';
import { getRouteMetadata } from '@/components/routing';
import Title from '@/components/title';
import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] });

export const metadata = getRouteMetadata('/');

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
