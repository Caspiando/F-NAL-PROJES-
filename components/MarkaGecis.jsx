import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MarkaGecis() {
  const logos = [
    { name: "Puma", src: "/puma.png", description: "Spor malzemeleri ve giyim" },
    { name: "Adidas", src: "/Adidas.png", description: "Önde gelen spor giyim üreticisi" },
    { name: "Nike", src: "/nikee.jpg", description: "Küresel atletik ayakkabı markası" },
    { name: "iPhone", src: "/iphone.jpg", description: "Apple'ın amiral gemisi akıllı telefon" },
    { name: "Samsung", src: "/Samsung logo.png", description: "Lider elektronik ve akıllı telefon üreticisi" },
    { name: "Vestel", src: "/vestel.png", description: "Ev aletleri ve elektronik" },
    { name: "Bosch", src: "/bosch.png", description: "Alman çok uluslu mühendislik şirketi" },
    { name: "Arçelik", src: "/arcelik.png", description: "Önde gelen ev aletleri markası" },
    { name: "Xiaomi", src: "/xiaomi.jpg", description: "Çinli elektronik ve yazılım şirketi" },
    { name: "TP-Link", src: "/tp-link.jpg", description: "Ağ ürünleri üreticisi" },
    { name: "Microsoft", src: "/micro.png", description: "Yazılım ve teknoloji şirketi" },
    { name: "Sony", src: "/sony.jpg", description: "Eğlence ve elektronik devi" },
    { name: "Tefal", src: "/tefal.jpg", description: "Mutfak eşyaları ve küçük ev aletleri üreticisi" },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const descriptionStyle = {
    color: "rgba(0, 0, 0, 0.95)", // Daha belirgin ve keskin bir siyah renk
    
    fontWeight: "bold", // Yazıyı kalınlaştır
    // Diğer stil özellikleri buraya eklenebilir
  };
  
  

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <ArrowForwardIosIcon sx={{ fontSize: 32 }} />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <ArrowBackIosIcon sx={{ fontSize: 32 }} />
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-screen-lg py-8">
      <h2 className="text-center text-2xl font-bold mb-6">Sitemizde olan ve yakın zamanda da sizlerle olacak markalarımız</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="px-2">
            <div className="w-40 h-40 mx-auto flex items-center justify-center overflow-hidden rounded bg-white shadow-md">
              <Image
                className="object-contain"
                width={150}
                height={150}
                src={logo.src}
                alt={`${logo.name} logo`}
              />
            </div>
            <span className="block text-center text-sm mt-2 font-bold">{logo.name}</span>
            <p className="block text-center text-xs mt-1" style={descriptionStyle}>{logo.description}</p> {/* Stil doğrudan JSX içinde tanımlanıyor */}
          </div>
        ))}
      </Slider>
    </div>
  );
}
