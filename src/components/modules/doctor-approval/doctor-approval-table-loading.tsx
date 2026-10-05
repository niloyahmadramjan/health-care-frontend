import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'


function DoctorApprovalTableLoading() {
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
          {[1,2,3].map((doctor) => (
            <TableRow key={doctor}>
              <TableCell colSpan={6}><Skeleton className='h-5 w-100'/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default DoctorApprovalTableLoading