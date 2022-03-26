import { CCLogo, TwitterLogo, RedditLogo, RssLogo } from './LogosSVG'

export default function Footer() {
  return (
    <footer className="flex justify-between p-9 text-sm text-primary font-semibold">
      <div className="flex place-items-center gap-1">
        <CCLogo />
        2022 - Present Some Rights Reserved
      </div>
      <div className="flex gap-4">
        <span>ABOUT</span>
        <span>CONTACT</span>
        <span>PRIVACY</span>
      </div>
      <div className="flex gap-1">
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
