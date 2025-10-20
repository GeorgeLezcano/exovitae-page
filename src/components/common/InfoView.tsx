
type InfoViewProps = {
  className?: string; 
  children?: React.ReactNode; 
};

export function InfoView({ className = "", children }: InfoViewProps) {
  return (
    <section className={className}>
      {children}
    </section>
  );
}
