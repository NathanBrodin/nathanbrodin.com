import { useTheme } from "next-themes"
import Link from "next/link"

export default function Footer() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="p-4">
      <footer class="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800">
        <span class="text-sm sm:text-center text-gray-400">© 2022 <a href="https://nathanbrodin.com/" class="hover:underline">Nathan Brodin™</a>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm  text-gray-400 sm:mt-0">
          <li>
            <Link href={"https://github.com/NathanBrodin/nathanbrodin.com/blob/main/LICENCE.md"} passHref={true}>
              <a target="_blank" class="mr-4 hover:underline md:mr-6 ">MIT Licence</a>
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/NathanBrodin/nathanbrodin.com"} passHref={true}>
              <a target="_blank" class="mr-4 hover:underline md:mr-6">See the repository on GitHub</a>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  )
}
