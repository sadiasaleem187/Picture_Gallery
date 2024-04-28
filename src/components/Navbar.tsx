"use client"
import {Avatar,AvatarFallback,AvatarImage,} from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className='flex-col md:flex'>
    
        <div className='border-b'>
            <div className='flex h-16 items-center px-4'>
             <Link href="/"><h1 className='text-3xl font-bold tracking-tight '>Picture Gallery</h1></Link>
                <div className='ml-auto flex items-center space-x-4'>
                  <Image src="/avatar.png" height={50} width={50} alt="img"/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar