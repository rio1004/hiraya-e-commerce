import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { useState } from "react";
import Divider from "@/components/Divider";
import OrderSummary from "./OrderSummary";

const options = [
  { label: "test", value: "test" },
  { label: "tesss", value: "ss" },
];

const title = (title: string) => {
  return <p className="bg-[#f4f4f4] my-4 p-3 w-87.5 font-medium">{title}</p>;
};

const DeliveryInfo = () => {
  const [region, setRegion] = useState<string>("");
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
          <div className="w-full">
            <div>
              {title("Contact Information")}
              <div className="grid grid-cols-2 gap-4">
                {" "}
                <Input placeholder="Please enter your first name" />
                <Input placeholder="Please enter your last name" />
                <Input placeholder="Please enter your mobile number" />
              </div>
            </div>
            <div>
              {title("Delivery address")}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 ">
                  <Input placeholder="Please enter your first name" />
                </div>
                <Select
                  options={options}
                  placeholder="Select Cities"
                  value={region}
                  onChange={setRegion}
                />
                <Select options={options} placeholder="Select province" />
                <Select options={options} placeholder="Select province" />
              </div>
            </div>
          </div>
          <OrderSummary />
        </div>
      </div>
      <Button className="mt-10 px-12">Proceed to payment</Button>
    </div>
  );
};

export default DeliveryInfo;
