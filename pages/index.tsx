import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen min-w-screen bg-black">
      <div className="mt-[30.5vh]">
        <img src="mark.svg" />
      </div>
      <Link href="/name" className="flex justify-center items-center bg-blueDemo  rounded-[43px] text-white text-2xl text-center w-[276px] h-[47px] mt-[6.9vh]">New Game</Link>
      <Link href="/" className="flex justify-center items-center bg-oldDemo border-[1px] border-blueDemo rounded-[43px] text-white text-2xl text-center w-[276px] h-[47px] mt-[1.89vh]">Old Gun</Link>
    </div>
  )
}
export default Home;