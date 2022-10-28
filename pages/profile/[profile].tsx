import Link from "next/link";
import default_profile from '../../public/images/default_profile.jpg';
import Image from "next/image";
import Card from "../../components/card";

const Profile = () => {
    return (
        <div className="px-10 py-10 text-white bg-pronhub min-h-[100vh] flex flex-col items-center justify-center space-y-6">
            <div className="min-w-[500px] max-w-[500px] flex items-center justify-center">
                <img alt="" src={'https://i0.wp.com/researchictafrica.net/wp/wp-content/uploads/2016/10/default-profile-pic.jpg?ssl=1'} className="rounded-full" />
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl font-bold">BOKUNONAWA.DIOBRANDO</p>
                <p className="">Computer science student</p>
                <div className="flex  space-x-3 items-center justify-center pt-2">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <button className="max-w-[25px]">
                            <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" />
                        </button>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <button className="max-w-[25px]">
                            <img alt="" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
                        </button>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <button className="max-w-[25px]">
                            <img alt="" src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-0902F48837-seeklogo.com.png" />
                        </button>
                    </a>
                    <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">
                        <button className="max-w-[25px]">
                            <img alt="" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" />
                        </button>
                    </a>
                </div>
            </div>
            <p className="max-w-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, exercitationem dolores. Repellendus, quas minus molestias nobis quia consectetur laudantium ab.</p>
            <p className="max-w-xl text-center">Here are projects that I were involved in:</p>
            <div className="space-y-3">
                <Card key={1} project_id={1} icon="" project_name={"Project Name"} submission_date={"10/19/2022"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacus eu dolor semper, et mattis nibh lobortis. Morbi ac nisi mi. Curabitur dapibus enim eget feugiat cursus.'} score={"92"} download_link="https://www.google.com" viewer={5} student_ids={[1, 2, 3, 4, 5]} />
                <Card key={2} project_id={2} icon="" project_name={"Project Name"} submission_date={"10/19/2022"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacus eu dolor semper, et mattis nibh lobortis. Morbi ac nisi mi. Curabitur dapibus enim eget feugiat cursus.'} score={"82"} download_link="https://www.google.com" viewer={5} student_ids={[1, 249, 2, 5]} />
            </div>
        </div>
    )
}

export default Profile;