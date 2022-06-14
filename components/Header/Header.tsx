import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import lightLogo from '../../public/light-logo.svg'
// import darkLogo from '../../public/dark-logo.svg'
// import MobileMenu from './MobileMenu'
import * as SVG from './SVG'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="max-w-7xl mx-auto px-4 py-2">
      <div className="flex justify-between">
        {/* Logo */}
        <div className="flex space-x-2">
          <Link href="/">
            <a>
              <Image
                src={lightLogo}
                width={320}
                height={70}
                alt="The Pink Book logo"
              />
            </a>
          </Link>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-2 font-sans font-semibold text-2xl text-primary">
          <a href="#" className="flex place-items-center">
            <span className="mr-[5px]">Browse</span> <SVG.ChevronDown />
          </a>
          <a href="#" className="flex place-items-center px-5">
            Write
          </a>
          <a href="#" className="flex place-items-center">
            <span className="mr-[5px]">Sign in</span> <SVG.AvatarIcon />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <SVG.CloseMenuIcon /> : <SVG.MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {
        <div
          className={`absolute inset-x-2 transform ${
            menuOpen
              ? 'translate-x-0 shadow-rose-900 shadow-2xl'
              : 'right-0 translate-x-full'
          } transition duration-200 ease-in-out md:hidden text-pink-50 bg-primary rounded-3xl`}
        >
          <a
            href="#"
            className="flex place-items-center px-4 py-2 text-xl font-semibold"
          >
            <span className="mr-[5px]">Browse</span> <SVG.ChevronDown />
          </a>
          <a href="#" className="block px-4 py-2 text-xl font-semibold">
            Write
          </a>
          <a
            href="#"
            className="flex place-items-center px-4 py-2 text-xl font-semibold"
          >
            <span className="mr-[5px]">Sign in</span> <SVG.AvatarIcon />
          </a>
        </div>
      }
    </nav>
  )

  // return (
  //   <header className="px-1 sm:px-4 lg:px-9 py-2.5">
  //     {/* <div className="w-full"> */}
  //     <nav className="flex flex-wrap justify-between">
  //       {/* <div className="container mx-auto flex flex-wrap items-center justify-between"> */}
  //       {/* <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"> */}
  //       <Link href="/">
  //         <a>
  //           <div className="flex justify-center">
  //             <Image
  //               src={lightLogo}
  //               width={320}
  //               height={70}
  //               alt="The Pink Book logo"
  //             />
  //           </div>
  //         </a>
  //       </Link>
  //       <button
  //         className="text-primary hover:text-secondary cursor-pointer lg:hidden"
  //         type="button"
  //         onClick={() => setMenuOpen(!menuOpen)}
  //       >
  //         {menuOpen ? <SVG.CloseMenuIcon /> : <SVG.MenuIcon />}
  //       </button>
  //       {/* </div> */}
  //       <div
  //         className={'lg:flex items-center' + (menuOpen ? 'flex' : ' hidden')}
  //       >
  //         {/* <div className=""> */}
  //         <ul className="flex flex-col font-sans text-3xl text-primary lg:flex-row list-none">
  //           <li>
  //             <a href="#" className="flex place-items-center">
  //               <span className="mr-[5px]">Browse</span>
  //               <SVG.ChevronDown />
  //             </a>
  //           </li>
  //           <li className="mx-10">
  //             <a href="#">Write</a>
  //           </li>
  //           <li>
  //             <a href="#" className="flex place-items-center">
  //               <span className="mr-[5px]">Sign</span> <SVG.AvatarIcon />
  //             </a>
  //           </li>
  //           <li className="ml-10 my-auto">
  //             <a className="cursor-pointer">
  //               <SVG.SearchIcon />
  //             </a>
  //           </li>
  //         </ul>
  //         {/* </div> */}
  //       </div>
  //       {/* </div> */}
  //     </nav>
  //     {/* </div> */}
  //   </header>
  // )
}
