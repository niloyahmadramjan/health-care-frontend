import type { User } from "./user.type";

export interface DoctorApplicationData {
  user: {
    name: string;
    email: string;
  };
  doctor: {
    specialization: string;
    licenseNumber: string;
    qualifications: string;
    experienceYears: number;
    contactNumber: string;
    address: string;
    consultationFee: number | undefined;
    bio: string;
  };
}

export interface DoctorApplicationPayload {
  resume: File;
  additionalFiles: File[];
  data: DoctorApplicationData;
}

export type DoctorVerificationStatus = "PEDDING"| "APPROVED"| "REJECTED"

export interface Doctor {
  id: string
  name: string
  email: string
  address: string | null
  specialization: string
  licenseNumber: string
  qualifications: string
  experienceYears: number
  bio: string | null
  consultationFee: string
  contactNumber: string | number | null
  verificationStatus: DoctorVerificationStatus
  rejectionReason: string | null
  reviewedBy: string | null
  reviewedAt: string | null
  resume: string | null
  resumePublicId: string
  additionalFiles?: {imageUrl: string,imagePublicId: string }
  isDeleted: boolean
  deletedAt: null | string
  createdAt: string
  updatedAt: string
  userId: string
  user: User
}