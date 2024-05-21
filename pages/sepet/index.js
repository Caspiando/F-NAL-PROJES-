import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Button, IconButton, Snackbar, Alert, TextField } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import PFooter from "@/components/PFooter";
import Link from "next/link";

export default function Index() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [invalidCoupon, setInvalidCoupon] = useState(false);

  const discountCoupon = "HAZARDO15";
  

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calculateTotalPrice(storedCart);
  }, []);

  const calculateTotalPrice = (cartItems, discountApplied = false) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = discountApplied ? total * 0.15 : 0; // 15% discount if applied
    const discountedTotal = total - discount;
    setTotalPrice(discountedTotal);
  };

  const handleCompleteOrder = () => {
    if (cart.length === 0) {
      setCartEmpty(true);
    } else {
      localStorage.removeItem("cart");
      setCart([]);
      setTotalPrice(0);
      setDiscountCode('');
      setCouponApplied(false);
      setOrderCompleted(true);
    }
  };

  const handleDeleteItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart, couponApplied);
  };

  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart, couponApplied);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      calculateTotalPrice(updatedCart, couponApplied);
    }
  };

  const handleProductClick = (id) => {
    window.location.href = `/product/${id}`;
  };

  const handleApplyDiscount = () => {
    if (discountCode.toUpperCase() === discountCoupon) {
      setCouponApplied(true);
      setInvalidCoupon(false);
      calculateTotalPrice(cart, true);
    } else {
      setInvalidCoupon(true);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?shopping')" }}>
        <div className="bg-black bg-opacity-50 flex-grow">
          <Header />
          <div className="flex-grow flex justify-center items-start mt-5">
            <div className="w-2/3 p-4 bg-white bg-opacity-90 rounded-lg shadow-lg backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Sepetiniz</h2>
              {cart.length === 0 ? (
                <p className="text-lg text-gray-600">Sepetiniz boş.</p>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="border border-gray-300 rounded-lg p-4 mb-4 flex items-center hover:shadow-md transition-shadow bg-white">
                    <Link href={`/rt/${item.link}`}>
                      <div className="transition-transform transform hover:scale-105 cursor-pointer">
                        <img src={item.imgUrl} alt={item.name} className="w-32 h-32 object-cover rounded-lg mr-4" />
                      </div>
                    </Link>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold cursor-pointer text-gray-800" onClick={() => handleProductClick(item.id)}>
                        {item.name}
                      </h3>
                      {item.storage && (
                        <p className="text-gray-500">Boyut: {item.storage}</p>
                      )}
                      {item.size && (
                        <p className="text-gray-500">Beden: {item.size}</p>
                      )}
                      <div className="flex items-center my-2">
                        <p className="mr-2 text-gray-700">Adet: {item.quantity}</p>
                        <IconButton onClick={() => handleDecrement(index)} color="black" size="small">
                          <Remove />
                        </IconButton>
                        <IconButton onClick={() => handleIncrement(index)} color="info" size="small">
                          <Add />
                        </IconButton>
                      </div>
                      <p className="text-lg font-semibold text-gray-800">Fiyat: {item.price * item.quantity} TL</p>
                      <Button variant="outlined" color="error" startIcon={<Delete />} onClick={() => handleDeleteItem(index)} style={{ color: 'red' }}>
                        Ürünü Sil
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="w-1/3 p-4 bg-gray-100 bg-opacity-90 rounded-lg shadow-lg ml-6 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Sepet Özeti</h2>
              <p className="text-lg mb-4 text-gray-700">Toplam Fiyat: <span className="font-semibold">{totalPrice} TL</span></p>
              <div className="mt-5 mb-5 flex gap-x-3">
                <TextField 
                  id="outlined-basic" 
                  label="İNDİRİM KODUNU YAZIN" 
                  variant="outlined" 
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
                <Button variant="contained" onClick={handleApplyDiscount} style={{ backgroundColor: 'black', color: 'blue', fontWeight: 'bold' }}>AKTİF ET</Button>
              </div>
              {couponApplied && <p className="text-green-500">İndirim kodu uygulandı!</p>}
              {invalidCoupon && <p className="text-red-500">Geçersiz indirim kodu!</p>}
              <Button
                variant="contained"
                size="large"
                onClick={handleCompleteOrder}
                className="w-full transition-transform transform hover:scale-105"
                style={{ backgroundColor: 'black', color: 'blue', fontWeight: 'bold' }}
              >
                Alışverişi Tamamla
              </Button>
            </div>
          </div>
        </div>
        <PFooter />
      </div>
      <Snackbar
        open={orderCompleted}
        autoHideDuration={3000}
        onClose={() => setOrderCompleted(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setOrderCompleted(false)} severity="success" sx={{ width: '100%' }}>
          Satım alımınız onaylandı
        </Alert>
      </Snackbar>
      <Snackbar
        open={cartEmpty}
        autoHideDuration={3000}
        onClose={() => setCartEmpty(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setCartEmpty(false)} severity="error" sx={{ width: '100%' }}>
          Sepette ürün yok, lütfen önce ürün ekleyiniz
        </Alert>
      </Snackbar>
    </>
  );
}
