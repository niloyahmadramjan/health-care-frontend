"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllDoctors } from "@/hooks";

function DoctorApprovalTable() {
  const { data, isPending } = useGetAllDoctors();
  const doctors = data?.data || [];
//   console.log(data)

  if(isPending){
    return <Spinner></Spinner>
  }

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
          {
            doctors.map((doctor: any)=>(
            <TableRow key={doctor.id}>
            <TableCell className="font-medium">{doctor.name}</TableCell>
            <TableCell className="font-medium">{doctor.licenseNumber}</TableCell>
            <TableCell className="font-medium">{doctor.email} </TableCell>
            <TableCell className="font-medium">{doctor.contactNumber ? doctor.contactNumber : "--" }</TableCell>
            <TableCell className="font-medium">{doctor.experienceYears}</TableCell>
            <TableCell className="text-right">
              <Button variant="outline">Review</Button>
            </TableCell>
          </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
}

export default DoctorApprovalTable;
