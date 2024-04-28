import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FolderType } from "./page"
import Link from "next/link"

 

const FolderList = ({folder}:{folder:FolderType}) => {
  return (
    
        <Card className="">
    <CardHeader>
      <CardTitle>{folder.name}</CardTitle>
      <CardDescription>Please click on view now button view the pictures present in {folder.name}</CardDescription>
    </CardHeader>
    
    <CardFooter className="flex justify-end">
      <Link href={`/album/${folder.name}`}>
      <Button>View Album</Button>
      </Link>
    </CardFooter>
  </Card>

  )
}

export default FolderList