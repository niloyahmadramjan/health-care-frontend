import DoctorApprovalTabs from "@/components/modules/doctor-approval/doctor-approval-tabs";

function page() {
  return (
    <div >
      <div className="py-5 px-2">
        <h1>Doctor approval</h1>
        <p>Please review and make sure the given data is real.</p>
      </div>
      <DoctorApprovalTabs />
    </div>
  );
}

export default page;
