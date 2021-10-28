import Classes from "../styles/Illustration.module.css";

export default function Illustration({src, alt}) {
  return (
    <div>
      <div className={Classes.illustration}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
