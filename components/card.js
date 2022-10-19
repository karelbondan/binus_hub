import Image from "next/image"
import default_img from "../public/images/default_icon.jpg"

export default function Card({icon, project_name, submission_date, score, description, download_link, viewer, student_ids}) {
    let binus_staff = viewer // will later be changed to be equals to viewer; guest or student/lecturer and their ids
    let staff_ids = student_ids // will later be changed to be equals to student_ids which is array
    console.log(staff_ids.includes(binus_staff))
    console.log(!binus_staff)
    return (
        <div>
            <div className="px-10 py-5 space-y-5 hover:bg-pronhub_light transition-colors">
                <div className="px-10 flex space-x-10 items-center xtra_large:px-[300px]">
                    <div className="max-w-[140px] min-w-[140px]">
                        <Image src={icon ? icon : default_img} />
                    </div>
                    <div className="">
                        <p className={`text-2xl ${binus_staff && staff_ids.includes(binus_staff) ? "" : "hidden"}`}>{project_name} - 📝{score}</p>
                        <p className={`text-2xl ${!binus_staff || !staff_ids.includes(binus_staff) ? "" : "hidden"}`}>{project_name}</p>
                        <p className="text-sm">{submission_date}</p>
                        <br />
                        <p>
                            {description}
                        </p>
                        <br />
                        <button className="px-2 py-1 border bg-opacity-80 rounded-[5px] hover:bg-pronhub_yellow hover:border-pronhub_yellow hover:text-black transition-colors" type="button" onclick={`"location.href=${download_link}"`}>Download project</button>
                    </div>
                </div>
                {/* <div className="border-b opacity-50"></div> */}
            </div>
            <div className="px-10 xtra_large:px-56">
                <div className="border-b"></div>
            </div>
        </div>
    )
}