import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import bh_logo from '../public/images/logo1.png';
import default_profile from '../public/images/default_profile.jpg';

const Navbar = () => {
    const router = useRouter();
    return (
        <div className="flex sticky top-0 z-50 bg-pronhub_navbar text-white px-5 py-8 lg:px-10 items-center justify-center disable_selection">
            <div className='flex justify-content items-center xtra_large:space-x-[600px] large:space-x-[330px] bruh:space-x-[500px] medium:space-x-[300px] small:space-x-[200px] kinda_small:space-x-[100px]'>
                <div id='tooltip_trigger' className='relative flex justify-center'>
                    <Link href='/'>
                        <button title='' className='max-w-[150px] min-w-[150px] '>
                            <Image className='disable_img_drag' src={bh_logo} alt="/" />
                        </button>
                    </Link>
                    <div id='tooltip' className='bg-pronhub_light absolute px-2 py-1 rounded-lg top-[50px] drop-shadow-xl whitespace-nowrap'>
                        Home
                    </div>
                </div>
                <div className=' flex items-center space-x-5 large:flex very_small:hidden '>
                    <div id='tooltip_trigger' className='relative flex justify-center'>
                        <Link href='/'>
                            <button>
                                {router.pathname === '/' ?
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                    </svg>

                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                }
                            </button>
                        </Link>
                        <div id='tooltip' className='bg-pronhub_light absolute px-2 py-1 rounded-lg top-[43px] drop-shadow-xl whitespace-nowrap'>
                            Home
                        </div>
                    </div>
                    <div id='tooltip_trigger' className='relative flex justify-center'>
                        <Link href='/upload'>
                            <button title='' id='upload'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </Link>
                        <div id='tooltip' className='bg-pronhub_light absolute px-2 py-1 rounded-lg top-[43px] drop-shadow-xl whitespace-nowrap'>
                            Upload project
                        </div>
                    </div>
                    <div id='tooltip_trigger' className='relative flex justify-center'>

                        <Link href={'/profile/' + '2440069696'}>
                            <button className='flex items-center justify-center space-x-2 border-l px-5'>
                                <p>BOKUNONAWA</p>
                                <div className='rounded-full w-[35px] h-[35px]'>
                                    <Image src={default_profile} className='rounded-full' />
                                </div>
                            </button>
                        </Link>
                        <div id='tooltip' className='bg-pronhub_light absolute px-2 py-1 rounded-lg top-[43px] drop-shadow-xl whitespace-nowrap'>
                            Profile
                        </div>
                    </div>
                </div>
                <div className='large:hidden very_small:flex'>
                    <button className='hover:text-yellow-500 transition-colors'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar; 