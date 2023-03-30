import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'Mentora',
  description: 'Welcome to Next.js',
};
