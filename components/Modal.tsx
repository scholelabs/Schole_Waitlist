import { Copy } from "lucide-react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image"

interface ModalProps{
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function Modal({open, onOpenChange}: ModalProps){
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogDescription>
            <div className="text-center">
              <Image src='/modallogo.svg' alt="moda logo" height={500} width={500} />
              <p className="font-semibold text-[20px] leading-7 mt-5">Welcome to the Scholẽ Waitlist </p>
              <p className="font-normal text-[16px] leading-[22px]">We’re glad you’re here. Keep an eye on your inbox! Your early access invitation is coming soon.</p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            {/* <button>X</button> */}
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
