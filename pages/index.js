import CokSatanlar from "@/components/CokSatanlar";
import Header from "@/components/Header";
import { Divider } from "@mui/material";
import { BsArrowUp } from "react-icons/bs";
import { useState, useEffect } from "react";
import MarkaGecis from "@/components/MarkaGecis";
import ImageGecis from "@/components/ImageGecis";
import PFooter from "@/components/PFooter";
import { styled } from "@mui/system";

const Background = styled('div')({
  minHeight: '100vh',
  background: 'radial-gradient(circle, rgba(173, 216, 230, 1) 0%, rgba(0, 0, 139, 1) 100%)', // Ortası açık mavi, kenarlara gittikçe koyulaşan mavi gradient
});

export default function Home() {
  
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

  const telefon = "En Çok Satan Telefonlarımız";
  const beyazesya = "Ev Dizmek İçin Harika Beyaz Eşyalar";
  const GiyimKusam = "Favori Giyim Ürünlerimiz";

  // Sayfanın en üstüne dön
  const scrollUst = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [scrolButonGoster, setscrolButonGoster] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setscrolButonGoster(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Background>
      <div>
        <Header />
      </div>
      <div>
        <Divider />
      </div>
      <div style={{ position: "relative", zIndex: "1" }}>
        {/* Sol taraftaki indirim resmi */}
        <div style={{ position: "absolute", left: 0, top: "100%", height: "100%" }}>
          <img src="/15indirim.jpg" alt="Indirim" style={{ maxHeight: "225px" }} />
        </div>
        {/* Sağ taraftaki indirim resmi */}
        <div style={{ position: "absolute", right: 0, top: "100%", height: "100%" }}>
          <img src="/15indirim.jpg" alt="Indirim" style={{ maxHeight: "225px" }} />
        </div>
        <MarkaGecis />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CokSatanlar products={Telefon} title={telefon} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageGecis />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CokSatanlar products={BeyazEsya} title={beyazesya} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CokSatanlar products={Giyim} title={GiyimKusam} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PFooter />
      </div>

      {scrolButonGoster && (
        <div style={{ position: "fixed", bottom: "10px", right: "10px", zIndex: 50 }}>
          <button
            onClick={scrollUst}
            style={{ backgroundColor: "#424242", color: "#fff", borderRadius: "50%", padding: "8px", cursor: "pointer", transition: "background-color 0.3s" }}
          >
            <BsArrowUp style={{ fontSize: "24px" }} />
          </button>
        </div>
      )}
    </Background>
  );
}
