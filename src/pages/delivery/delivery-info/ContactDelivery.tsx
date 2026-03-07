import Input from "@/components/Input";
import {
  useBrgy,
  useCities,
  useProvinces,
  useRegions,
} from "@/features/location/location.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "@/components/Select";
import { Controller, FormProvider, useForm } from "react-hook-form";
import z from "zod";
import Button from "@/components/Button";
import { useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { useCreateAddress } from "@/features/address/address.hook";

const title = (title: string) => (
  <p className="bg-[#f4f4f4] my-4 p-3 w-87.5 font-medium">{title}</p>
);

type DeliveryFormValues = z.infer<typeof deliverySchema>;

const deliverySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  contactPhone: z.string().min(1, "Mobile number is required"),
  fullAddress: z.string().min(1, "Full address is required"),
  regionCode: z.string().min(1, "Region is required"),
  provinceCode: z.string().min(1, "Province is required"),
  cityCode: z.string().min(1, "City is required"),
  barangayCode: z.string().min(1, "Barangay is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  isDefault: z.boolean(),
});

const ContactDelivery = () => {
  const methods = useForm<DeliveryFormValues>({
    resolver: zodResolver(deliverySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contactPhone: "",
      fullAddress: "",
      regionCode: "",
      provinceCode: "",
      cityCode: "",
      barangayCode: "",
      isDefault: false,
      postalCode: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
    control,
  } = methods;
  const { data: regionDatas } = useRegions();
  const regionCode = watch("regionCode");
  const provinceCode = watch("provinceCode");
  const cityCode = watch("cityCode");
  const { data: provinceDatas } = useProvinces(regionCode);
  const { data: citiesData } = useCities(regionCode, provinceCode);
  const { data: brgyData } = useBrgy(cityCode);
  const { mutate: createAddress, isLoading } = useCreateAddress();

  const onSubmit = (data: DeliveryFormValues) => {
    const transformedData = {
      ...data,
      contactName: `${data.firstName} ${data.lastName}`,
    };
    const { firstName, lastName, ...rest } = transformedData;
    console.log(firstName, lastName);
    createAddress(rest);
  };

  console.log(brgyData, "brgy");
  useEffect(() => {
    setValue("provinceCode", "");
    setValue("cityCode", "");
  }, [regionCode]);

  useEffect(() => {
    setValue("cityCode", "");
  }, [provinceCode]);

  useEffect(() => {
    setValue("barangayCode", "");
  }, [cityCode]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
              {...register("contactPhone")}
              error={errors.contactPhone?.message}
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
              name="regionCode"
              options={regionDatas}
              placeholder="Select Region"
              error={errors.regionCode?.message}
            />
            <Select
              label="Province"
              name="provinceCode"
              options={provinceDatas}
              placeholder="Select Province"
              error={errors.provinceCode?.message}
            />
            <Select
              label="City"
              name="cityCode"
              options={citiesData}
              placeholder="Select City"
              error={errors.cityCode?.message}
            />
            <Select
              label="Barangay"
              name="barangayCode"
              options={brgyData}
              placeholder="Select City"
              error={errors.cityCode?.message}
            />
            <Input
              label="Postal Code"
              placeholder="Please enter your Postal code"
              {...register("postalCode")}
              error={errors.fullAddress?.message}
            />
            <div className="flex items-center gap-2">
              <Controller
                name="isDefault"
                control={control}
                render={({ field }) => (
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />

              <p>Default address</p>
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10 px-12 py-2 ">
          Proceed to payment
        </Button>
      </form>
    </FormProvider>
  );
};

export default ContactDelivery;
