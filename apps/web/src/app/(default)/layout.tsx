import '../../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// components
import IndexNavbar from '@mentora/ui/Navbars/IndexNavbar';
import Footer from '@mentora/ui/Footers/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <IndexNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Mentora',
  description: 'Welcome to Next.js',
};
