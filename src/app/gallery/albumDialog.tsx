"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { AiFillFolderAdd } from "react-icons/ai";
import { folderCreate } from "./action";
const AlbumDialog = ({imageData}:{imageData:string}) => {
  const [album, setAlbum] = useState("");
  const [open, setOPen] = useState(false);
  return (
    <div>
      {" "}
      <Dialog open={open} onOpenChange={setOPen}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="p-0 m-0">
            <AiFillFolderAdd className="w-8 h-8 cursor-pointer text-slate-300 hover:text-red-500 duration-300" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Picture</DialogTitle>
            <DialogDescription>
              Enter the add name for the picture you want to add the album.
              Click add to album when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Album-name" className="text-right">
                Name
              </Label>
              <Input
                id="Album-name"
                value={album}
                onChange={(e) => {
                  setAlbum(e.target.value);
                }}
                defaultValue="Pedro Duarte"
                placeholder="Album Name Here..."
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={async () => {
                setOPen(false);
                await folderCreate(album , imageData)
              }}
            >
              Add to album
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlbumDialog;
