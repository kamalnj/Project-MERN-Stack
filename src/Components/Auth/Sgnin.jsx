import React, { useState } from "react";
import {  useNavigate, Navigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../fireBase";
import { useAuth } from "./AuthContext";

const SignIn = () => {
  const { userLoggedIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/"); // Redirect to home on successful sign-in
      } catch (error) {
        alert("Login failed");
        console.error("Error signing in:", error);
        setIsSigningIn(false);
      }
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/home" replace={true} />;
  }

  return (
    <section className="bg-slate-100 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <img
                  className="mx-auto inline-block max-w-[160px]"
                  src="https://www.eccbc.com/wp-content/uploads/2022/04/ECCBC_Logo.png"
                  alt="logo"
                />
              </div>
              <form onSubmit={handleSubmit}>
                
                <InputBox
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputBox
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="mb-10">
                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-red-600 rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                    disabled={isSigningIn}
                  >
                    Connectez-vous
                  </button>
                </div>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

const InputBox = ({ type, placeholder, name, value, onChange }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
      />
    </div>
  );
};
