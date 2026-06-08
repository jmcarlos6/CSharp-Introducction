import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ title, subtitle, footerName, children }) {
  return (
    <>
      <header>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </header>
      <Navbar />
      <main>{children}</main>
      <Footer moduleName={footerName} />
    </>
  );
}
