"use client";
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
import type { Doctor } from "@/types";

function DoctorApprovalTable() {
  const { data } = useSuspenseGetAllDoctors();
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
              <TableCell className="text-right">
                <Button variant="outline">Review</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DoctorApprovalTable;
