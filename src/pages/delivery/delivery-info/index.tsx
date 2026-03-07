import Divider from "@/components/Divider";
import OrderSummary from "./OrderSummary";
import ContactDelivery from "./ContactDelivery";

const DeliveryInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-[1200px] w-full mt-10">
        <div className="text-[24px] flex text-nowrap items-center gap-4">
          <p>
            <span className="rounded-full bg-[#F4F4F4] px-4 mr-2">1</span>{" "}
            Delivery Information
          </p>
          <Divider />
          <p className="text-[#D9D9D9]">
            <span className="text-white rounded-full bg-[#F4F4F4] px-3 mr-2">
              2
            </span>{" "}
            Payment
          </p>
        </div>

        <div className="flex justify-between mt-10 gap-4">
          <ContactDelivery />
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
