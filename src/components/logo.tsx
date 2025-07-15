import { TypeAnimation } from "react-type-animation";

const Logo = () => {
  return (
    <TypeAnimation
      sequence={["", 500, "Project Pilot"]}
      cursor={false}
      wrapper="h1"
      style={{
        display: "inline-block",
        color: "white",
        fontWeight: "bold",
      }}
    />
  );
};

export default Logo;
