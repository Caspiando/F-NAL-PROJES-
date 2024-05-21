import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaHatCowboy } from "react-icons/fa";

export default function PFooter() {
  return (
    <footer className="bg-black w-full text-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold mb-4">Bize Ulaşın</h2>
          <p className="mb-2">İstanbul, Türkiye</p>
          <p>caspydestek@gmail.com</p>
        </div>
        <span className="text-gray-400 flex items-center">
          <FaHatCowboy className="mr-1" />
          Kurucu: Hazar Güçtekin
          <FaHatCowboy className="ml-1" />
        </span>
        <div className="flex items-center space-x-4 justify-center text-center">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaFacebookF className="text-2xl" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/whyhazardoelric/"
            className="text-white hover:text-gray-300 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a
            href="https://web.whatsapp.com/send?phone=905054205380&text=Merhaba Caspy sitesinden bir müşteriyim destek almak istiyorum."
            className="text-white hover:text-gray-300 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 px-6 text-sm text-center">
        <p>Tüm hakları saklıdır. &copy; 2024 Caspy</p>
        <p>Tüketici Hakları Bildirimi: Bu sitede sunulan ürünlerle ilgili tüm haklar saklıdır.</p>
      </div>
    </footer>
  );
}
