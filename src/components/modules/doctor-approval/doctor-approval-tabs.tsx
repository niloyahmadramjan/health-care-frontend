"use client";
// biome-ignore assist/source/organizeImports: <explanation>
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DoctorApprovalTable from "./doctor-approval-table";
import { Suspense, useState } from "react";
import DoctorApprovalTableLoading from "./doctor-approval-table-loading";
import type { DoctorVerificationStatus, IDoctorParams } from "@/types";
import { Input } from "@/components/ui/input";
import DoctorReviewSheet from "./doctor-reviews-sheet";

const verificationStatus: ["ALL" | DoctorVerificationStatus, string][] = [
  ["APPROVED", "Approved"],
  ["PENDING", "Pedding"],
  ["REJECTED", "Rejected"],
  ["ALL", "All"],
];

function DoctorApprovalTabs() {
  const [tab, setTab] = useState<"ALL" | DoctorVerificationStatus>("ALL");
  const [selectedId, setSelectedId] = useState("");

  const queryParams: IDoctorParams = {
    page: 1,
    limit: 10,
    ...(tab === "ALL" ? {} : { verificationStatus: tab }),
  };

  return (
    <>
      <div className="flex flex-col-reverse gap-5 md:flex md:flex-row justify-between p-3">
        <div>
          <Input type="search" placeholder="search by name or email" />
        </div>
        <div>
          <Tabs value={tab} onValueChange={(value) => setTab(value)}>
            <TabsList>
              {verificationStatus.map(([value, labal]) => (
                <TabsTrigger key={value} value={value}>
                  {labal}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
      <Suspense fallback={<DoctorApprovalTableLoading />}>
        <DoctorApprovalTable {...queryParams} handleReview={setSelectedId} />
      </Suspense>
      <DoctorReviewSheet
        selectedId={selectedId}
        onClose={() => setSelectedId("")}
      />
    </>
  );
}

export default DoctorApprovalTabs;
