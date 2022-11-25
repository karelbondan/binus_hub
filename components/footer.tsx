import Image from "next/image";
import { useRouter } from "next/router";
import bh_logo from '../public/images/logo2.png';

const Footer = () => {
    const router = useRouter();
    return (
        <div className={`${router.pathname === '/' ? 'bg-pronhub' : 'bg-pronhub_navbar'} flex flex-col items-center justify-center pt-10 pb-3 px-10 space-y-8`}>
            <div className="items-center justify-center large:flex large:space-y-0 very_small:space-y-10">
                <div className="items-center justify-center flex flex-col">
                    <div className='max-w-[130px] min-w-[130px] large:mr-14 disable_selection disable_img_drag'>
                        <Image src={bh_logo} alt='' />
                    </div>
                </div>
                <div className="large:space-x-20 very_small:space-y-10 medium:flex medium:space-y-0">
                    <div className="text-white space-y-2 very_small:text-center medium:pr-10 medium:text-left large:border-l large:border-l-white large:px-10 max-w-sm">
                        <p className="text-xl font-bold">About</p>
                        <p className="text-sm text-white/80">Binus Hub is a website to showcase projects that&apos;s been made by BINUS students over the years. </p>
                        <p className="text-sm text-white/80">Made with ❤ by L5AC B2024 International</p>
                    </div>
                    <div className="text-white max-w-sm space-y-2 very_small:px-0 very_small:text-center medium:text-left medium:pl-10 large:px-10 medium:border-l medium:border-l-white">
                        <p className=" font-bold text-xl">Contact</p>
                        <p className="text-sm text-white/80">You can contact us through email@email.com. Additionally, visit the BINUS social medias to see more information about our university.</p>
                        <div className="text-white text-sm space-x-3 disable_selection">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <button className="max-w-[20px]">
                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" />
                                </button>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <button className="max-w-[20px]">
                                    <img alt="" src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-0902F48837-seeklogo.com.png" />
                                </button>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <button className="max-w-[20px]">
                                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" />
                                </button>
                            </a>
                            <a href="https://international.binus.ac.id/" target="_blank" rel="noopener noreferrer">
                                <button className="max-w-[20px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-white/50 text-xs disable_selection">© 2022 Bina Nusantara Student Project</p>
        </div>
    )
}

export default Footer;
