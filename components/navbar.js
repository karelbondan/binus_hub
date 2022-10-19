import Image from 'next/image'
import bh_logo from '../public/images/logo1.png'

export default function Navbar() {
    return (
        <div className="flex bg-pronhub_navbar text-white px-5 py-5 lg:px-10 items-center justify-center">
            <div className='flex justify-between items-center large:space-x-[350px] bruh:space-x-[500px] medium:space-x-[300px]  small:space-x-[100px] '>
                <div className='max-w-[230px] min-w-[230px]'>
                    <Image src={bh_logo} alt="/" />
                </div>
                <div className='space-x-8 large:flex very_small:hidden'>
                    <button className='hover:text-yellow-500 transition-colors'>
                        Home
                    </button>
                    <button className='hover:text-yellow-500 transition-colors'>
                        Upload
                    </button>
                    <button className='hover:text-yellow-500 transition-colors'>
                        About
                    </button>
                    <button className='hover:text-yellow-500 transition-colors'>
                        Contact
                    </button>
                    <button className='hover:text-yellow-500 transition-colors'>
                        Account
                    </button>
                </div>
                <div className='large:hidden very_small:flex'>
                    <button className='hover:text-yellow-500 transition-colors'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}