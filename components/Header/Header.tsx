import Image from 'next/image'
import Link from 'next/link'
import lightLogo from '../../public/light-logo.png'
// import darkLogo from '../../public/dark-logo.png'
import { MenuIcon, ChevronDown, AvatarIcon, SearchIcon } from './SVG'

export default function Header() {
  return (
    <header className="flex justify-between px-9 py-2.5">
      <Link href="/">
        <a>
          <div className="flex justify-center">
            <Image
              src={lightLogo}
              width={320}
              height={70}
              alt="The Pink Book logo"
            />
          </div>
        </a>
      </Link>
      <nav className="my-auto">
        <MenuIcon />
        <ul className="flex font-sans text-3xl text-primary">
          <li>
            <a href="#" className="flex place-items-center">
              Browse
              <ChevronDown />
            </a>
          </li>
          <li className="mx-10">Write</li>
          <li className="flex place-items-center">
            Sign <AvatarIcon />
          </li>
          <li className="my-auto">
            <SearchIcon />
          </li>
        </ul>
      </nav>
    </header>
  )
}
