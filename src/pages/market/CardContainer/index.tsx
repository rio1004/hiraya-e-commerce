import { useEffect, useState } from "react";
import Card from "./Card";
import { ProductService } from "@/api/services/product.service";
import type { Product } from "@/api/services/types/product";
import { ImSpinner } from "react-icons/im";

const CardContainer = () => {
  const { getProducts } = ProductService;
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
      setIsLoading(true);
      try {
        const res = await getProducts();
        setProducts(res.products);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full">
      {isLoading ? (
        <div className="flex w-full items-center justify-center col-span-4">
          <ImSpinner className="animate-spin" size={40} />
        </div>
      ) : (
        cards()
      )}
    </div>
  );
};

export default CardContainer;
