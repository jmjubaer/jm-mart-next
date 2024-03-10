/* eslint-disable no-undef */
"use client"
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GlobalSate } from "@/Provider/GlobalProvider";
const LoginPage = () => {
    const [show,setShow] = useState(true);
    const router = useRouter();
    const {loginWithEmail,continueWithGoogle} = GlobalSate();
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form?.email.value;
        const password = form?.pass.value;
        loginWithEmail(email, password)
        .then(result => {
            const user = result.user;
            if(user) {
                Swal.fire({
                    icon: 'success',
                    title: 'User Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  router.push('/')
                form.reset();
            }
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${err.message}`,
              })
        })
    }

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
        <div className="bg-[#edf1f4] py-10">
            <div className="bg-white rounded-xl p-5 disc_effects_up content_container w-1/2 mx-auto">
                <form onSubmit={handleLogin} className="">
                    <div className="w-full flex flex-col">
                        <label className="text-xl mb-4" htmlFor="email">Email:</label>
                        <input required placeholder="Enter Your Email ...... " type="email" name="email" id="email" className="disc_effects p-3 px-5 rounded-xl outline-none"/>
                    </div>
                    <div className="w-full flex flex-col mt-8 relative">
                        <label className="text-xl mb-4" htmlFor="pass">Password:</label>
                        <input required placeholder="Password " type={show ? "password" : "text"} name="pass" id="pass" className="disc_effects p-3 px-5 rounded-xl outline-none"/>
                        <span onClick={() => setShow(!show)} className="text-2xl absolute right-5 bottom-3 cursor-pointer">{show ? <FaEye/> : <FaEyeSlash/>}</span>
                    </div>
                    <input type="submit" value="Log In" className="disc_effects_up btn w-1/2 mt-8 mx-auto block active p-3 rounded-xl font-bold cursor-pointer"/>
                </form>
                <p className="text-xl font-bold mt-5">New to JM Media?
                <Link className="text-blue-700 font-medium underline ml-2" href={"/signup"}>Create Account. </Link></p>
                <div className="divider"> or </div>
                <button onClick={handleGoogleSignIn} className="flex items-center gap-3 disc_effects_up p-3 px-8 w-1/2 font-bold text-center mx-auto justify-center text-red-500 active rounded-xl"><FaGoogle className="text-2xl"/><span>Google</span></button>
            </div>
        </div>
    );
};

export default LoginPage;
