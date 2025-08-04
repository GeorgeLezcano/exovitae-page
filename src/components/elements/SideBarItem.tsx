type SideBarItemProps = {
  className?: string;
  name: string;
  onClick: () => void;
  disabled?: boolean;
  tooltip?: string;
};

export function SideBarItem({
  name,
  onClick,
  disabled = false,
  tooltip,
  className,
}: SideBarItemProps) {
  return (
    <div style={{paddingBottom: 30, width: "100%"}}>
      <button
        className={className}
        onClick={onClick}
        disabled={disabled}
        title={tooltip}
      >
        {name}
      </button>
    </div>
  );
}
