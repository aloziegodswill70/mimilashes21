import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import MobileFooterBar from "../components/MobileFooterBar";

export const metadata = {
  title: "MIMIlashes Kigali | Eyelash Extensions",
  description:
    "Luxury eyelash extensions in Kigali. Classic, Hybrid, Volume, and Mega Volume lashes. Follow us on Instagram and TikTok @mimi_lashes21",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        
        {children}

        <Footer />

        {/* Floating WhatsApp Button */}
        <FloatingWhatsapp />

        {/* Mobile Footer Bar (for phones only) */}
        <MobileFooterBar />
      </body>
    </html>
  );
}
