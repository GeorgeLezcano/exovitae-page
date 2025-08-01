type LogoProps = {
  size?: number;
  className?: string;
};

export function Logo({ size = 100, className = "" }: LogoProps) {
  return (
    <img
      src="exovitae_logo.png"
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
