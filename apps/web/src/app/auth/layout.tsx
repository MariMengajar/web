// components
import Navbar from '@mentora/ui/Navbars/AuthNavbar';
import FooterSmall from '@mentora/ui/Footers/FooterSmall';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
