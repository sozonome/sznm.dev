import clsx from "clsx";

const HeroSection = () => {
  return (
    <div className="h-[90vh] grid items-center">
      <div
        className={clsx(
          "align-middle w-full md:w-3/5 mt-8 self-[none] sm:self-center",
          "sm:w-4/5 sm:mt-0 sm:self-center",
          "md:w-3/5"
        )}
      >
        <h1 className="text-4xl font-bold pb-3">Hello! I&apos;m Nathan.</h1>
        <p className="text-md md:text-xl">
          Digital crafter specializing in Frontend development.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
