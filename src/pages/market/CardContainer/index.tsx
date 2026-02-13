import { useEffect, useState } from "react";
import Card from "./Card";
import { ProductService } from "@/api/services/product.service";
import type { ProductsResponse } from "@/api/services/types/product";

const cardOptions = [
  {
    src: "./katha.jpg",
    title: "KATHA WALLET",
    price: 123,
    liked: false,
    texture: "suede",
  },
  {
    src: "./dari.jpg",
    title: "DARI WALLET",
    price: 432,
    liked: false,
    texture: "fullGrain",
  },
  {
    src: "./husai.jpg",
    title: "HUSAI WALLET",
    price: 890,
    liked: false,
  },
  {
    src: "./sinag.jpg",
    title: "SINAG WALLET",
    price: 876,
    liked: true,
  },
  {
    src: "./mayumi.jpg",
    title: "MAYUMI WALLET",
    price: 235,
    liked: false,
  },
];

const CardContainer = () => {
  const { getProducts } = ProductService;
  const [products, setProducts] = useState<ProductsResponse>([]);
  const cards = () =>
    products.map((item) => (
      <Card
        price={Number(item.variants[0].price)}
        src={item.variants[0].imgSrc}
        title={item.name}
        key={item.id}
        liked={false}
      />
    ));

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();
      console.log(res, "lkjlkj");
      setProducts(res.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid  gap-5 grid-cols-3 lg:grid-cols-4">{cards()}</div>
  );
};

export default CardContainer;
