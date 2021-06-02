/* This example requires Tailwind CSS v2.0+ */
const navigation = [
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Company', href: '#' },
  ]
  
  export default function Header() {
    return (
      <header className="bg-green-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-3 flex items-center justify-between border-b border-green-500 lg:border-none">
          <h1 className="text-3xl font-extrabold tracking-tight text-yellow-300 sm:text-3xl lg:text-3xl">
                Twitter Sentiment Dashboard by will for Certik
              </h1>
            <div className="ml-10 space-x-4">
              <a
                href="https://github.com/williamxyshi/sentiment-dashboard"
                className="inline-block bg-yellow-300 py-2 px-4 border border-transparent rounded-md text-base font-medium text-green-800 hover:bg-green-200"
              >
                Contribute on Github
              </a>
            </div>
          </div>
        </nav>
      </header>
    )
  }
  