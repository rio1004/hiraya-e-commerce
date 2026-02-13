import { AuthServices } from "@/api/services/auth.service";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { auth, facebookProvider, googleProvider } from "@/lib/firebase";
import { useAuthStore } from "@/stores/auth/useAuth";
import { signInWithPopup } from "firebase/auth";
import type { Dispatch, SetStateAction } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";

type LoginProps = {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
};

const LoginModal = ({ open, onClose }: LoginProps) => {
  const { verifyFirebase } = AuthServices;
  const { setUserAuth } = useAuthStore();
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const token = await user.getIdToken();
      console.log("Google user:", user);
      console.log("ID token:", token);
      const res = await verifyFirebase(token);
      console.log(res);
      setUserAuth(user, token);
      onClose(false);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      const token = await user.getIdToken();
      const res = await verifyFirebase(token);
      console.log(res);
      onClose(false);
    } catch (error) {
      console.error("Facebook login error:", error);
    }
  };
  return (
    <Modal onClose={() => onClose(false)} open={open}>
      <p className="text-3xl">Sign in via Password</p>
      <div className="flex flex-col w-full gap-5 mt-6">
        <Input placeholder="Please enter your email" />
        <Input placeholder="Please enter your password" type="password" />
      </div>
      <p className="underline self-end my-4">Forgot password?</p>
      <Button className="w-full">SIGN IN</Button>
      <div className="flex items-center w-full gap-4">
        <span className="h-px w-full bg-ring text-ring"></span>
        <p className="text-ring font-light my-4 text-sm whitespace-nowrap ">
          or continue with
        </p>
        <span className="h-px w-full bg-ring text-ring"></span>
      </div>
      <div className="flex gap-4">
        <Button
          className="w-50! gap-2"
          variant="outline"
          onClick={handleGoogleLogin}
        >
          <FcGoogle size={24} />
          Google
        </Button>
        <Button
          className="w-50! gap-2"
          variant="outline"
          onClick={handleFacebookLogin}
        >
          <IoLogoFacebook color="#1877F2" size={24} />
          Facebook
        </Button>
      </div>
      <p className="font-light mt-6">
        Don't have an account?{" "}
        <span className="text-[#1E71FF] font-normal cursor-pointer underline">
          Sign up
        </span>
      </p>
    </Modal>
  );
};

export default LoginModal;
