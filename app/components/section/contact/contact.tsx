import Link from "next/link";
import Heading from "../../ui/heading/Heading";

export default function Contact() {
  return (
    <section id="contact" className="flex w-full flex-col justify-center">
      <Heading
        title="Contact"
        subtitle="Interested ? Here's some links to get it touch with me."
      />
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
      </div>
    </section>
  );
}
