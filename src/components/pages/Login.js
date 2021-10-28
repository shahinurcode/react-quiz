import LoginImage from "../../assets/images/login.svg";
import Classes from "../../styles/Login.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../Textinput";
export default function Login() {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration src={LoginImage} alt="Login" />
        <Form className={`${Classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />

          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button>Login</Button>

          <div class="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </div>
  );
}
