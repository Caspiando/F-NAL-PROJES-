import React from "react";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function ProductCarousel({ products, title }) {
  const [startItemIndex, setStartItemIndex] = useState(0);

  const titleColor =
    title === "Best Sellers"
      ? "text-green-500"
      : title === "Popular Products"
      ? "text-red-400"
      : title === "This Month's Hits"
      ? "text-slate-400"
      : "";

  const scrollLeft = () => {
    if (startItemIndex > 0) {
      setStartItemIndex((prevIndex) => prevIndex - 1);
    }
  };

  const scrollRight = () => {
    if (startItemIndex < products.length - 4) {
      setStartItemIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="relative mx-auto max-w-screen-lg mt-2">
      <div className={`text-2xl font-semibold ${titleColor}`}>{title}</div>
      <div className="flex items-center justify-center">
        {startItemIndex >= 0 && (
          <IconButton
            onClick={scrollLeft}
            className="bg-white shadow-lg rounded-full hover:bg-blue-900 mr-2"
            style={{ color: "black" }}
          >
            <MdChevronLeft />
          </IconButton>
        )}
        <div className="flex mt-2 space-x-4 overflow-hidden relative">
          {products
            ?.slice(startItemIndex, startItemIndex + 4)
            .map((product, index) => (
              <Transition
                as={Card}
                key={index}
                show={true}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="max-w-xs mx-auto"
              >
                <Link href={`/${product.rt}`} passHref key={index}>
                  <Card
                    sx={{ maxWidth: 220 }}
                    className={`overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-transparent cursor-pointer p-2 mb-2 ${
                      title === "Popular Products" ? "bg-red-50" : ""
                    } ${title === "Best Sellers" ? "bg-green-100" : ""} ${
                      title === "This Month's Hits" ? "bg-slate-50" : ""
                    }`}
                  >
                    <CardContent className="text-center">
                      <Typography gutterBottom variant="h5" component="div">
                        {product.ad}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        className="mb-2 line-clamp-2"
                      >
                        {product.aciklama}
                      </Typography>
                      <CardMedia
                        sx={{ height: 150 }}
                        image={product.ImgUrl}
                        title="Product Image"
                      />
                      <Rating
                        name="read-only"
                        value={product.puan}
                        readOnly
                        className="mb-2"
                      />
                      {product.indirim ? (
                        <>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="line-through mb-1"
                          >
                            {product.fiyat} TL
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.primary"
                            className="font-semibold mb-2"
                          >
                            İndirimli Fiyat: {product.fiyat - product.indirim} TL
                          </Typography>
                        </>
                      ) : (
                        <Typography
                          variant="body2"
                          color="text.primary"
                          className="mb-2"
                        >
                          {product.fiyat} TL
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </Transition>
            ))}
        </div>
        {startItemIndex < products.length - 3 && (
          <IconButton
            onClick={scrollRight}
            className="bg-white shadow-lg rounded-full hover:bg-blue-900 ml-2"
            style={{ color: "black" }}
          >
            <MdChevronRight />
          </IconButton>
        )}
      </div>
    </div>
  );
}
