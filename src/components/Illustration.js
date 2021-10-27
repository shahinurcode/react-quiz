import SignupImage from "../assets/images/signup.svg";
import Classes from "../styles/Illustration.module.css";

export default function Illustration() {
  return (
    <div>
      <div className={Classes.illustration}>
        <img src={SignupImage} alt="Signup" />
      </div>
    </div>
  );
}
