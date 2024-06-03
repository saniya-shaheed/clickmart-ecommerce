import React from "react";
import "./SignInPage.css";

function SignInPage() {
  return (
    <div className="sign-in-page p-4 p-md-5 d-flex justify-content-center">
      <div className="sign-in-form col-md-4 col-sm-6 p-4 ">
        <h3 className="pb-2"> Sign In </h3>
        <form>
          <div class="form-group pb-3">
            <label for="exampleInputEmail1">Email or Phone Number </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group pb-3">
            <div className="password-label d-flex">
              <label for="exampleInputPassword1">Password</label>
              <a href="" className="text-decoration-none">
                {" "}
                Forgot your password?{" "}
              </a>
            </div>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn w-100 sign-in-button">
            Sign In
          </button>
          <p className="terms-and-privacy pt-3">
            By signing in, you agree to ClickMart's{" "}
            <span>
              <a href=""> Conditions of Use </a>{" "}
            </span>
            and{" "}
            <span>
              <a href=""> Privacy Notice </a>
            </span>
            .
          </p>
          <div class="form-check keep-signed-in pb-3">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <p class="form-check-label" for="exampleCheck1">
              {" "}
              Keep me signed in.
            </p>
          </div>
          <div className="new-member d-flex">
            <hr className="col-md-4 col-2 col-sm-3" />

            <p className="col-md-4 col-8 col-sm-6 d-flex justify-content-center pt-1">
              {" "}
              New to ClickMart?{" "}
            </p>
            <hr className="col-md-4 col-2 col-sm-3 " />
          </div>
          <div className="new-member-btn pb-2">
            <button type="submit" class="btn w-100">
              Create your ClickMart Account{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
