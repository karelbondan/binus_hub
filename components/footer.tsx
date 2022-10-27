import Image from "next/image";
import bh_logo from '../public/images/logo2.png';

const Footer = () => {
    return (
        <div className="bg-pronhub_navbar flex flex-col items-center justify-center pt-10 pb-3 px-10 space-y-8">
            <div className="items-center justify-center flex space-x-20 ">
                <div className="items-center justify-center flex flex-col">
                    <div className='max-w-[130px] min-w-[130px] mr-14 disable_selection disable_img_drag'>
                        <Image src={bh_logo} alt='' />
                    </div>
                    {/* <div className="border-b min-w-full opacity-50"></div> */}
                </div>
                <div className="text-white border-l border-l-white px-10 max-w-sm space-y-2">
                    <p className="text-xl font-bold">About</p>
                    <p className="text-sm text-white/80">Binus Hub is a website to showcase projects that&apos;s been made by BINUS students over the years. </p>
                    <p className="text-sm text-white/80">Made with ❤ by L5AC B2024 International</p>
                </div>
                <div className="text-white border-l border-l-white px-10 max-w-sm space-y-2">
                    <p className=" font-bold text-xl">Contact</p>
                    <p className="text-sm text-white/80">You can contact us through email@email.com. Additionally, visit the BINUS social medias to see more information about our university.</p>
                    <div className="text-white text-sm space-x-3 disable_selection">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <button>
                                fb
                            </button>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <button>
                                twit
                            </button>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <button>
                                ig
                            </button>
                        </a>
                        <a href="https://international.binus.ac.id/" target="_blank" rel="noopener noreferrer">
                            <button>
                                web
                            </button>
                        </a>

                    </div>
                </div>
            </div>
            <p className="text-white/50 text-xs disable_selection">© 2022 Bina Nusantara Student Project</p>
        </div>
    )
}

export default Footer;
