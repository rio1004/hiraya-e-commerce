import { useForm, FormProvider } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Divider from "@/components/Divider";
import OrderSummary from "./OrderSummary";

const options = [
  { label: "test", value: "test" },
  { label: "tesss", value: "ss" },
];

const deliverySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  mobileNumber: z.string().min(1, "Mobile number is required"),
  fullAddress: z.string().min(1, "Full address is required"),
  region: z.string().min(1, "Region is required"),
  province: z.string().min(1, "Province is required"),
  city: z.string().min(1, "City is required"),
});

type DeliveryFormValues = z.infer<typeof deliverySchema>;

const title = (title: string) => (
  <p className="bg-[#f4f4f4] my-4 p-3 w-87.5 font-medium">{title}</p>
);

const DeliveryInfo = () => {
  const methods = useForm<DeliveryFormValues>({
    resolver: zodResolver(deliverySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      fullAddress: "",
      region: "",
      province: "",
      city: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data: DeliveryFormValues) => {
    console.log("Delivery Info:", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center"
      >
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
                  <Input
                    label="First Name"
                    placeholder="Please enter your first name"
                    {...register("firstName")}
                    error={errors.firstName?.message}
                  />
                  <Input
                    label="Last Name"
                    placeholder="Please enter your last name"
                    {...register("lastName")}
                    error={errors.lastName?.message}
                  />
                  <Input
                    label="Mobile Number"
                    placeholder="Please enter your mobile number"
                    {...register("mobileNumber")}
                    error={errors.mobileNumber?.message}
                  />
                </div>
              </div>

              <div>
                {title("Delivery address")}
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <Input
                      label="Full Address"
                      placeholder="Please enter your Full address"
                      {...register("fullAddress")}
                      error={errors.fullAddress?.message}
                    />
                  </div>

                  <Select
                    label="Region"
                    name="region"
                    options={options}
                    placeholder="Select Region"
                    error={errors.region?.message}
                  />

                  <Select
                    label="Province"
                    name="province"
                    options={options}
                    placeholder="Select Province"
                    error={errors.province?.message}
                  />

                  <Select
                    label="City"
                    name="City"
                    options={options}
                    placeholder="Select City"
                    error={errors.city?.message}
                  />
                </div>
              </div>
              <Button type="submit" className="mt-10 px-12 py-2 ">
                Proceed to payment
              </Button>
            </div>

            <OrderSummary />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default DeliveryInfo;
