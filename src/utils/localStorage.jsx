

const employees = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "e@e.com",
    password: "1234",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Prepare sales report",
        description: "Generate monthly sales report for review",
        date: "2025-06-01",
        assignTo: "employee1@example.com",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client follow-up",
        description: "Email client regarding pending invoice",
        date: "2025-06-02",
        assignTo: "employee1@example.com",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Team meeting",
        description: "Join project sync call at 10 AM",
        date: "2025-06-03",
        assignTo: "employee1@example.com",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "1234",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Update inventory list",
        description: "Log all incoming materials into system",
        date: "2025-06-01",
        assignTo: "employee2@example.com",
        category: "Inventory",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Warehouse audit",
        description: "Inspect warehouse for stock mismatch",
        date: "2025-06-03",
        assignTo: "employee2@example.com",
        category: "Audit",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      
    ],
  },
  {
    id: 3,
    firstName: "Amit",
    email: "employee3@example.com",
    password: "1234",
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "System backup",
        description: "Run full backup of the database",
        date: "2025-06-04",
        assignTo: "employee3@example.com",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Password reset",
        description: "Reset login credentials for new user",
        date: "2025-06-02",
        assignTo: "employee3@example.com",
        category: "Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Server maintenance",
        description: "Schedule downtime for updates",
        date: "2025-06-05",
        assignTo: "employee3@example.com",
        category: "IT",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "1234",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Employee onboarding",
        description: "Prepare materials for new hires",
        date: "2025-06-01",
        assignTo: "employee4@example.com",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Policy review",
        description: "Update leave policy document",
        date: "2025-06-03",
        assignTo: "employee4@example.com",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Exit interview",
        description: "Conduct exit interview with resigning employee",
        date: "2025-06-04",
        assignTo: "employee4@example.com",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "1234",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Design homepage",
        description: "Create new layout for homepage",
        date: "2025-06-02",
        assignTo: "employee5@example.com",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Review feedback",
        description: "Analyze UI feedback from QA team",
        date: "2025-06-01",
        assignTo: "employee5@example.com",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix layout issue",
        description: "Resolve alignment bug on mobile view",
        date: "2025-06-04",
        assignTo: "employee5@example.com",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "1234",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
 
 