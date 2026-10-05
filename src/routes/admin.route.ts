
export const adminRoute =  [
    {
      title: "Dashboard",
      url: "/admin",
      items: [],
    },

    {
      title: "Approve Doctor",
      url: "/admin/approve-doctor",
      items: [
        {
          title: "All Patients",
          url: "/admin/patients",
        },
        {
          title: "Patient Records",
          url: "/admin/patients/records",
        },
      ],
    },

    {
      title: "Doctors",
      url: "/admin/doctors",
      items: [
        {
          title: "All Doctors",
          url: "/admin/doctors",
        },
        {
          title: "Add Doctor",
          url: "/admin/doctors/new",
        },
      ],
    },

    {
      title: "Appointments",
      url: "/admin/appointments",
      items: [
        {
          title: "All Appointments",
          url: "/admin/appointments",
        },
        {
          title: "Pending",
          url: "/admin/appointments/pending",
        },
        {
          title: "Completed",
          url: "/admin/appointments/completed",
        },
      ],
    },

    {
      title: "Departments",
      url: "/admin/departments",
      items: [],
    },

    {
      title: "Payments",
      url: "/admin/payments",
      items: [
        {
          title: "Transactions",
          url: "/admin/payments/transactions",
        },
        {
          title: "Payment History",
          url: "/admin/payments/history",
        },
      ],
    },

    {
      title: "Settings",
      url: "/admin/settings",
      items: [
        {
          title: "Profile",
          url: "/admin/settings/profile",
        },
        {
          title: "Account Settings",
          url: "/admin/settings/account",
        },
      ],
    },
  ]