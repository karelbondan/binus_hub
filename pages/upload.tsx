import Footer from "../components/footer";
import Navbar from "../components/navbar";
import bh_logo from '../public/images/logo1.png';
import Link from 'next/link';
import WaveDivider from '../public/images/wave_divider_index.svg';
import { useEffect, useState } from "react";
import Image from "next/image";

const Upload = () => {
    const [pic, setPic] = useState("");
    const uploadIMG = async (e) => {
        e.preventDefault();
        let reader: any = new FileReader();
        let input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = _this => {
            let files: any = Array.from(input.files)[0];
            // if (files.type !== 'image/jpg' || files.type !== 'image/jpeg' || files.type !== 'image/png') {
            //     console.log(files.type)
            //     console.log(typeof(files.type))
            //     alert("Please upload only image formatted file (JPG/PNG)")
            //     return
            // }
            reader.onload = () => {
                if (reader.readyState === 2) {
                    if (/^image\/[\w]+$/.exec(files.type)) {
                        setPic(reader.result);
                    } else {
                        alert("Please upload only image formatted file (JPG/PNG)");
                        return;
                    }
                }
            }
            reader.readAsDataURL(files);
        };
        input.click();
    }
    const deleteImg = (e) => {
        e.preventDefault();
        setPic("");
    }
    const handleImgDrop = (e) => {
        e.preventDefault();
        console.log(e.dataTransfer.files);
        let reader: any = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setPic(reader.result);
            }
        }
        reader.readAsDataURL(e.dataTransfer.files[0]);
    }

    return (
        <div className="min-h-[100vh] bg-pronhub flex items-center justify-center">
            <div className="py-10 px-3 flex items-center justify-center very_small:text-sm very_small:flex large:hidden large:text-base">
                <form className="">
                    <div className="h-2 bg-pronhub_blue rounded-t-md"></div>
                    <div className="bg-pronhub_light p-6 rounded-b-md shadow-sm">

                        <h2 className="text-3xl text-center font-bold text-pronhub_white mb-4">UPLOAD YOUR PROJECT</h2>
                        <h2 className="font-semibold text-center text-pronhub_white mb-4">You can upload your project file here!</h2>

                        <div className="flex space-x-4 justify-center">
                            <button type="button" className="inline-block px-6 py-2.5 bg-pronhub_white text-pronhub font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pronhub_blue hover:shadow-lg focus:bg-pronhub_blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pronhub_blue active:shadow-lg transition duration-150 ease-in-out">Project File</button>
                            <button type="button" className="inline-block px-6 py-2.5 bg-pronhub_white text-pronhub font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pronhub_blue hover:shadow-lg focus:bg-pronhub_blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pronhub_blue active:shadow-lg transition duration-150 ease-in-out">Image</button>
                        </div>

                        <div className="py-6 space-y-4">

                            <div className="">
                                <label className="block text-pronhub_white font-semibold">Student ID</label>
                                <select className="text-gray-500 w-full p-2.5 mt-1 rounded-md shadow-sm outline-none appearance-none focus:border-pronhub_blue">
                                    <option value="0">Student ID</option>
                                    <option value="1">2440069696</option>
                                </select>
                            </div>

                            <div className="">
                                <label className="block text-pronhub_white font-semibold">Class</label>
                                <select className="text-gray-500 w-full p-2.5 mt-1 rounded-md shadow-sm outline-none appearance-none focus:border-pronhub_blue">
                                    <option value="0">Class ID</option>
                                    <option value="1">L4AC</option>
                                </select>
                            </div>

                            <div className="">
                                <label className="block text-pronhub_white font-semibold">Course ID</label>
                                <select className="text-gray-500 w-full p-2.5 mt-1 rounded-md shadow-sm outline-none appearance-none focus:border-pronhub_blue">
                                    <option value="0">Course ID</option>
                                    <option value="1">COMP6348001</option>
                                </select>
                            </div>

                            <div className="">
                                <label className="block text-pronhub_white font-semibold">Project Name</label>
                                <input type="text" placeholder="Enter project name" className="text-gray-500 w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-pronhub_blue rounded-md"></input>
                            </div>
                            <div className="">
                                <label className="block text-pronhub_white font-semibold">Project Link</label>
                                <input type="text" placeholder="Enter the URL to your project" className=" text-gray-500 w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-pronhub_blue rounded-md"></input>
                            </div>
                            <div className="">
                                <label className="block text-pronhub_white font-semibold">Description</label>
                                <textarea placeholder="Enter Description" className="text-left text-gray-500 w-full h-32 px-3 py-2 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-pronhub_blue rounded-md"></textarea>
                            </div>
                            <Link href="/">
                                <button type="button" className="inline-block px-6 py-2.5 bg-pronhub_blue text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-pronhub_blue hover:shadow-lg focus:bg-pronhub_blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pronhub_blue active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className="py-10 px-3 flex items-center justify-center very_small:hidden large:flex">
                <form className="">
                    <div className="px-10 py-10 space-y-6 rounded-lg bg-pronhub_light border-t-binusmaya border-t-[8px]">
                        <label className="font-bold text-4xl text-white">Project Upload</label>
                        <div className="flex items-center justify-center space-x-10">
                            <div id="dragdroparea" className={`text-white w-[421px] h-[562px] ${pic ? "" : "border-[2px] border-dashed border-white/[.5]"} flex flex-col justify-center items-center disable_selection`} onDragOver={e => { e.preventDefault() }} onDrop={handleImgDrop}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.9} stroke="currentColor" className="w-[100px] h-[100px] text-white/[.3] ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <div>
                                    <div className={`text-white/[.45] text-center space-y-5 ${pic ? "hidden" : "flex-none"}`}>
                                        <div className="space-y-1">
                                            <p className="font-bold">Drag your project&apos;s cover image here</p>
                                            <p className="">or</p>
                                            <button className="border border-white/[.4] px-2 py-1 rounded-md hover:bg-binusmaya hover:border-binusmaya hover:text-black transition-all" onClick={uploadIMG}>
                                                Upload cover
                                            </button>
                                        </div>
                                        <p className="text-sm">Make sure the image&apos;s ratio is 4:3 and 2 MB at maximum</p>
                                    </div>
                                    <div className={`${pic ? "flex-none" : "hidden"} relative`}>
                                        <Image className="rounded-lg" alt="Project cover image" width='421' height='568' src={pic ? pic : bh_logo} />
                                        <div className={`absolute ${pic ? "flex-none" : "hidden"} top-[10px] right-[10px]`}>
                                            <div id="tooltip_trigger" className="relative flex justify-center">
                                                <button className="px-1 py-1 bg-red-500 rounded-full" onClick={deleteImg}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                                <div id='tooltip_red' className='bg-red-500 absolute px-2 py-1 rounded-lg top-[45px] drop-shadow-xl whitespace-nowrap z-50'>
                                                    Remove picture
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-white flex flex-col w-[400px] space-y-3">
                                <div className="">
                                    <label className="block text-pronhub_white font-semibold">Student ID</label>
                                    <select className="text-gray-500 w-full p-2.5 mt-1 rounded-md shadow-sm outline-none appearance-none focus:border-pronhub_blue">
                                        <option value="0">Student ID</option>
                                        <option value="1">2440069696</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label className="block text-pronhub_white font-semibold">Class</label>
                                    <select className="text-gray-500 w-full p-2.5 mt-1 rounded-md shadow-sm outline-none appearance-none focus:border-pronhub_blue">
                                        <option value="0">Class ID</option>
                                        <option value="1">L4AC</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label className="block text-pronhub_white font-semibold">Course ID</label>
                                    <select className="text-gray-500 w-full p-2.5 mt-1 rounded-md shadow-sm outline-none appearance-none focus:border-pronhub_blue">
                                        <option value="0">Course ID</option>
                                        <option value="1">COMP6348001</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label className="block text-pronhub_white font-semibold">Project Name</label>
                                    <input type="text" placeholder="Enter project name" className="text-gray-500 w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-pronhub_blue rounded-md"></input>
                                </div>
                                <div className="">
                                    <label className="block text-pronhub_white font-semibold">Project Link</label>
                                    <input type="text" placeholder="Enter the URL to your project" className=" text-gray-500 w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-pronhub_blue rounded-md"></input>
                                </div>
                                <div className="">
                                    <label className="block text-pronhub_white font-semibold">Description</label>
                                    <textarea placeholder="Enter Description" className="text-left text-gray-500 w-full h-32 px-3 py-2 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-pronhub_blue rounded-md"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Link href="/">
                                <button type="button" className="inline-block px-[100px] py-2.5 bg-pronhub_blue/[.8] text-white font-medium text-sm leading-tight uppercase rounded-full shadow-md hover:bg-pronhub_blue hover:shadow-lg focus:bg-pronhub_blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pronhub_blue active:shadow-lg transition duration-150 ease-in-out">
                                    Submit
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Upload;