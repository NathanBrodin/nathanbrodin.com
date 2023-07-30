interface Props {
  title: string;
  subtitle?: string;
}

export default function Heading({ title, subtitle }: Props) {
  return (
    <div className="flex flex-col items-center mt-8 mb-20 sm:mb-32 px-8 sm:px-0 text-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-t from-secondary to-primary bg-clip-text ">
        {title}
      </h1>
      <h2 className="text-sm sm:text-base lg:text-lg font-medium text-gray-500">
        {subtitle}
      </h2>
    </div>
  );
}
