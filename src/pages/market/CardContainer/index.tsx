import { useEffect, useState } from "react";
import Card from "./Card";
import { ProductService } from "@/api/services/product.service";
import type { ProductsResponse } from "@/api/services/types/product";

const CardContainer = () => {
  const { getProducts } = ProductService;
  const [products, setProducts] = useState<ProductsResponse>([]);
  const cards = () =>
    products.map((item) => {
      return (
        <Card
          price={Number(item.variants[0].price)}
          src={item.variants}
          title={item.name}
          key={item.id}
          liked={false}
        />
      );
    });

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();
      setProducts(res.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
      {cards()}
    </div>
  );
};

export default CardContainer;
