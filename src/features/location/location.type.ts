export type Region = {
  name: string;
  code: string;
};
export type Regions = Region[];

export type Province = {
  name: string;
  code: string;
  regionCode: string;
};

export type Provinces = Province[];

export type City = {
  name: string;
  code: string;
  provinceCode: string | null;
  regionCode: string;
};

export type Cities = City[];

export type Barangay = {
  name: string;
  cityCode: string;
  code: string;
};

export type Barangays = Barangay[];
