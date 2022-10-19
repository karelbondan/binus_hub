import Card from "../components/card"

export default function Home() {
  return (
    <div className=' bg-pronhub text-white min-h-[560px]'>
      <div className="pt-5 pb-5 small:px-16 medium:px-40 large:px-60 xtra_large:px-96">
        <form className='flex space-x-4' autoComplete='none' >
          <input type="text" className='w-full px-3 py-2 outline-none focus:border-gray-200 border-b border-gray-200/50 hover:border-gray-200/70 bg-transparent text-gray-300 transition-all' placeholder='Search everything (projects, users, etc.)' />
          <button className='' title="Search!">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>
      <Card key={1} icon="" project_name={"Binusmaya that's not retarded"} submission_date={"10/19/2022"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacus eu dolor semper, et mattis nibh lobortis. Morbi ac nisi mi. Curabitur dapibus enim eget feugiat cursus.'} score={"92"} download_link="https://www.google.com" viewer={5} student_ids={[1, 2, 3, 4, 5]}/>
      <Card key={1} icon="" project_name={"Gojek"} submission_date={"10/19/2022"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacus eu dolor semper, et mattis nibh lobortis. Morbi ac nisi mi. Curabitur dapibus enim eget feugiat cursus.'} score={"82"} download_link="https://www.google.com" viewer={5} student_ids={[1, 249, 2, 5]}/>
      {/* <Card key={1} icon="" project_name={"Tokopedia"} submission_date={"10/19/2022"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacus eu dolor semper, et mattis nibh lobortis. Morbi ac nisi mi. Curabitur dapibus enim eget feugiat cursus.'} score={"90"} download_link="https://www.google.com" viewer={5} student_ids={[1, 2, 4]}/> */}
      <Card key={1} icon="" project_name={"I hate next js"} submission_date={"10/19/2022"} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis lacus eu dolor semper, et mattis nibh lobortis. Morbi ac nisi mi. Curabitur dapibus enim eget feugiat cursus.'} score={"88"} download_link="https://www.google.com" viewer={5} student_ids={[1, 902, 222, 3421]}/>
    </div>
  )
}
