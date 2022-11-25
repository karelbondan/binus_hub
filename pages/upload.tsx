import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Link from 'next/link';
import WaveDivider from '../public/images/wave_divider_index.svg';

const Upload = () => {
    return (
        <div>
            <div className="min-h-[100vh] bg-pronhub flex items-center justify-center h-screen">
                <form>
                    <div className="h-2 bg-pronhub_blue rounded-t-md"></div>
                    <div className="bg-pronhub_light w-max p-6 rounded-b-md shadow-sm">

                        <h2 className="text-3xl text-center font-bold text-pronhub_white mb-4">UPLOAD YOUR PROJECT</h2>
                        <h2 className="font-semibold text-center text-pronhub_white mb-4">You can upload your project file here!</h2>

                        <div className="flex space-x-2 justify-center">
                            <div className="px-1">
                                <button type="button" className="inline-block px-6 py-2.5 bg-pronhub_white text-pronhub font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pronhub_blue hover:shadow-lg focus:bg-pronhub_blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pronhub_blue active:shadow-lg transition duration-150 ease-in-out">Project File</button>
                            </div>

                            <div className="px-1">
                                <button type="button" className="inline-block px-6 py-2.5 bg-pronhub_white text-pronhub font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pronhub_blue hover:shadow-lg focus:bg-pronhub_blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pronhub_blue active:shadow-lg transition duration-150 ease-in-out">Image</button>
                            </div>
                        </div>

                        <div className="py-2">

                            <div className="py-2">
                                <label className="block text-pronhub_white font-semibold">Student ID</label>
                                <select className="text-gray-500 w-full p-2.5  border rounded-md shadow-sm outline-none appearance-none focus:border-pronhub_blue">
                                    <option value="0">Student ID</option>
                                    <option value="1">2440069696</option>
                                </select>
                            </div>

                            <div className="py-2">
                                <label className="block text-pronhub_white font-semibold">Class</label>
                                <select className="text-gray-500 w-full p-2.5  border rounded-md shadow-sm outline-none appearance-none focus:border-pronhub_blue">
                                    <option value="0">Class ID</option>
                                    <option value="1">L4AC</option>
                                </select>
                            </div>

                            <div className="py-2">
                                <label className="block text-pronhub_white font-semibold">Course ID</label>
                                <select className="text-gray-500 w-full p-2.5  border rounded-md shadow-sm outline-none appearance-none focus:border-pronhub_blue">
                                    <option value="0">Course ID</option>
                                    <option value="1">COMP6348001</option>
                                </select>
                            </div>

                            <div className="py-2">
                                <label className="block text-pronhub_white font-semibold">Project Name</label>
                                <input type="text" placeholder="Enter project name" className="text-gray-500 border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-pronhub_blue rounded-md"></input>
                            </div>
                            <div className="py-2">
                                <label className="block text-pronhub_white font-semibold">Project Link</label>
                                <input type="text" placeholder="Enter the URL to your project" className=" text-gray-500 border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-pronhub_blue rounded-md"></input>
                            </div>
                            <div className="py-2">                            
                                <label className="block text-pronhub_white font-semibold">Description</label>
                                <textarea placeholder="Enter Description" className="text-left text-gray-500 border w-full h-32 px-3 py-2 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-pronhub_blue rounded-md"></textarea>
                            </div>
                            <Link href="/">
                            <button type="button" className="inline-block px-6 py-2.5 bg-pronhub_blue text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-pronhub_blue hover:shadow-lg focus:bg-pronhub_blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pronhub_blue active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                            </Link>
                        </div>   
                    </div>      
                </form>
            </div>
        </div>
    )
}

export default Upload;