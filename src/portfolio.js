/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji"

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Chris Zhang",
  title: "Hello! I'm Chris",
  subTitle: emoji(
    "A motivated and enthusiastic web developer with a passion for web development, seeking a career in the IT industry where previous experience and skills can be put to efficient use. I am constanly striving to learn new technologies and look at ways to exceed company goals and expectations.",
  ),
  resumeLink: "https://drive.google.com/file/d/14D9LT0l1H6LImWzqlV2pVDHgcLA_VHAy/view?usp=sharing",
}

// Your Social Media Link

const socialMediaLinks = {
  gmail: "chris.zhang.cloud@gmail.com",
  github: "https://github.com/KKKRRrisssSS",
  gitlab: "https://gitlab.com/ChrisZhangCloud",
  linkedin: "https://www.linkedin.com/in/chris-zhang1",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
}

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("Develop highly interactive Front end / User Interfaces for the web applications"),
    emoji("Develop Clean and Robust RESTful API"),
    //emoji("Integration of third party services such as  AWS / Digital Ocean"),
    // emoji("Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-envira",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },

  
  
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "Machine Learing",
      fontAwesomeClassname: "fas fa-rocket",
    },
  ],
}

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "University of New South Wales",
      logo: require("./assets/images/UNSW.png"),
      subHeader: "Master of Information Technology",
      duration: "2017 - 2019",
      desc: "",
      descBullets: [
        "Machine Learning and Web Design",
        
      ],
    },
    {
      schoolName: "Australian Technical and Management College",
      logo: require("./assets/images/ATMC.png"),
      subHeader: "Professional Year",
      duration: "2020 - 2021",
      desc: "",
      descBullets: [
        "Critical Thinking and Communication Skills",
        
      ],
    },
  ],
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend - React",
      //progressPercentage: "60%",
    },
    {
      Stack: "Backend - Node.js ",
      progressPercentage: "70%",
    },
    {
      Stack: "DB - MongoDB ",
      progressPercentage: "50%",
    },
    {
      Stack: "DB - MySQL ",
      progressPercentage: "50%",
    },
    {
      Stack: "Infrastructure - AWS",
      progressPercentage: "35%",
    },
    {
      Stack: "iOS - Swift",
      progressPercentage: "70%",
    },
    {
      Stack: "General - Python",
      progressPercentage: "50%",
    },
    {
      Stack: "Algorithm",
      progressPercentage: "40%",
    },
  ],
}

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Internship",
      company: "Warwick Institute of Australia",
      companylogo: require("./assets/images/React.png"),
      date: "Sep 2020 – Jan 2021",
      desc:
        ["Re-designed and developed exsiting API and web application and turned it into a scalable website as one of 2 major full stack in a team of 4.",
        "Implemented RESTful API with NodeJS, .NET core, AWS EC2, AWS S3, AWS Route 53, Mango DB and JWT Token.",
        "Implemented web application with ReactJS, HTML5, CSS3, SASS, Bootstrap 4, Storybook and Responsive Design."]
    },
    // {
    //   role: "Application Developer",
    //   company: "XMind",
    //   companylogo: require("./assets/images/XMind.png"),
    //   date: "Apr 2017 – Oct 2017",
    //   desc: "Developed Lighten for mac, and XMind for iOS. Please check detail on Project section",
    // },
  ],
}

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "jason-den", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
}

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "Building fullstack software for customers using MERN stack",
  projects: [
    {
      title: "Intelligent Assistant for electronic Logbook in Radiology Training",
      subtitle: "",
      description:
        ["Completed the planning, design, development, testing of a medical website which could be used to create Logbook for trainee doctors.",
        "Worked as a frontend developer in a team of four and implemented frontend with Bootstrap 4, JavaScript, ES6, HTML5, CSS3 and JQuery."],
      image: require("./assets/images/project-1.png"),
      link: "https://drive.google.com/file/d/1RFBc1MsBMRMD7Nt_zjK2S3I2bEjVCJVV/view?usp=sharing"
    },
    {
      title: "Personal Website",
      subtitle: "",
      description:
        "built a personal website to show the resume by using the CSS, JavaScript, HTML with responsive design, and it has been deployed on the AWS",
      image: require("./assets/images/project-2.png"),
      link: "https://chriszhangwebsite.s3.ap-southeast-2.amazonaws.com/resume-website/index.html",
    },
  ],
}

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Skills"),
  //subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Frontend",
      subtitle: "HTML5, CSS3, SASS, JavaScript/ES6, ReactJS, Redux, Bootstrap 4, Responsive Design, Media Queries, Flexbox, Webpack, JQuery, Storybook, npm/yarn",

      // title: "Frontend",
      // subtitle: "ReactJS Redux",
      //image: require("./assets/images/AWS-SolArchitect-Associate.png"),
      // footerLink: [
      //   {
      //     name: "Certification",
      //     url: "https://www.youracclaim.com/badges/47916526-6b51-4f89-9c4a-d43ed3827006/public_url",
      //   },
      // ],
    },

    {
      title: "Backend, API and Database",
      subtitle: "NodeJS, ExpressJS, .net core, RESTful API, JSON, PostMan, MySQL, MongoDB",
      //image: require("./assets/images/rocket.jpeg"),
      
        // { name: "", url: "" },
        // { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }

    },
    {
      title: "Build and Cloud Tools",
      subtitle: "Git, Linux, Visual Studio Code, AWS EC2, AWS S3, AWS Route 53",
    },
    {
      title: "Teamwork and others",
      subtitle: "Agile, Scrum, Python, NumPy, Pandas",
    },
  ],
}

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+61-478099095",
  email_address: "chris.zhang.cloud@gmail.com",
}

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
}
