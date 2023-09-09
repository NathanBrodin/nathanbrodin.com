interface Props {
  title: string;
  subtitle?: string;
}

export default function Heading({ title, subtitle }: Props) {
  return (
    <div className="my-16 flex flex-col items-center px-8 text-center lg:my-24 lg:px-0">
      <h1 className="bg-gradient-to-t from-secondary to-primary bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-5xl sm:leading-tight lg:leading-relaxed ">
        {title}
      </h1>
      <h2 className="text-base font-medium text-gray-500">{subtitle}</h2>
    </div>
  );
}
