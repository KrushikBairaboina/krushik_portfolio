
export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-gray-600 dark:text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};