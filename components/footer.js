import Image from "next/image"
import bh_logo from '../public/images/logo1.png'

export default function Footer() {
    return (
        <div className="bg-pronhub_navbar items-center justify-center flex flex-col py-10 px-10 space-y-5">
            <div className='max-w-[330px] min-w-[330px]'>
                <Image src={bh_logo} alt='/' />
            </div>
            <div className="text-white space-x-3">
                <button>
                    logo
                </button>
                <button>
                    logo
                </button>
                <button>
                    logo
                </button>
                <button>
                    logo
                </button>
            </div>
            <div className="border-b min-w-full opacity-50"></div>
            <p className="text-white">Bina Nusantara Student Project</p>
        </div>
    )
}
