import type { Metadata } from 'next';
import './globals.css';
import { ClientWrapper, Footer, Header } from '@/components';

export const metadata: Metadata = {
  title: 'Shop App',
  description: 'A modern e-commerce application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
        </ClientWrapper>
      </body>
    </html>
  );
}
