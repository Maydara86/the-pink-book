import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import lightLogo from '../../public/light-logo.png'
// import darkLogo from '../../public/dark-logo.png'
import {
  MenuIcon,
  CloseMenuIcon,
  ChevronDown,
  AvatarIcon,
  SearchIcon,
} from './SVG'

function MobileMenu() {
  return (
    <div className="absolute w-72 bg-black bg-opacity-90 right-0 top-0 h-screen">
      MENU
    </div>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="flex justify-between px-9 py-2.5">
      {isOpen && <MobileMenu />}
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
        <div
          className="absolute top-8 right-8 text-primary hover:text-secondary cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseMenuIcon /> : <MenuIcon />}
        </div>
        <div className="hidden lg:block">
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
              <div className="hover:text-secondary cursor-pointer">
                <SearchIcon />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
