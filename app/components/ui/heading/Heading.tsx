interface Props {
  title: string;
  subtitle?: string;
}

export default function Heading({ title, subtitle }: Props) {
  return (
    <div className="flex flex-col items-center my-16 lg:my-24 px-8 lg:px-0 text-center">
      <h1 className="leading-tight sm:leading-tight lg:leading-relaxed text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-t from-secondary to-primary bg-clip-text ">
        {title}
      </h1>
      <h2 className="text-base font-medium text-gray-500">
        {subtitle}
      </h2>
    </div>
  );
}
