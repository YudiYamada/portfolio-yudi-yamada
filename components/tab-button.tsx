interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}
export const TabButton = ({ label, isActive, onClick }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`hover:text-primary hover:border-primary inline w-full rounded-[5px] border-2 transition duration-700 hover:scale-105 hover:cursor-pointer md:p-2 md:text-2xl ${
        isActive
          ? "text-primary bg-foreground border-primary"
          : "bg-foreground border-desactive"
      }`}
    >
      {label}
    </button>
  );
};
