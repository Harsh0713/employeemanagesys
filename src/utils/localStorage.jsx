// localStorage.clear()


const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
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
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
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
    firstName: "Saanvi",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
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
  

  // ... keep employees 1 to 3 unchanged
  {
    id: 4,
    firstName: "Vihaan",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Setup CI/CD",
        description: "Configure GitHub Actions for deployment",
        date: "2025-07-07",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Review PR",
        description: "Code review for new feature branch",
        date: "2025-07-06",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Myra",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 0,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Write blog post",
        description: "Document new features in v2.0 release",
        date: "2025-07-05",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix CSS issues",
        description: "Resolve overlapping content bug",
        date: "2025-07-04",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Test dark mode",
        description: "Verify dark mode styling across pages",
        date: "2025-07-03",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Debug navbar glitch",
        description: "Navbar not sticking on scroll",
        date: "2025-07-02",
        category: "Debugging",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 6,
    firstName: "Aditya",
    email: "employee6@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        title: "Improve form validation",
        description: "Add regex checks for email/phone",
        date: "2025-07-06",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix 404 page bug",
        description: "Incorrect routing on broken links",
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
    id: 7,
    firstName: "Aanya",
    email: "employee7@example.com",
    password: "123",
    taskCount: {
      active: 0,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design 404 page",
        description: "Custom design for not-found pages",
        date: "2025-07-04",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix footer misalignment",
        description: "Fix layout issue on mobile",
        date: "2025-07-03",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 8,
    firstName: "Krishna",
    email: "employee8@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        title: "Create onboarding flow",
        description: "Build steps for new user onboarding",
        date: "2025-07-07",
        category: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Add animation to buttons",
        description: "Subtle hover animations",
        date: "2025-07-06",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix crash on login",
        description: "Handle null token issue",
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
    id: 9,
    firstName: "Tanya",
    email: "employee9@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Audit accessibility",
        description: "Run audits for WCAG compliance",
        date: "2025-07-06",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix logo padding",
        description: "Correct spacing around logo in header",
        date: "2025-07-04",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 10,
    firstName: "Yash",
    email: "employee10@example.com",
    password: "123",
    taskCount: {
      active: 0,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Refactor state management",
        description: "Switch from Redux to Zustand",
        date: "2025-07-07",
        category: "Architecture",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix dropdown delay",
        description: "Improve UX responsiveness",
        date: "2025-07-06",
        category: "Frontend",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Complete project report",
        description: "Summary for Q2 sprint results",
        date: "2025-07-05",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Debug toast notification",
        description: "Toast not showing on form submit",
        date: "2025-07-04",
        category: "Debugging",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
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