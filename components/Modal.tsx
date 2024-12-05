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

interface ModalProps{
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function Modal({open, onOpenChange}: ModalProps){
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <p>read only</p>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <button>X</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
