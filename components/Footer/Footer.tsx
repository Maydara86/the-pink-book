import Link from 'next/link'
import { CCLogo, TwitterLogo, RedditLogo, RssLogo } from './SVG'

export default function Footer() {
  return (
    <footer className="flex justify-between p-9 text-sm text-primary">
      <div className="flex place-items-center gap-1 font-semibold">
        <CCLogo />
        2022 - Present, Some Rights Reserved
      </div>
      <div className="flex gap-4 font-bold">
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
      <div className="flex gap-4">
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
