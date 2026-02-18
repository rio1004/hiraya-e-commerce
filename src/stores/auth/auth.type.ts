
export interface UserType {
  id?: string;
  firebaseUid: string;
  email: string;
  name?: string;
  createdAt?: string;
  role?: "CUSTOMER" | "ADMIN" | string;
}

export interface AuthState {
  user: UserType | null;
  token: string | null;
  openLogin: boolean;
  setOpenLogin: (value: boolean) => void;
  setUserAuth: (user: UserType, token: string) => void;
  logout: () => void;
}
