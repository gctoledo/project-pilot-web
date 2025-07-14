import { FRONTEND_EXTRA_TECHNOLOGIES_LABEL } from "@/constants/frontend";
import type { ExtraFrontendTechnologies } from "@/types/frontend_technologies";

interface InfoCardProps {
  text: ExtraFrontendTechnologies;
}

const InfoCard = ({ text }: InfoCardProps) => {
  return (
    <div className="bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded border px-3 py-2 text-center text-sm shadow-xs duration-200">
      {FRONTEND_EXTRA_TECHNOLOGIES_LABEL[text]}
    </div>
  );
};

export default InfoCard;
