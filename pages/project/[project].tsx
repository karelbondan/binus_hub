import default_img from "../../public/images/default_icon.jpg";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Project = ({ project_name, score, student_ids, description }) => {
    let project = "Project Name";
    let skor = 97;
    let stdid = [{ name: 'John', id: 1 }, { name: 'Andersen', id: 2 }, { name: 'Alex', id: 3 }, { name: 'Robert', id: 4 }, { name: 'Despacito', id: 5 }];
    return (
        <div className="very_small:text-sm large:text-base">
            <div className="text-white bg-pronhub min-h-[100vh] py-14 very_small:px-14 flex very_small:space-y-10 very_small:flex-col medium:flex-row medium:space-y-0 medium:space-x-10 xtra_large:px-44">
                <div id="image_project_preview" className="flex items-center justify-center medium:max-w-[200px] medium:min-w-[200px] large:max-w-[300px] large:min-w-[300px]">
                    <img alt="" className="rounded-xl disable_img_drag disable_selection" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Sin_foto.svg/450px-Sin_foto.svg.png?20060902150340"} />
                </div>
                <div className="space-y-2 flex flex-col justify-center">
                    <p className="font-bold very_small:text-4xl large:text-5xl">{project}</p>
                    <div>
                        <p className="project_name">27/10/2022</p>
                        <div className="font-semibold flex space-x-1">
                            <p>By </p>
                            {stdid.map((ids: any) =>
                                <div key={ids.id} className="cursor-pointer">
                                    <Link href={'/profile/' + ids.id}>
                                        <p>{ids.id === stdid.at(-1).id ? ids.name : ids.name + ','}</p>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <p className="department">Department of Computer Science, Web Development and Security</p>
                        <p className="score font-semibold">Score: {skor}</p>
                    </div>
                    <br />
                    <p className="description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam nostrum fugiat totam dolor facilis itaque at soluta quia dignissimos laborum corrupti, libero, eaque dolorum cupiditate assumenda facere deserunt neque veniam. Vitae necessitatibus culpa incidunt nemo, atque nam commodi facere exercitationem mollitia molestiae, tempora magnam. Officia architecto laudantium quia provident recusandae vitae, laborum distinctio nisi deleniti rem possimus assumenda magnam corporis perspiciatis vero minus eum! Dolore rerum sequi nam ab quas sit molestiae omnis eius aut, nisi laudantium alias, cum quam nostrum minus culpa libero labore, suscipit recusandae quidem quia ducimus in! Laboriosam modi, ullam ad numquam dicta magni maiores odio.
                    </p>
                    <br />
                    <br />
                    <div className="flex space-x-3 items-center justify-center">
                        <div id='tooltip_trigger' className='relative flex justify-center z-10 max-w-min'>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <button id="download" className="px-3 py-2 border bg-opacity-80 rounded-[5px] hover:bg-binusmaya hover:border-binusmaya transition-all" type="button">
                                    <svg id="download_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </a>
                            <div id='tooltip_download' className='bg-binusmaya absolute px-2 py-1 rounded-lg top-[50px] drop-shadow-xl whitespace-nowrap'>
                                Download project specs
                            </div>
                        </div>
                        <div id='tooltip_trigger' className='relative flex justify-center z-10 max-w-min'>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <button className="px-3 py-1 border bg-opacity-80 rounded-[5px] hover:bg-binusmaya hover:border-binusmaya transition-all">
                                    Fb
                                </button>
                            </a>
                            <div id='tooltip_download' className='bg-binusmaya absolute px-2 py-1 rounded-lg top-[50px] drop-shadow-xl whitespace-nowrap'>
                                Share on Facebook
                            </div>
                        </div>
                        <div id='tooltip_trigger' className='relative flex justify-center z-10 max-w-min'>
                            <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
                                <button className="px-3 py-1 border bg-opacity-80 rounded-[5px] hover:bg-binusmaya hover:border-binusmaya transition-all">
                                    WA
                                </button>
                            </a>
                            <div id='tooltip_download' className='bg-binusmaya absolute px-2 py-1 rounded-lg top-[50px] drop-shadow-xl whitespace-nowrap'>
                                Share on Whatsapp
                            </div>
                        </div>
                        <div id='tooltip_trigger' className='relative flex justify-center z-10 max-w-min'>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <button className="px-3 py-1 border bg-opacity-80 rounded-[5px] hover:bg-binusmaya hover:border-binusmaya transition-all">
                                    Twit
                                </button>
                            </a>
                            <div id='tooltip_download' className='bg-binusmaya absolute px-2 py-1 rounded-lg top-[50px] drop-shadow-xl whitespace-nowrap'>
                                Share on Twitter
                            </div>
                        </div>
                    </div>
                    <p className="text-white/30 text-center">Tip: You can press each person&apos;s names and view their profiles</p>
                </div>
            </div>
        </div>
    )
}

export default Project;