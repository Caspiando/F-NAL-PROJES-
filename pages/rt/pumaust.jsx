import { useState } from "react";
import { Button } from "@mui/material";
import { Add, Remove, LocalShipping } from "@mui/icons-material";
import Header from "@/components/Header";
import CokSatanlar from "@/components/CokSatanlar";
import PFooter from "@/components/PFooter";

export default function Detay() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("S"); // Beden seçeneği
  const price = 850;
  const imgUrl = "/pumaüst.png";

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleSizeChange = (selectedSize) => {
    setSize(selectedSize);
  };


  const handleAddToCart = () => {
    const product = {
      name: "Puma Team Rise Poly Erkek Eşofman Üst 657392-06",
      quantity,
      size,
      price,
      imgUrl,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingProductIndex = cart.findIndex(
      (item) =>
        item.name === product.name &&
        item.size === size
    );

    if (existingProductIndex !== -1) {
      // Ürün zaten sepette varsa, miktarını güncelle
      cart[existingProductIndex].quantity += quantity;
    } else {
      // Aksi takdirde, ürünü sepete ekle
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const Giyim = [
    {
      ad: "Nike Eşofman Üst",
      aciklama: "",
      puan: 5,
      fiyat: 1360,
      indirim: 200,
      ImgUrl: "/nikeust.png",
      rt: "/rt/nikeust",
    },
    {
      ad: "Nike Eşofman Alt",
      aciklama: "",
      puan: 5,
      fiyat: 1200,
      indirim: 100,
      ImgUrl: "/nikealt.png",
      rt: "/rt/nikealt",
    },
    {
      ad: "Nike Spor Ayakkabı",
      aciklama: "",
      puan: 5,
      fiyat: 1000,
      indirim: 300,
      ImgUrl: "/nike-ayakkabı2.png",
      rt: "/rt/nikeayk",
    },
    {
      ad: "Puma Eşofman Üst",
      aciklama: "",
      puan: 5,
      fiyat: 900,
      indirim: 50,
      ImgUrl: "/pumaüst.png",
      rt: "/rt/pumaust",
    },
    {
      ad: "Puma Eşofman Alt",
      aciklama: "",
      puan: 5,
      fiyat: 1400,
      indirim: 300,
      ImgUrl: "/pumaalt.jpg",
      rt: "/rt/pumaalt",
    },
    {
      ad: "Puma Spor Ayakkabı",
      aciklama: "",
      puan: 5,
      fiyat: 100,
      indirim: 300,
      ImgUrl: "/pumaayk.png",
      rt: "/rt/pumaayk",
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
              <img
                src={imgUrl}
                alt="Puma Eşofman Üst"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-1/2 p-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Puma Team Rise Poly Erkek Eşofman Üst 657392-06
              </h1>
              <p className="mb-8 text-lg text-gray-700 ">
              Normal kalıp
Dik yaka ve boydan boya fermuar
Puma form şeritli file kontrast eklentisi
Göğüs üzerinde kontrast renklerde V şeklinde sicim
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
              <span className="mr-2">Beden:</span>
              <div className="flex space-x-2">
                {["S", "M", "L", "XL"].map((sizeOption) => (
                  <Button
                    key={sizeOption}
                    variant={size === sizeOption ? "contained" : "outlined"}
                    color="primary"
                    size="small"
                    onClick={() => handleSizeChange(sizeOption)}
                    style={{
                      backgroundColor: size === sizeOption ? 'blue' : 'white',
                      color: size === sizeOption ? 'white' : 'black',
                    }}
                  >
                    {sizeOption}
                  </Button>
                ))}
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
          <CokSatanlar products={Giyim} />
        </div>
      </div>
      <div><PFooter/></div>
    </>
  );
}

