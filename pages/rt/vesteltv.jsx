import { useState } from "react";
import { Button } from "@mui/material";
import { Add, Remove, LocalShipping } from "@mui/icons-material";
import Header from "@/components/Header";
import CokSatanlar from"@/components/CokSatanlar"
import PFooter from "@/components/PFooter";

export default function Detay() {
  const [quantity, setQuantity] = useState(1);
  const price = 30400;

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex(
      (item) => item.name === "Vestel 70U9600 70 177 Ekran Uydu Alıcılı 4K Ultra HD Smart LED TV"
    );

    if (existingProductIndex !== -1) {
      // If the product exists in the cart, update its quantity
      cart[existingProductIndex].quantity += quantity;
    } else {
      // If the product doesn't exist, add it to the cart
      cart.push({
        name: "Vestel 70U9600 70 177 Ekran Uydu Alıcılı 4K Ultra HD Smart LED TV",
        quantity,
        price,
        imgUrl: "/vestel-tv.jpg",
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const BeyazEsya = [
    {
      ad: "Vestel Televizyon",
      aciklama: "",
      puan: 3,
      fiyat: 31200,
      indirim: 800,
      ImgUrl: "/vestel-tv.jpg",
      rt: "/rt/vesteltv",
    },
    {
      ad: "Vestel Bulaşık Makinesi",
      aciklama: "",
      puan: 5,
      fiyat: 15160,
      indirim: 450,
      ImgUrl: "/vestel-bulasık.png",
      rt: "/rt/vestelblsk",
    },
    {
      ad: "Vestel Çamaşır Makinesi",
      aciklama: "",
      puan: 5,
      fiyat: 19160,
      indirim: 1249,
      ImgUrl: "/vestel-camasir.png",
      rt: "/rt/vestelcmsr",
    },
    {
      ad: "Arçelik Televizyon",
      aciklama: "",
      puan: 1,
      fiyat: 29400,
      indirim: 2500,
      ImgUrl: "/arcelik-tv.png",
      rt: "/rt/arceliktv",
    },
    {
      ad: "Arçelik Çamaşır Makinesi",
      aciklama: "",
      puan: 5,
      fiyat: 17200,
      indirim: 2300,
      ImgUrl: "/arcelik-camasir.png",
      rt: "/rt/arcelikcmsr",
    },
    {
      ad: "Arçelik Bulaşık Makinesi",
      aciklama: "",
      puan: 1,
      fiyat: 15400,
      indirim: 2500,
      ImgUrl: "/arcelik-bulasik.png",
      rt: "/rt/arcelikblsk",
    },
  ];

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex  flex-col justify-center items-center mt-5">
        <div className="max-w-screen-lg bg-white rounded-lg p-6 shadow-xl flex">
          <div className="w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src="/vestel-tv.jpg"
                alt="Vestel TV"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-1/2 p-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Vestel 70U9600 70" 177 Ekran Uydu Alıcılı 4K Ultra HD Smart LED TV
              </h1>
              <p className="mb-8 text-lg text-gray-700">
              Netflix, Youtube, Amazon Prime, Spotify, Ssport, YoutubeKids ve çok daha fazlası Vestel Smart TV'lerde! Birbirinden heyecanlı film, dizi, belgesel ve daha bir çok içerikle saatlerin nasıl geçtiğini anlamayacaksınız!
              </p>
            </div>
            <div className="flex justify-center items-center mb-6">
              <span className="text-gray-800 mr-2">Değerlendirme:</span>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.5 2.9 1.1-6.4-4.6-4.5 6.4-0.9 2.9-5.9 2.9 5.9 6.4 0.9-4.6 4.5 1.1 6.4z" />
                </svg>
                <span className="text-gray-800 font-semibold">3</span>
              </div>
            </div>
            <div className="flex justify-center items-center mb-6">
              <span className="text-gray-800 mr-2">Adet:</span>
              <Button
                onClick={handleDecrement}
                variant="contained"
                color="secondary"
                size="small"
                style={{ backgroundColor: 'black', color: 'blue' }}
              >
                <Remove />
              </Button>
              <span className="bg-gray-200 px-3 py-1">{quantity}</span>
              <Button
                onClick={handleIncrement}
                variant="contained"
                color="secondary"
                size="small"
                style={{ backgroundColor: 'black', color: 'blue' }}
              >
                <Add />
              </Button>
            </div>
            <div className="flex justify-center items-center mb-6">
              <span className="text-gray-800 text-xl font-semibold">
                Fiyat: {price} TL
              </span>
            </div>
            <div className="flex justify-center">
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleAddToCart}
                sx={{ backgroundColor: 'black', color: 'blue', '&:hover': { backgroundColor: 'black', color: 'blue' } }}
              >
                Sepete Ekle
              </Button>
            </div>
          </div>
          <div className="w-1/2 p-6 border-l border-gray-200">
            <div className="flex flex-col justify-center items-center mb-6">
              <span className="text-xl font-semibold">Satıcı: Caspy</span>
              <div className="flex items-center mt-2">
                <span className="text-xl font-semibold mr-2">Puanlama:</span>
                <span className="text-xl font-semibold text-yellow-400">★★★★★</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-6">
              <span className="text-xl font-semibold">Teslimat:</span>
              <div className="flex items-center mt-2">
                <LocalShipping className="text-blue-500 mr-2" />
                <span className="text-xl font-semibold">CaspyJet</span>
              </div>
              <div className="flex items-center mt-2">
                <LocalShipping className="text-blue-500 mr-5" />
                <span className="text-xl text-black">En geç 3 gün içerisinde kargonuz elinizde</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
         <span className="text-2xl text-red-700 ">İlginizi çekebilecek ürünler</span>
        </div>
        <div className="mt-5">
          <CokSatanlar products={BeyazEsya} />
        </div>
      </div>
      <div><PFooter/></div>
    </>
  );
}
