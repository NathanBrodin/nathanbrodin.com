export default function Home() {
  return (
    <section
      id="home"
      className="p-4 md:p-8 h-[110vh] sm-home-clip sm:home-clip home-gradient flex items-center text-white"
    >
      <div className="sm:ml-8 lg:ml-24 flex flex-col">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-300">{`Hi, I'm`}</div>
        <div className="text-6xl md:text-7xl lg:text-8xl font-black">Nathan Brodin</div>
        <div className="text-2xl md:text-3xl lg:text-4xl">
          A 21 years old{" "}
          <span className="font-bold text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            software engineer
          </span>{" "}
          from France.
        </div>
      </div>
    </section>
  );
}
