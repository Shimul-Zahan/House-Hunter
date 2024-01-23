import React, { useState } from 'react'
import "./Login.css"
import { useDropzone } from 'react-dropzone';
import './login.css'

const LogIn = () => {
    const [fullImage, setFullImage] = useState([]);
    const [storedImage, setStoredImage] = useState(
        localStorage.getItem("userImage")
    );
    const [previewImage, setPreviewImage] = useState(null);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: async (acceptedFiles) => {
            const file = acceptedFiles[0];
            const reader = new FileReader();
            setFullImage(acceptedFiles[0]);
            console.log(acceptedFiles);
            console.log(acceptedFiles[0]);

            reader.onload = function (e) {
                localStorage.setItem("userImage", e.target.result);
                setPreviewImage(e.target.result);
                setStoredImage(e.target.result);
            };
            reader.readAsDataURL(file);
        },
    });
    return (
        <div className='flex justify-center'>
            <div>
                <div className='flex justify-center mx-auto'>
                    <div className='w-[400px] '><div class="container">
                        <div class="heading">Sign In</div>
                        <form class="form" action="">
                            <div {...getRootProps()} className="relative flex justify-center">
                                <input name="img"  {...getInputProps()} />
                                <div
                                    className={`dropzone border-2 relative border-[#00ADB5] w-[70px]  h-[70px] rounded-full text-center cursor-pointer`}
                                >
                                    {previewImage ? (
                                        <>
                                            <img
                                                src={previewImage}
                                                alt="Uploaded Image"
                                                className="mx-auto  rounded-full h-full"
                                            />
                                            <img src="" className="absolute w-[20px] right-0 bottom-0 bg-white" alt="" />
                                        </>

                                    ) : (
                                        <div className="mx-auto rounded-full bg-[#EEEEEE] h-full">
                                            <img
                                                className="w-full h-full"
                                                src="https://i.ibb.co/LpR33BN/male-avatar-profile-picture-vector-10210618.jpg"
                                                alt=""
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <input
                                placeholder="E-mail"
                                id="email"
                                name="email"
                                type="email"
                                class="input"
                                required=""
                            />


                            <select
                                type="text"
                                name="condition"
                                id="floating_first_name"
                                className="input text-gray-400"
                                placeholder=" "
                                required
                            >
                                <option value="" className="text-black" disabled selected>
                                    Condition
                                </option>
                                <option value="Excellent" className="text-black">
                                    Excellent
                                </option>
                                <option value="Good" className="text-black">
                                    Good
                                </option>
                                <option value="Fair" className="text-black">
                                    Fair
                                </option>
                            </select>


                            <input
                                placeholder="Password"
                                id="password"
                                name="password"
                                type="password"
                                class="input"
                                required=""
                            />
                            <span class="forgot-password"><a href="#">Forgot Password ?</a></span>
                            <input value="Sign In" type="submit" class="login-button text-white text-xl" />
                        </form>
                        <div class="social-account-container">
                            <span class="title">Or Sign in with</span>
                            <div class="social-accounts">
                                <button class="social-button google">
                                    <svg
                                        viewBox="0 0 488 512"
                                        height="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="svg"
                                    >
                                        <path
                                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                        ></path>
                                    </svg>
                                </button>

                            </div>
                        </div>
                        <span class="agreement"><a href="#">Haven't account?</a></span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn