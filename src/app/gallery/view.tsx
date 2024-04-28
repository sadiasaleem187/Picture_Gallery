"use client"
import { CldImage } from "next-cloudinary";
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
import { AddTags } from "./action";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import Link from "next/link";
import AlbumDialog from "./albumDialog";

const View = ({src,tag}:{src:string, tag:string[]}) => {
  const [fav,setFav]=useState(tag.includes("favourite"))
  return (
 <div className="relative">
    <CldImage
    className="rounded-sm"
    width="960"
    height="600"
    src={src}
    sizes="100vw"
    alt="Description of my image"
  />
  {/* heart icon */}
  <div className=" absolute top-1 right-1"
  onClick={()=>{
    setFav(!fav)
    AddTags(src,fav)
  }}
  >
    {
      fav ? (<AiFillHeart className="w-8 h-8 cursor-pointer text-red-500" />) : (<AiOutlineHeart className="w-8 h-8 cursor-pointer text-slate-300 hover:text-red-500 duration-300" />)
    }
  </div>
  {/* edit icon */}
  <div className=" absolute top-1 left-1"> 
 
</div>
{/* add to album */}
  <div className="absolute bottom-1 left-1">
    <AlbumDialog imageData={src} />
  </div>
  </div>


  )
}

export default View
