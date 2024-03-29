import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { GlobalSate } from "@/Provider/GlobalProvider";

const SocialLogin = () => {
    const {continueWithGoogle} = GlobalSate();
    const router = useRouter();
    const handleGoogleSignIn = () => {
        continueWithGoogle()
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'User Login Successful',
                showConfirmButton: false,
                timer: 1500
              })
              router.push('/')
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${err.message}`,
              })
        })
    }
    return (
        <div className="">
        <button onClick={handleGoogleSignIn} className="flex items-center gap-3 disc_effects_up p-3 px-8 w-1/2 font-bold text-center mx-auto justify-center text-red-500 active rounded-xl"><FaGoogle className="text-2xl"/><span>Google</span></button>
    </div>
    );
};

export default SocialLogin;