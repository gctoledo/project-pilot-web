interface InfoCardProps {
  text: string;
}

const InfoCard = ({ text }: InfoCardProps) => {
  return (
    <div className="bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded border px-3 py-2 text-center shadow-xs duration-200">
      {text}
    </div>
  );
};

export default InfoCard;
