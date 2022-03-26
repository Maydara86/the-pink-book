import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/logo.png'

export default function Header() {
  return (
    <header className="flex justify-between px-9 py-2.5">
      <Link href="/">
        <a>
          <div className="flex justify-center">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="The Pink Book logo"
            ></Image>
            <div
              id="header-logo"
              className="font-great my-auto ml-2.5 text-4xl font-semibold text-secondary"
            >
              The Pink Book
              <div className="text-center text-2xl">Arouse Your Mind</div>
            </div>
          </div>
        </a>
      </Link>
      <nav className="my-auto">
        <ul className="flex font-sans text-3xl text-primary">
          <li>
            <a href="#" className="flex">
              Browse
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto ml-[5px] h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li className="mx-10">Write</li>
          <li className="flex">
            Sign
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="my-auto ml-[5px] h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>
          <li className="my-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-10 h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </li>
        </ul>
      </nav>
    </header>
  )
}
