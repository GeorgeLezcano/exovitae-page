import { exovitaeLogo } from "../../constants/Global";

type LogoProps = {
  size?: string;
  className?: string;
};

export function Logo({ size = "100%", className = "" }: LogoProps) {
  return (
    <img
      src={exovitaeLogo}
      alt="Logo"
      width={size}
      height={size}
      style={{
        objectFit: "contain", 
        borderRadius: 8,       
      }}
      className={className}
    />
  );
}
