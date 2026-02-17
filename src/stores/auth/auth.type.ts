export interface User {
  id: string;
  email: string;
  firebaseUid: string;
  name: string;
  createdAt: string;
  role: "CUSTOMER" | "ADMIN" | string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  openLogin: boolean;
  setOpenLogin: (value: boolean) => void;
  setUserAuth: (user: User, token: string) => void;
  logout: () => void;
}
