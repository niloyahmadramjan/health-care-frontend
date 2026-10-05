"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useApproveDoctor, useGetAllDoctors } from "@/hooks";
import type { ApproveDoctorPayload, IDoctorParams } from "@/types";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

interface Props extends IDoctorParams {
  selectedId: string;
  onClose: () => void;
}

function DoctorReviewSheet({ selectedId, onClose, ...params }: Props) {
  const { data } = useGetAllDoctors(params);

  const {mutate: verify, isPending} = useApproveDoctor()
  const [confirmRejection, setConfrimRejection] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const selectedDoctor = data?.data?.find((doctor) => doctor.id === selectedId);


  const handleClose = () => {
    setConfrimRejection(false);
    setRejectionReason("");
    onClose();
  };
  const handleReviewAction = (status: "APPROVED" | "REJECTED") => {
    const reviewData: ApproveDoctorPayload = {
      doctorId: selectedId,
      verificationStatus: status,
      rejectionReason: rejectionReason,
    };
    verify(reviewData, {
      onSuccess: (res)=>{
        alert("success")
        console.log(res)
         handleClose()
      },
      onError: (err)=>{
        alert("error")
        console.log(err)
      }
    })

    handleClose();
  };

  return (
    <Sheet open={!!selectedId} onOpenChange={onClose}>
      <SheetContent
        side="left"
        className="w-full p-3 overflow-y-auto sm:max-w-md"
      >
        <SheetHeader>
          <SheetTitle>Review Doctor</SheetTitle>

          <SheetDescription>
            Review the doctor information before taking action.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-5">
          {/* Doctor Name */}
          <div>
            <p className="text-sm text-muted-foreground">Doctor Name</p>

            <p className="mt-1 font-medium">{selectedDoctor?.name || "N/A"}</p>
          </div>

          <Separator />

          {/* Email */}
          <div>
            <p className="text-sm text-muted-foreground">Email</p>

            <p className="mt-1 font-medium">{selectedDoctor?.email || "N/A"}</p>
          </div>

          <Separator />

          {/* Contact */}
          <div>
            <p className="text-sm text-muted-foreground">Contact Number</p>

            <p className="mt-1 font-medium">
              {selectedDoctor?.contactNumber || "N/A"}
            </p>
          </div>

          <Separator />

          {/* Address */}
          <div>
            <p className="text-sm text-muted-foreground">Address</p>

            <p className="mt-1 font-medium">
              {selectedDoctor?.address || "N/A"}
            </p>
          </div>

          <Separator />

          {/* Experience + Fee */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Experience</p>

              <p className="mt-1 font-medium">
                {selectedDoctor?.experienceYears
                  ? `${selectedDoctor.experienceYears} years`
                  : "N/A"}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Consultation Fee</p>

              <p className="mt-1 font-medium">
                {selectedDoctor?.consultationFee
                  ? `৳${selectedDoctor.consultationFee}`
                  : "N/A"}
              </p>
            </div>
          </div>

          <Separator />

          {/* License */}
          <div>
            <p className="text-sm text-muted-foreground">License Number</p>

            <p className="mt-1 font-medium">
              {selectedDoctor?.licenseNumber || "N/A"}
            </p>
          </div>

          <Separator />

          {/* Status */}
          <div>
            <p className="text-sm text-muted-foreground">Verification Status</p>

            <div className="mt-2">
              <Badge variant="secondary">
                {selectedDoctor?.verificationStatus || "N/A"}
              </Badge>
            </div>
          </div>

          <Separator />

          {/* Bio */}
          <div>
            <p className="text-sm text-muted-foreground">Bio</p>

            <p className="mt-1 text-sm leading-6">
              {selectedDoctor?.bio || "No bio available."}
            </p>
          </div>

          {/* Actions */}
          {confirmRejection ? (
            <div className="space-y-3">
              <h3>Write the rejection reason</h3>
              <Textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
              />
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={handleClose}>
                  close
                </Button>
                <Button
                  disabled={!rejectionReason}
                  onClick={() => handleReviewAction("REJECTED")}
                  variant="destructive"
                >
                  Confirm Rejection
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex justify-end gap-2 pt-4">
              <Button
                onClick={() => setConfrimRejection(true)}
                variant="destructive"
              >
                Reject
              </Button>

              <Button
                onClick={() => handleReviewAction("APPROVED")}
                variant="default"
              >
                Approve
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default DoctorReviewSheet;
