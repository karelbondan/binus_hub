import Link from 'next/link';
import WaveDivider from '../public/images/wave_divider_index.svg';

const Login = () => {
    return (
    <div className="overflow-hidden min-h-[100vh] text-white bg-pronhub flex flex-col items-center justify-center w-full flex-1 px-20 text-center relative">
        <WaveDivider className='absolute -rotate-3 w-[110%] top-[80%]'/>
        <WaveDivider className='absolute -rotate-[183deg] w-[110%] top-[5%]'/>
        <div className='absolute min-h-[50vh] min-w-full bg-pronhub_navbar top-[94%]'></div>
        <div className='absolute min-h-[50vh] min-w-full bg-pronhub_navbar -top-[38%]'></div>
        <div className="text-white bg-pronhub_light rounded-2xl shadow-2xl flex w-2/3 max-w-5xl z-50">
            <div className="w-3/5 p-5">
                <div className="text-left font-bold">
                    Binus<span className="text-pronhub_blue">Hub</span>
                </div>
                <div className="py-10">
                    <h2 className="text-3xl font-bold text-pronhub_blue mb-4">Sign in to your account</h2>
                    <div className="border-2 w-48 border-pronhub_blue inline-block mb-16"></div>
                    <div className="flex flex-col items-center">
                        <div className="bg-pronhub_white w-64 p-2 text-pronhub_light mb-3">
                            <input type="email" name="email" placeholder="Binus Email" className="bg-pronhub_white outline-none text-sm w-60"></input>
                        </div>
                        <div className="bg-pronhub_white w-64 p-2 text-pronhub_light mb-3">
                            <input type="password" name="password" placeholder="Password" className="bg-pronhub_white outline-none text-sm w-60"></input>
                        </div>
                        <Link href='/'>
                        <button className="border-2 border-pronhub_blue rounded-full px-12 py-2 inline-block font-semibold hover:bg-pronhub_white hover:text-pronhub_light">
                            Sign in
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="w-2/5 bg-pronhub_blue rounded-tr-2xl rounded-br-2xl py-36 px-12">
                <h2 className="text-3xl font-bold mb-2">Hello, Binusian!</h2>
                <div className="border-2 w-32 border-pronhub_logo_white inline-block mb-2"></div>
                <p className="mb-10">Fill in your BINUS information and start uploading!</p>
                <p>Don&apos;t have an account yet? Contact an admin to get your account registered.</p>
            </div>

        </div>
    </div>
    )
}

export default Login;