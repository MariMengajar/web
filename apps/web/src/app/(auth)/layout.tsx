import '../../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// components
import Navbar from '@mentora/ui/Navbars/AuthNavbar';
import FooterSmall from '@mentora/ui/Footers/FooterSmall';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>
          <section className='flex items-center w-full h-full py-40 min-h-screen'>
            <div
              className='absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full'
              style={{
                backgroundImage: "url('/img/register_bg_2.png')",
              }}
            />
            {children}
          </section>
        </main>
        <FooterSmall absolute />
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Mentora',
  description: 'Welcome to Next.js',
};
