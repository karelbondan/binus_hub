import Link from "next/link";
import default_profile from '../../public/images/default_profile.jpg';
import Image from "next/image";
import Card from "../../components/card";

const Profile = () => {
    return (
        <div className="px-10 py-10 text-white bg-pronhub min-h-[100vh] flex flex-col items-center justify-center space-y-6">
            <div className="min-w-[500px] max-w-[500px] flex items-center justify-center">
                <Image src={default_profile} className="rounded-full" />
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl font-bold">BOKUNONAWA.DIOBRANDO</p>
                <p className="">Computer science student</p>
            </div>
            <p className="max-w-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, exercitationem dolores. Repellendus, quas minus molestias nobis quia consectetur laudantium ab.</p>
            <div className="flex  space-x-2 items-center justify-center">
                <button>
                    fb
                </button>
                <button>
                    linkedin
                </button>
                <button>
                    twitter
                </button>
                <button>
                    email
                </button>
            </div>
            <div>
                <Card key={1} project_id={1} icon="" project_name={"Binusmaya v3.0"} submission_date={"10/19/2022"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacus eu dolor semper, et mattis nibh lobortis. Morbi ac nisi mi. Curabitur dapibus enim eget feugiat cursus.'} score={"92"} download_link="https://www.google.com" viewer={5} student_ids={[1, 2, 3, 4, 5]} />
                <Card key={2} project_id={2} icon="" project_name={"Gojek"} submission_date={"10/19/2022"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacus eu dolor semper, et mattis nibh lobortis. Morbi ac nisi mi. Curabitur dapibus enim eget feugiat cursus.'} score={"82"} download_link="https://www.google.com" viewer={5} student_ids={[1, 249, 2, 5]} />
            </div>
        </div>
    )
}

export default Profile;