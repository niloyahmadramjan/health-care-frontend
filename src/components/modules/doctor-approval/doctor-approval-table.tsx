"use client";
// biome-ignore assist/source/organizeImports: <explanation>
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSuspenseGetAllDoctors } from "@/hooks";
import type { Doctor, IDoctorParams } from "@/types";
import type { Dispatch, SetStateAction } from "react";
interface Props extends IDoctorParams {
  handleReview: Dispatch<SetStateAction<string>>;
}

function DoctorApprovalTable({ handleReview, ...params }: Props) {
  const { data } = useSuspenseGetAllDoctors(params);
  const doctors = data?.data;
  //   console.log(data)

  return (
    <div className="border-2  rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-100">Name</TableHead>
            <TableHead className="w-100">License No. </TableHead>

            <TableHead className="w-100">Gmail</TableHead>
            <TableHead className="w-100">Phone</TableHead>
            <TableHead className="w-100">experienceYears</TableHead>
            <TableHead className="w-100">Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {doctors.map((doctor: Doctor) => (
            <TableRow key={doctor.id}>
              <TableCell className="font-medium">{doctor.name}</TableCell>
              <TableCell className="font-medium">
                {doctor.licenseNumber}
              </TableCell>
              <TableCell className="font-medium">{doctor.email} </TableCell>
              <TableCell className="font-medium">
                {doctor.contactNumber ? doctor.contactNumber : "--"}
              </TableCell>
              <TableCell className="font-medium">
                {doctor.experienceYears}
              </TableCell>
              <TableCell className="font-medium">
                {doctor.verificationStatus}
              </TableCell>
              <TableCell className="text-right">
              {
                doctor.user.emailVerified ? (
                   <Button
                  disabled={
                    doctor.verificationStatus === "APPROVED" ||
                    doctor.verificationStatus === "REJECTED"
                  }
                  onClick={() => handleReview(doctor.id)}
                  variant="outline"
                >
                  Review
                </Button>
                ):( <Button
                  disabled
                  variant="destructive"
                >
                  Email Not Verify
                </Button>)
              }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DoctorApprovalTable;
