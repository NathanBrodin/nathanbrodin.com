import { component$, useSignal, useOnWindow, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Logo } from "../icons/logo";
import { QwickAnimatedText } from "./animatedText";
import { HiBars3Solid } from "@qwikest/icons/heroicons";

const Header = component$(() => {
  const showName = useSignal(false);

  useOnWindow(
    "scroll",
    $(() => {
      const scrollY = window.scrollY;

      const homeSection = document.getElementById("home");
      const homeSectionBottomY = homeSection?.getBoundingClientRect().bottom;

      if (homeSectionBottomY && scrollY > homeSectionBottomY) {
        showName.value = true;
      } else {
        showName.value = false;
      }
    })
  );

  return (
    <header class="fixed w-full top-0 left-0 p-4 md:p-8 flex text-white justify-between items-center backdrop-blur bg-gray-500 bg-opacity-20">
      <Link href="/" class="flex items-center gap-4">
        <Logo />
        <QwickAnimatedText value={showName.value} />
      </Link>
      <div class="hidden md:block">
        {pages.map((page) => (
          <Link
            href={page.link}
            key={page.name}
            data-section={page.name.toLowerCase()}
            class="font-bold  m-4 transition-all duration-500"
          >
            {page.name}
          </Link>
        ))}
      </div>
      <HiBars3Solid class="block md:hidden" />
    </header>
  );
});

const pages = [
  { name: "Home", link: "/home" },
  { name: "Projects", link: "/home" },
  { name: "About", link: "/home" },
  { name: "Contact", link: "/home" },
];

export default Header;
