import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader
} from "@/components/ui/dialog"
import Image from "next/image"

interface ModalProps{
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function Modal({open, onOpenChange}: ModalProps){
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>

      <DialogContent className="md:w-[600px]">
        <DialogHeader>
          <DialogDescription>
            <div className="text-center mx-auto">
              <div className="flex justify-center">
                <Image src='/modallogo.svg' alt="moda logo" height={400} width={300} />
              </div>
              <p className="font-semibold text-[20px] leading-7 mt-5">Welcome to the Scholẽ Waitlist </p>
              <p className="font-normal text-[16px] leading-[22px] mt-5">We’re glad you’re here. Keep an eye on your inbox! Your early access invitation is coming soon.</p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild className="mx-auto my-5">
            <button className="rounded-full py-3 px-10 border border-[#D1D1D1]">Close</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
