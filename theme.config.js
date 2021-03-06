const string = [ "Always here for you", "Loves you", "Work in prog...Zzz" ];

export default {
  repository: "https://github.com/Asgarrrr/Luna",
  titleSuffix: " – Luna",
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Luna</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        { string[~~( Math.random() * string.length )] }
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Luna — An adorable Discord bot" />
      <meta name="og:description" content="Luna — An adorable Discord bot" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="./Luna.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="./Luna.png" />
      <meta name="og:title" content="Luna — An adorable Discord bot" />
      <meta name="og:image" content="./Luna.png" />
      <meta name="apple-mobile-web-app-title" content="Luna" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: "Made with ❤️ and lots of ☕",
}
