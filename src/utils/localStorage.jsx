const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Design login page",
        description: "Create UI for login screen using Figma",
        date: "2025-07-07",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write unit tests",
        description: "Add unit tests for the auth module",
        date: "2025-07-06",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix header bug",
        description: "Resolve layout issues on smaller screens",
        date: "2025-07-05",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Research deployment options",
        description: "Compare Vercel vs Netlify vs AWS",
        date: "2025-07-03",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "API integration",
        description: "Connect frontend to user API",
        date: "2025-07-06",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update docs",
        description: "Add usage instructions to README",
        date: "2025-07-04",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix signup bug",
        description: "Resolve issue with email validation",
        date: "2025-07-05",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Redesign landing page",
        description: "Apply new color palette and fonts",
        date: "2025-07-01",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write integration tests",
        description: "Test full login flow",
        date: "2025-07-06",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Optimize images",
        description: "Compress assets for faster loading",
        date: "2025-07-02",
        category: "Optimization",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Research SEO",
        description: "Improve meta tags for homepage",
        date: "2025-07-07",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: []
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: []
  },
  {
    id: 6,
    email: "employee6@example.com",
    password: "123",
    tasks: []
  },
  {
    id: 7,
    email: "employee7@example.com",
    password: "123",
    tasks: []
  },
  {
    id: 8,
    email: "employee8@example.com",
    password: "123",
    tasks: []
  },
  {
    id: 9,
    email: "employee9@example.com",
    password: "123",
    tasks: []
  },
  {
    id: 10,
    email: "employee10@example.com",
    password: "123",
    tasks: []
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
    
}