import Image from 'next/image'
import {InputWithButton} from '@/components/InputWithButton'
import { Button } from '@/components/ui/button'
import InfiniteCarousel from '@/components/InfiniteCarousel'

export default function Home() {
  return (
    <>
    <div className="pl-24 py-8">

    <p className="font-anaheim pl-8">Web3Education.Dev</p>

    <div className="py-8 flex">
        <div className="w-1/2 pr-4">
          <p className="font-roboto-mono text-5xl leading-16 pb-8 pt-24">
            WE'RE BUILDING THE <br /> ULTIMATE PLATFORM TO <br /> BECOME WEB3 <br /> DEVELOPERS
          </p>
          <p className='font-inter text-2xl pb-8'>Learn from the world's leading smart contract<br/>developers.</p>

          <p className='font-inter text-lg pb-4'>Signup for a chance to get early access.</p>

          <InputWithButton/>

          <p className='font-inter pt-20 pb-2'>Does your company need<br/> a smart contract audit?</p>

          <Button className='button-color' variant={'outline'}>Get Audited</Button>

          <div className='pt-3'><img src="twitter.png" alt="Twitter icon" className="w-8 h-8" /></div>

          <p className="font-anaheim text-1xl pt-32">©️ Web3Education.Dev 2023</p>

        </div>

        <div className="w-1/2 justify-end pl-56">
          <InfiniteCarousel />
        </div>
      </div>

    {/* <div className="flex justify-end">
      <InfiniteCarousel />
    </div>

    <p className='font-roboto-mono text-5xl leading-16 pb-8'>WE'RE BUILDING THE <br/>ULTIMATE PLATFORM TO <br/>BECOME WEB3 <br/>DEVELOPERS</p> */}
    </div>
    </>
  )
}
