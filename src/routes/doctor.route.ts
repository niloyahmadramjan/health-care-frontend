
export const doctorRoute = [
  {
    title: "Dashboard",
    url: "/doctor",
    items: [],
  },

  {
    title: "Appointments",
    url: "/doctor/appointments",
    items: [
      {
        title: "All Appointments",
        url: "/doctor/appointments",
      },
      {
        title: "Pending",
        url: "/doctor/appointments/pending",
      },
      {
        title: "Completed",
        url: "/doctor/appointments/completed",
      },
    ],
  },

  {
    title: "Patients",
    url: "/doctor/patients",
    items: [
      {
        title: "My Patients",
        url: "/doctor/patients",
      },
      {
        title: "Patient Records",
        url: "/doctor/patients/records",
      },
    ],
  },

  {
    title: "Prescriptions",
    url: "/doctor/prescriptions",
    items: [
      {
        title: "All Prescriptions",
        url: "/doctor/prescriptions",
      },
      {
        title: "Create Prescription",
        url: "/doctor/prescriptions/new",
      },
    ],
  },

  {
    title: "Medical Records",
    url: "/doctor/medical-records",
    items: [],
  },

  {
    title: "Availability",
    url: "/doctor/availability",
    items: [
      {
        title: "Schedule",
        url: "/doctor/availability",
      },
      {
        title: "Working Hours",
        url: "/doctor/availability/hours",
      },
    ],
  },

  {
    title: "Profile",
    url: "/doctor/profile",
    items: [
      {
        title: "Professional Profile",
        url: "/doctor/profile",
      },
      {
        title: "Account Settings",
        url: "/doctor/profile/settings",
      },
    ],
  },
];
