"use client"
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GlobalSate } from "@/Provider/GlobalProvider";
const SignUp = () => {
    const { register, handleSubmit, reset } = useForm();
    const [show,setShow] = useState(true);
    const [cShow,setcShow] = useState(true);
    const { createUser,continueWithGoogle } = GlobalSate();
    const router = useRouter();
    const handleSingUp = (data) => {
        const fullName = data?.firstName + " " + data?.lastName;
        if (data?.pass === data?.confirmPass) {
            createUser(data?.email, data?.pass)
                .then((result) => {
                    const user = result.user;
                    if (user) {
                        updateProfile(user, {
                            displayName: fullName,
                            photoURL: imgRes?.data?.display_url,
                        }).then(() => {
                            Swal.fire({
                                icon: "success",
                                title: "Sign UP success",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            reset();
                            router.push("/");
                        });
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${err.message}`,
                    });
                });
        } else {
            Swal.fire({
                icon: "error",
                title: "Password does not match",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
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
        <div className="bg-[#edf1f4] py-10 ">
            <div className="bg-white w-4/5 mx-auto rounded-xl p-5 my-10 disc_effects_up ">
                <form onSubmit={handleSubmit(handleSingUp)} className="">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="w-full flex flex-col">
                            <label className="text-xl mb-4" htmlFor="firstName">
                                First Name:
                            </label>
                            <input
                                required
                                placeholder="First Name ...... "
                                type="text"
                                {...register("firstName")}
                                id="firstName"
                                className="disc_effects p-3 px-5 rounded-xl outline-none"
                            />
                        </div>
                        <div className="w-full flex flex-col">
                            <label className="text-xl mb-4" htmlFor="lastName">
                                Last Name:
                            </label>
                            <input
                                required
                                placeholder="Last Name ...... "
                                type="text"
                                {...register("lastName")}
                                id="lastName"
                                className="disc_effects p-3 px-5 rounded-xl outline-none"
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="text-xl mb-4" htmlFor="email">
                            Email:
                        </label>
                        <input
                            required
                            placeholder="Enter Your Email ...... "
                            type="email"
                            {...register("email")}
                            id="email"
                            className="disc_effects p-3 px-5 rounded-xl outline-none"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-8">
                        <div className="w-full flex flex-col relative">
                            <label className="text-xl mb-4" htmlFor="pass">
                                Password:
                            </label>
                            <input
                                required
                                placeholder="First Name ...... "
                                type={show ? "password" : "text"}
                                {...register("pass")}
                                id="pass"
                                className="disc_effects p-3 px-5 rounded-xl outline-none"
                            />
                            <span
                                onClick={() => setShow(!show)}
                                className="text-2xl absolute right-5 bottom-3 cursor-pointer"
                            >
                                {show ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        <div className="w-full flex flex-col relative">
                            <label className="text-xl mb-4" htmlFor="cPass">
                                Confirm Password:
                            </label>
                            <input
                                required
                                placeholder="Last Name ...... "
                                type={cShow ? "password" : "text"}
                                {...register("confirmPass")}
                                id="cPass"
                                className="disc_effects p-3 px-5 rounded-xl outline-none"
                            />
                            <span
                                onClick={() => setcShow(!cShow)}
                                className="text-2xl absolute right-5 bottom-3 cursor-pointer"
                            >
                                {cShow ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                    </div>
                    <input
                        type="submit"
                        value="Sign Up"
                        className="disc_effects_up btn w-1/2 p-3 rounded-xl mt-8 mx-auto block active font-bold"
                    />
                </form>
                <p className="text-xl font-bold mt-5">
                    Already have an account?
                    <Link
                        className="text-blue-700 font-medium underline ml-2"
                        href={"/login"}
                    >
                        Login Now.{" "}
                    </Link>
                </p>
                <div className="divider"> or </div>
                <button onClick={handleGoogleSignIn} className="flex items-center gap-3 disc_effects_up p-3 px-8 w-1/2 font-bold text-center mx-auto justify-center text-red-500 active rounded-xl"><FaGoogle className="text-2xl"/><span>Google</span></button>

            </div>
        </div>
    );
};

export default SignUp;
