

type HeaderProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Header({ className = "", children}: HeaderProps) {
  return <header className={className}>{children}</header>;
}
