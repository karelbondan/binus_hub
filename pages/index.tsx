import Card from "../components/card";
import WaveDivider from "../public/images/wave_divider_index.svg";
import Image from "next/image";
import logo_2 from "../public/images/logo2.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="very_small:text-sm medium:text-base">
      <div className='bg-pronhub text-white min-h-[100vh]'>
        <div className="h-[500px] px-8 items-center justify-center flex very_small:space-y-16 very_small:flex-col large:space-x-7 large:space-y-0 large:flex-row">
          <p className="very_small:text-[70px] medium:text-[90px] large:text-[150px]">👋</p>
          <div className="">
            <p className="font-pacifico very_small:text-4xl large:text-5xl">Welcome to Binusian Hub!</p>
            <br />
            <p className="max-w-2xl">Hello! Welcome to Binusian Hub. This is a portfolio website dedicated to showcase projects made by BINUS students over the years. You can start by scrolling the newest uploaded projects below or by searching anything you want, either by project name, student names, etc.</p>
          </div>
        </div>
        <WaveDivider className='' />
        <div className="flex items-center justify-center bg-pronhub_navbar">
          <p className="pt-5 pb-5 font-pacifico very_small:text-4xl large:text-5xl">Projects</p>
        </div>
        <div className="pt-5 pb-5 small:px-16 medium:px-40 large:px-60 xtra_large:px-96 bg-pronhub_navbar">
          <form className='flex space-x-4 py-1 rounded-xl' autoComplete='none' >
            <input type="text" className='w-full px-3 py-2 outline-none focus:border-white border-b border-white/50 hover:border-white/70 bg-transparent text-white transition-all' placeholder='Search everything (projects, users, etc.)' />
            {/* <input type="text" className='w-full py-2 outline-none focus:border-white  border-white/50 hover:border-white/70 bg-transparent text-white transition-all' placeholder='Search everything (projects, users, etc.)' /> */}
            <button className='' title="Search!">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>
        <div className="pb-[50px] bg-pronhub_navbar space-y-3 flex flex-col justify-center items-center very_small:px-3 large:px-0">
          <Card key={1} project_id={1} icon="" project_name={"Project Name"} submission_date={"10/19/2022"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacus eu dolor semper, et mattis nibh lobortis. Morbi ac nisi mi. Curabitur dapibus enim eget feugiat cursus.'} score={"92"} download_link="https://www.google.com" viewer={5} student_ids={[1, 2, 3, 4, 5]} />
          <Card key={2} project_id={2} icon="" project_name={"Project Name"} submission_date={"10/19/2022"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacus eu dolor semper, et mattis nibh lobortis. Morbi ac nisi mi. Curabitur dapibus enim eget feugiat cursus.'} score={"82"} download_link="https://www.google.com" viewer={5} student_ids={[1, 249, 2, 5]} />
          <Card key={3} project_id={3} icon="" project_name={"Project Name"} submission_date={"10/19/2022"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacus eu dolor semper, et mattis nibh lobortis. Morbi ac nisi mi. Curabitur dapibus enim eget feugiat cursus.'} score={"88"} download_link="https://www.google.com" viewer={5} student_ids={[1, 902, 222, 3421]} />
          <Card key={4} project_id={4} icon="" project_name={"Project Name"} submission_date={"10/19/2022"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacus eu dolor semper, et mattis nibh lobortis. Morbi ac nisi mi. Curabitur dapibus enim eget feugiat cursus.'} score={"92"} download_link="https://www.google.com" viewer={5} student_ids={[1, 2, 3, 4, 5]} />
          <Card key={5} project_id={5} icon="" project_name={"Project Name"} submission_date={"10/19/2022"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacus eu dolor semper, et mattis nibh lobortis. Morbi ac nisi mi. Curabitur dapibus enim eget feugiat cursus.'} score={"82"} download_link="https://www.google.com" viewer={5} student_ids={[1, 249, 2, 5]} />
          <Card key={6} project_id={6} icon="" project_name={"Project Name"} submission_date={"10/19/2022"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacus eu dolor semper, et mattis nibh lobortis. Morbi ac nisi mi. Curabitur dapibus enim eget feugiat cursus.'} score={"88"} download_link="https://www.google.com" viewer={5} student_ids={[1, 902, 222, 3421]} />
        </div>
      </div>
    </div>
  )
}
