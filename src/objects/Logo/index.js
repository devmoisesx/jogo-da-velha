import "./styles.css";

function Logo({ className = "" }) {
  return (
    <h1 className={`logo ${className}`}>
      Collab<span>code</span>
    </h1>
  );
}

export default Logo;
