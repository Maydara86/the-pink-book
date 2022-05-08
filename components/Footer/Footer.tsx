import Link from 'next/link'
import { CCLogo, TwitterLogo, RedditLogo, RssLogo } from './SVG'

export default function Footer() {
  return (
    <footer className="flex flex-col place-items-center p-9 text-sm text-primary md:flex-row md:justify-between">
      <div className="flex place-items-center gap-1 font-bold py-1">
        <CCLogo />
        2022 - Present, Some Rights Reserved
      </div>
      <div className="flex gap-4 font-bold py-1">
        <Link href="/about">
          <a>
            <span>ABOUT</span>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <span>CONTACT</span>
          </a>
        </Link>
        <Link href="/privacy">
          <a>
            <span>PRIVACY</span>
          </a>
        </Link>
      </div>
      <div className="flex gap-4 py-1">
        <a
          href="https://twitter.com/The_Pink_Book"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterLogo />
        </a>
        <a
          href="https://www.reddit.com/r/ThePinkBook/"
          target="_blank"
          rel="noreferrer"
        >
          <RedditLogo />
        </a>
        <a href="#" target="_blank">
          <RssLogo />
        </a>
      </div>
    </footer>
  )
}
