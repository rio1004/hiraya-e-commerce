import Card from "./Card";

const cardOptions = [
  {
    src: "./katha.jpg",
    title: "KATHA WALLET",
    price: 290,
    liked: false,
    texture: "suede",
  },
  {
    src: "./dari.jpg",
    title: "DARI WALLET",
    price: 290,
    liked: false,
    texture: "fullGrain",
  },
  {
    src: "./husai.jpg",
    title: "HUSAI WALLET",
    price: 290,
    liked: false,
  },
  {
    src: "./sinag.jpg",
    title: "SINAG WALLET",
    price: 290,
    liked: true,
  },
  {
    src: "./mayumi.jpg",
    title: "MAYUMI WALLET",
    price: 290,
    liked: false,
  },
];

const CardContainer = () => {
  const cards = () =>
    cardOptions.map((item) => (
      <Card
        price={item.price}
        src={item.src}
        title={item.title}
        key={item.title}
        liked={item.liked}
      />
    ));
  return (
    <div className="grid  gap-5 grid-cols-3 lg:grid-cols-4">{cards()}</div>
  );
};

export default CardContainer;
