import Classes from "../../styles/Signup.module.css";
import SignupImage from "../../assets/images/signup.svg";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../Textinput";
export default function Signup() {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration src={SignupImage} alt="Signup" />
        <Form className={`${Classes.signup}`}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button>Submit Now</Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </div>
  );
}
