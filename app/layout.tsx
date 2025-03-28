import DevWarning from '@/components/devWarning';
import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import './res/globals.css';
import './res/navBar.css';
import './res/var.css';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Florian Frauenfelder',
  description: 'Florian\'s personal website',
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
        {children}
      </body>
    </html>
  );
}
