import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import lightLogo from '../../public/light-logo.svg'
// import darkLogo from '../../public/dark-logo.svg'
// import MobileMenu from './MobileMenu'
import {
  MenuIcon,
  CloseMenuIcon,
  ChevronDown,
  AvatarIcon,
  SearchIcon,
} from './SVG'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="px-1 sm:px-4 lg:px-9 py-2.5">
      {/* <div className="w-full"> */}
      <nav className="flex flex-wrap justify-between">
        {/* <div className="container mx-auto flex flex-wrap items-center justify-between"> */}
        {/* <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"> */}
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
        <button
          className="text-primary hover:text-secondary cursor-pointer lg:hidden"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseMenuIcon /> : <MenuIcon />}
        </button>
        {/* </div> */}
        <div
          className={'lg:flex items-center' + (menuOpen ? 'flex' : ' hidden')}
        >
          {/* <div className=""> */}
          <ul className="flex flex-col font-sans text-3xl text-primary lg:flex-row list-none">
            <li>
              <a href="#" className="flex place-items-center">
                <span className="mr-[5px]">Browse</span>
                <ChevronDown />
              </a>
            </li>
            <li className="mx-10">
              <a href="#">Write</a>
            </li>
            <li>
              <a href="#" className="flex place-items-center">
                <span className="mr-[5px]">Sign</span> <AvatarIcon />
              </a>
            </li>
            <li className="ml-10 my-auto">
              <a className="cursor-pointer">
                <SearchIcon />
              </a>
            </li>
          </ul>
          {/* </div> */}
        </div>
        {/* </div> */}
      </nav>
      {/* </div> */}
    </header>
  )
}
