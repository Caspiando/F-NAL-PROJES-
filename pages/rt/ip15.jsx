import { useState } from "react";
import { Button } from "@mui/material";
import { Add, Remove, LocalShipping } from "@mui/icons-material";
import Header from "@/components/Header";
import CokSatanlar from"@/components/CokSatanlar"
import PFooter from "@/components/PFooter";

export default function Detay() {
  const [quantity, setQuantity] = useState(1);
  const [storage, setStorage] = useState("128gb"); // Depolama seçeneği
  const price = 46650;

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleStorageChange = (selectedStorage) => {
    setStorage(selectedStorage);
  };

  const handleAddToCart = () => {
    const product = {
      name: "iPhone 15 Pro Plus 128 GB",
      quantity: quantity,
      storage,
      price,
      imgUrl: "/15pro.jpg",
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex((item) => item.name === product.name && item.storage === storage); // Depolama miktarı kontrolü eklendi
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const Telefon = [
    {
      id: 1,
      ad: "Iphone 15 Pro Plus",
      aciklama: "128 GB iPhone 15 Pro",
      puan: 5,
      fiyat: 49400,
      indirim:2750,
      ImgUrl: "/15pro.jpg",
      rt: "/rt/ip15",
    },
    {
      id: 2,
      ad: "Iphone 14 Pro Plus",
      aciklama: "128 GB iPhone 14 Pro",
      puan: 4,
      fiyat: 37000,
      ImgUrl: "/14pro.jpg",
      rt: "/rt/ip14",
      indirim:1999,
    },
    {
      id: 3,
      ad: "Iphone 13 Pro Plus",
      aciklama: "128 GB iPhone 13 Pro",
      puan: 5,
      fiyat: 40000,
      ImgUrl: "/13pro.jpg",
      rt: "/rt/ip13",
      indirim:1500,
    },
    {
      ad: "Xiaomi Note 13 Plus",
      aciklama: "256 GB  ",
      puan: 5,
      fiyat: 28900,
      indirim: 2750,
      ImgUrl: "/xiaomi-note13plus.jpg",
      rt: "/rt/xia13plus",
    },
    {
      ad: "Xiaomi Redmi 12 Plus",
      aciklama: "256 GB",
      puan: 5,
      fiyat: 15400,
      indirim: 1760,
      ImgUrl: "/xiaomi-redmi12.jpg",
      rt: "/rt/xia12",
    },
    {
      ad: "Xiaomi Note 11 Plus",
      aciklama: "256 GB ",
      puan: 5,
      fiyat: 9700,
      indirim: 1300,
      ImgUrl: "/xiaomi-note11pro.png",
      rt: "/rt/xia11",
    },
  ];

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="max-w-screen-lg bg-white rounded-lg p-6 shadow-xl flex">
          <div className="w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <img src="/15pro.jpg" alt="iPhone 15" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="w-1/2 p-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">IPHONE 15 PRO PLUS</h1>
              <p className=" mb-8 text-lg text-gray-700">
                TİTANYUMDAN YARATILDI iPhone 15 Pro Plus, uzay endüstrisi standartlarında güçlü ve hafif titanyum tasarıma, dokulu mat cam arka yüzeye ve tüm akıllı telefon camlarından daha sağlam olan Ceramic Shield ön yüzeye sahip. Üstelik suya, sıçramalara ve toza dayanıklı.
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
                <span className="text-gray-800 font-semibold">5</span>
              </div>
            </div>
            <div className="flex justify-center items-center mb-6">
              <span className="text-gray-800 mr-2">Adet:</span>
              <Button 
                sx={{ backgroundColor: 'black', color: 'blue', "&:hover": { backgroundColor: 'black', color: 'blue' } }} // Add hover styles
                onClick={handleDecrement} 
                variant="contained" 
                color="secondary" 
                size="small"
              >
                <Remove />
              </Button>
              <span className="bg-gray-200 px-3 py-1">{quantity}</span>
              <Button 
                sx={{ backgroundColor: 'black', color: 'blue', "&:hover": { backgroundColor: 'black', color: 'blue' } }} // Add hover styles
                onClick={handleIncrement} 
                variant="contained" 
                color="secondary" 
                size="small"
              >
                <Add />
              </Button>
            </div>
            <div className="flex flex-col justify-center items-center mb-6">
              <div className="flex items-center">
                <span className="mr-2">Depolama:</span>
                <div className="flex">
                  <div className={`border border-gray-300 rounded-md px-2 py-1 mr-2 cursor-pointer ${storage === "128gb" && "bg-gray-200"}`} onClick={() => handleStorageChange("128gb")}>128GB</div>
                  
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mb-6">
              <span className="text-gray-800 text-xl font-semibold">Fiyat: {price} TL</span>
            </div>
            <div className="flex justify-center">
              <Button 
                sx={{ backgroundColor: 'black', color:"blue", "&:hover": { backgroundColor: 'black', color: 'blue' } }} // Add hover styles
                variant="contained" 
                color="primary" 
                size="large" 
                onClick={handleAddToCart}
              >
                Sepete Ekle
              </Button>
            </div>
          </div>
          {/* Sağ taraftaki satıcı ve teslimat bilgileri */}
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
          <CokSatanlar products={Telefon} />
        </div>
      </div>
      <div><PFooter/></div>
    </>
  );
}
