"use cleint"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface props {
  selectedId: string
  onClose:()=> void
}

function DoctorReviewSheet({selectedId,onClose}: props) {
  return (
   <Sheet open={!!selectedId} onOpenChange={()=> onClose()}>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>This action cannot be undone.</SheetDescription>
    </SheetHeader>
    Doctor Id {selectedId}
  </SheetContent>
</Sheet>
  )
}

export default DoctorReviewSheet