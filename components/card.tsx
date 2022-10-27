import Image from "next/image";
import Link from "next/link";
import default_img from "../public/images/default_icon.jpg";

const Card = ({ project_id, icon, project_name, submission_date, score, description, download_link, viewer, student_ids }) => {
    let binus_staff = viewer // will later be changed to be equals to viewer; guest or student/lecturer and their ids
    let staff_ids = student_ids // will later be changed to be equals to student_ids which is array
    // console.log(staff_ids.includes(binus_staff))
    // console.log(!binus_staff)
    return (
        <div className="">
            <div id='list_component' className="px-10 py-5 space-y-5 border-l-8 border-l-gray-500/0 hover:bg-white/5 hover:border-l-binusmaya/80 transition-colors disable_selection">
                <div className="px-10 flex space-x-10 items-center xtra_large:px-[300px]">
                    <Link href={'/project/' + project_id}>
                        <div id="image" className="max-w-[140px] min-w-[140px] cursor-pointer">
                            <Image alt="" className="disable_img_drag" src={icon ? icon : default_img} />
                        </div>
                    </Link>
                    <div className="disable_selection">
                        {/* <p className={`text-2xl ${binus_staff && staff_ids.includes(binus_staff) ? "" : "hidden"}`}>{project_name} - 📝{score}</p>
                        <p className={`text-2xl ${!binus_staff || !staff_ids.includes(binus_staff) ? "" : "hidden"}`}>{project_name}</p> */}
                        <Link href={'/project/' + project_id}>
                            <p className='cursor-pointer text-3xl font-semibold'>{project_name}</p>
                        </Link>
                        <p className="text-sm">By {student_ids.toString()}</p>
                        <p className={`text-sm font-semibold ${binus_staff && staff_ids.includes(binus_staff) ? "" : "hidden"}`}>Score: {score}</p>
                        <br />
                        <p>
                            {description}
                        </p>
                        <br />
                        <div className="flex space-x-2">
                            <div id='tooltip_trigger' className='relative flex justify-center z-10 max-w-min'>
                                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                    <button id="download" className="px-2 py-1 border bg-opacity-80 rounded-[5px] hover:bg-binusmaya hover:border-binusmaya transition-all" type="button">
                                        <svg id="download_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </a>
                                <div id='tooltip_download' className='bg-binusmaya absolute px-2 py-1 rounded-lg top-[43px] drop-shadow-xl whitespace-nowrap'>
                                    Download project specs
                                </div>
                            </div>
                            <div id='tooltip_trigger' className='relative flex justify-center z-10 max-w-min'>
                                <Link href={'/project/' + project_id}>
                                    <button id="view_project" className="px-2 py-1 border bg-opacity-80 rounded-[5px] hover:bg-binusmaya hover:border-binusmaya transition-all" type="button">
                                        <svg id="view_project_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </Link>
                                <div id='tooltip_download' className='bg-binusmaya absolute px-2 py-1 rounded-lg top-[43px] drop-shadow-xl whitespace-nowrap'>
                                    View project
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="border-b opacity-50"></div> */}
            </div>
            <div className="px-10 xtra_large:px-56">
                <div className="border-b border-b-white/30"></div>
            </div>
        </div>
    )
}

export default Card; 