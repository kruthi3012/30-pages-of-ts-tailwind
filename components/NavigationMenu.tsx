import Link from 'next/link';

function NavigationMenu() {
  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <nav className="bg-blue-500 rounded-lg p-4 w-96">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="block text-white hover:text-blue-200 cursor-pointer">Home</Link>
          </li>
          <li>
            <Link href="/web3education" className="block text-white hover:text-blue-200 cursor-pointer">Web3Education</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationMenu;
