import Image from 'next/image';
import logo from '@/public/images/logo.png';
import Link from 'next/link';
import { Slackey } from 'next/font/google';

const slackey = Slackey({ subsets: ['latin'], weight: '400' });

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-3 gap-2 sm:gap-0">
      <div className="flex items-center gap-1">
        <Image src={logo} alt="BoredChats" width={30} height={38} />
        <span className={`font-bold text-xl ${slackey.className}`}>
          BoredChats
        </span>
      </div>
      <p className="text-sm italic text-gray-500 order-last sm:order-none mt-2 sm:mt-0">
        150+ interesting questions to ask chatgpt
      </p>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSeHN8H--kX5dyCM92bpp20AA07upCpwiwudWZY3jRIoZ1kgqw/viewform?usp=sf_link"
        className="border border-gray-500 text-sm rounded px-3 py-1 hover:text-gray-800 hover:bg-green-300/50"
      >
        Add a question
      </Link>
    </div>
  );
}