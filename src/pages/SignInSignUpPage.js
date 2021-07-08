import React from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";

const SignInSignUp = () => {
  return (
    <>
      <section className="sign-in-sign-up">
        <div className="page-title">
          <h2 className="page-title__main">Hello there!</h2>
          <p className="page-title__sub">
            Please SignIn or Create account to continue
          </p>
        </div>
        <div className="form-page">
          <SignIn />
          <SignUp />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default SignInSignUp;
