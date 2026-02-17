import CheckBox from "@/components/CheckBox";
import { useState, type Dispatch, type SetStateAction } from "react";
import Filter from "./Filter";
import { availabilityOptions, colorOptions, textureOptions } from "./options";

const Filters = () => {
  const [avaialabilityCheckMap, setAvailabilityCheckMap] = useState<
    Record<string, boolean>
  >({
    inStock: false,
  });
  const [textureCheckedMap, setTextureCheckedMap] = useState<
    Record<string, boolean>
  >({
    suede: false,
    smooth: false,
    fullGrain: false,
  });
  const [colorCheckMap, setColorCheckMap] = useState<Record<string, boolean>>({
    brown: false,
    red: false,
    black: false,
  });

  const toggleCheckBox = (
    id: string,
    setFilterType: Dispatch<SetStateAction<Record<string, boolean>>>,
  ) => {
    setFilterType((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const availability = () =>
    availabilityOptions.map((item) => (
      <CheckBox
        key={item.id}
        isChecked={avaialabilityCheckMap[item.id]}
        label={`${item.label} (${item.count})`}
        onChangeChecked={() => toggleCheckBox(item.id, setAvailabilityCheckMap)}
      />
    ));
  const textures = () =>
    textureOptions.map((item) => (
      <CheckBox
        key={item.id}
        isChecked={textureCheckedMap[item.id]}
        label={`${item.label} (${item.count})`}
        onChangeChecked={() => toggleCheckBox(item.id, setTextureCheckedMap)}
      />
    ));
  const colors = () =>
    colorOptions.map((item) => (
      <CheckBox
        key={item.id}
        isChecked={textureCheckedMap[item.id]}
        label={`${item.label} (${item.count})`}
        onChangeChecked={() => toggleCheckBox(item.id, setTextureCheckedMap)}
        colorFilter={item.colorFilter}
      />
    ));

  return (
    <aside className="lg:flex flex-col gap-4 hidden">
      <Filter title="AVAILABILITY">{availability()}</Filter>
      <Filter title="TEXTURE">{textures()}</Filter>
      <Filter title="COLOR">{colors()}</Filter>
    </aside>
  );
};

export default Filters;
