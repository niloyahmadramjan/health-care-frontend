import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DoctorApprovalTable from "./doctor-approval-table";
import { Suspense } from "react";
import DoctorApprovalTableLoading from "./doctor-approval-table-loading";

function DoctorApprovalTabs() {
  return (
    <>
      <Tabs defaultValue="pedding" className="w-200">
        <TabsList>
          <TabsTrigger value="pedding">Pendding</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
          <TabsTrigger value="alldoctor">All Doctor</TabsTrigger>
        </TabsList>
        {/* <TabsContent value="pedding">
          <DoctorApprovalTable />
        </TabsContent>
        <TabsContent value="approved">
          <DoctorApprovalTable />
        </TabsContent>
        <TabsContent value="rejected">
          <DoctorApprovalTable />
        </TabsContent>
        <TabsContent value="alldoctor">
          <DoctorApprovalTable />
        </TabsContent> */}
      </Tabs>
     <Suspense fallback={<DoctorApprovalTableLoading/>}>
       <DoctorApprovalTable />
     </Suspense>
    </>
  );
}

export default DoctorApprovalTabs;
