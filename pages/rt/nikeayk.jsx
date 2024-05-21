import { useState } from "react";
import { Button } from "@mui/material";
import { Add, Remove, LocalShipping } from "@mui/icons-material";
import Header from "@/components/Header";
import CokSatanlar from "@/components/CokSatanlar";
import PFooter from "@/components/PFooter";

export default function Detay() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(36); // Numara seçeneği
  const price = 700;
  const imgUrl = "/nike-ayakkabı2.png";

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleSizeChange = (event) => {
    setSize(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    const product = {
      name: "Nike DJ1196-100 Defyallday Unisex Casual Sports Shoes",
      size,
      price,
      imgUrl,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(
      (item) =>
        item.name === product.name &&
        item.size === product.size
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      // If the product is not in the cart, add it as a new item
      product.quantity = quantity;
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
                alt="Nike Ayakkabı"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-1/2 p-6">
            <div className="text-center">
              <h1 className="mb-8 text-3xl font-bold text-gray-900 ">
                Nike DJ1196-100 Defyallday Unisex Casual Sports Shoes
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                
Nike Defy All Day  Ayakkabı.

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
              <span className="mr-2">Numara:</span>
              <div className="flex space-x-2">
                {[36, 37, 38, 39, 40].map((num) => (
                  <Button
                    key={num}
                    variant={size === num ? "contained" : "outlined"}
                    color="primary"
                    onClick={() => setSize(num)}
                    sx={{ minWidth: 40 }}
                  >
                    {num}
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
          <span className="text-2xl text-red-700">İlginizi çekebilecek ürünler</span>
        </div>
        <div className="mt-5">
          <CokSatanlar products={Giyim} />
        </div>
      </div>
      <div><PFooter /></div>
    </>
  );
}
