import cloudinary from "cloudinary"
import FolderList from "./folderList"
export interface FolderType{
  name:string,
  path:string
}
const Page =async () => {
    const {folders} = (await cloudinary.v2.api.root_folders()) as {
      folders : FolderType[]
    }
  return (
    <div>
        <div className='py-4 px-5'>
    <h1 className='text-3xl font-semibold tracking-tight'>Picture Album</h1>
    </div>
    {/* data folder */}
    <div className="px-5 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-auto">
      {
        folders.map((item,i)=>{
          return(
            <div key={i}>
            <FolderList folder={item} />
    </div>
          )})}

    </div>
    </div>
  )
}

export default Page