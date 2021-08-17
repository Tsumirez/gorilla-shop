import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../button/button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({email:'', password:''});
    } catch (err) {
      console.log(err);
    }

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span className="title">SIgn in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            label="email"
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN WITH EMAIL</CustomButton>
            <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
