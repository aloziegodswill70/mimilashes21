import { FaInstagram, FaTiktok, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-tealDark text-white py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Brand Info */}
        <div>
          <h2 className="text-lg font-bold">MIMIlashes</h2>
          <p className="text-sm mt-2">
            Luxury eyelash extensions in Kigali, Rwanda.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>📍 Unify House, Kigali, Rwanda</p>
          <p>📞 +250784658639</p>
          <p>🕒 10:00 AM – 8:00 PM</p>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 text-goldLight text-2xl">

            <a href="https://instagram.com/mimi_lashes21?igsh=YTYzbG4yZnRtcm4%3D&utm_source=qr"
               target="_blank"
               className="hover:text-white transition">
              <FaInstagram />
            </a>

            <a href="https://tiktok.com/@mimi_lashes21?_r=1&_t=ZM-91zmj4uq3Dv"
               target="_blank"
               className="hover:text-white transition">
              <FaTiktok />
            </a>

            <a href="https://wa.me/250784658639"
               target="_blank"
               className="hover:text-white transition">
              <FaWhatsapp />
            </a>

            <a href="https://youtube.com"
               target="_blank"
               className="hover:text-white transition">
              <FaYoutube />
            </a>

            <a href="https://facebook.com/share/14TdJrEKgPH/?mibextid=wwXlfr"
               target="_blank"
               className="hover:text-white transition">
              <FaFacebook />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm mt-6 text-goldLight">
        © 2025 MIMIlashes – All Rights Reserved
      </div>
    </footer>
  );
}
