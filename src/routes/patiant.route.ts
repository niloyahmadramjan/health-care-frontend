
export const patientRoute = [
  {
    title: "Dashboard",
    url: "/patient",
    items: [],
  },

  {
    title: "Appointments",
    url: "/patient/appointments",
    items: [
      {
        title: "My Appointments",
        url: "/patient/appointments",
      },
      {
        title: "Book Appointment",
        url: "/patient/appointments/book",
      },
    ],
  },

  {
    title: "Doctors",
    url: "/patient/doctors",
    items: [
      {
        title: "Find Doctors",
        url: "/patient/doctors",
      },
      {
        title: "Favorite Doctors",
        url: "/patient/doctors/favorites",
      },
    ],
  },

  {
    title: "Prescriptions",
    url: "/patient/prescriptions",
    items: [],
  },

  {
    title: "Medical Records",
    url: "/patient/medical-records",
    items: [],
  },

  {
    title: "Payments",
    url: "/patient/payments",
    items: [
      {
        title: "Payment History",
        url: "/patient/payments/history",
      },
    ],
  },

  {
    title: "Profile",
    url: "/patient/profile",
    items: [
      {
        title: "Personal Information",
        url: "/patient/profile",
      },
      {
        title: "Account Settings",
        url: "/patient/profile/settings",
      },
    ],
  },
];
