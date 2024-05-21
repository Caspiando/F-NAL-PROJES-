import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Header from "@/components/Header";
import PFooter from "@/components/PFooter";
import { styled } from "styled-components";

const Container = styled.div`
  background: radial-gradient(
    ellipse farthest-corner at center,
    #bde5ed 0%,
    #0872a0 100%
  );
  height: 100vh; /* Sayfanın tamamını kaplar */
`;

export default function index() {
  return (
    <>
      <Container>
        <div><Header/></div>
        <div className="container mx-auto py-12 px-4 mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Hakkımızda</h1>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Merhaba! Caspy, online alışverişin güvenilir adresi olarak sizlere geniş ürün yelpazesi ve uygun fiyatlarla hizmet sunmaktadır. Kurucumuz Hazar Güçtekin önderliğinde, amacımız müşterilerimize en iyi alışveriş deneyimini yaşatmak ve ihtiyaçlarını karşılamaktır.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Misyonumuz</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Müşterilerimize kaliteli ürünler ve mükemmel müşteri hizmetleri sunarak, onların online alışveriş deneyimlerini keyifli hale getirmek.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Vizyonumuz</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Türkiye'nin ve dünyanın dört bir yanına hızlı ve güvenli teslimat sağlayarak, e-ticaret sektöründe lider bir marka olmak.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Değerlerimiz</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 leading-relaxed">
              <li className="mb-2">Müşteri Odaklılık: Müşterilerimizin ihtiyaç ve beklentilerine öncelik vererek en iyi hizmeti sunmak.</li>
              <li className="mb-2">Güvenilirlik: Ürünlerimizin kalitesine ve hizmetlerimizin güvenilirliğine önem vermek.</li>
              <li className="mb-2">İnovasyon: Sürekli gelişim ve yenilikçilik ile sektörde fark yaratmak.</li>
              <li className="mb-2">Sürdürülebilirlik: Çevreye duyarlı ve sürdürülebilir iş modelleri benimsemek.</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">İletişim</h2>
            <div className="flex items-center space-x-4 mb-6">
              <FaMapMarkerAlt className="text-xl text-blue-600" />
              <p className="text-gray-700">İstanbul, Türkiye</p>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <FaPhoneAlt className="text-xl text-blue-600" />
              <p className="text-gray-700">+90 (123) 456 7890</p>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <FaEnvelope className="text-xl text-blue-600" />
              <p className="text-gray-700">info@caspy.com</p>
            </div>
          </div>
        </div>
      </Container>
      <div><PFooter/></div>
    </>
  );
}
