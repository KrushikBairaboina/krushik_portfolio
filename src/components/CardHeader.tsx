import { twMerge } from "tailwind-merge";

import StarIcon from "@/assets/icons/star.svg";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-500 dark:text-emerald-300" />
        <h3 className="font-serif text-3xl text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-gray-600 dark:text-white/60 mt-2">
        {description}
      </p>
    </div>
  );
};