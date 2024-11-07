//Internshala Imports
import P1mainImg from "../assets/P1/rApp (1) 1.png";
import P1Img1 from "../assets/P1/2-internshala.png";
import P1Img2 from "../assets/P1/2-inside-frame.png";
import P1Img3 from "../assets/P1/4-internshala-frame.png";

//PearMock import
import P2mainImg from "../assets/P2/main-pearmock.png";
import P2Img1 from "../assets/P2/pearmock-banner-1.png";
import P2Img2 from "../assets/P2/pearmock-banner-2.png";
import P2Img3 from "../assets/P2/pearmock-banner-3.png";

// veance
import P3mainImg from "../assets/P3/main-veance.png";
import P3Img1 from "../assets/P3/veance-banner-1.png";
// image 2 is not needed
import P3Img3 from "../assets/P3/veance-banner-3.png";

//hive
import P4mainImg from "../assets/P4/main-hive.png";
import P4Img1 from "../assets/P4/hive-banner-1.png";
import P4Img2 from "../assets/P4/hive-banner-2.png";
import P4Img3 from "../assets/P4/hive-banner-3.png";

const data = [
  {
    bar: {
      heading: "Internshala’s Android Application",
      subHeading:
        "The Internshala Android application connects students with internships and training opportunities to enhance their skills and career prospects.",
    },
    targetAudience: ["Students", "Young Professional", "Employers"],
    problem: `There has been a decrease in students registering for sponsored internships through external links. <strong>Fewer students are onboarding from these links.</strong>`,

    role: "I was hired as the design intern on the team, working under the product team.",
    process: [
      "Problem Definition and Research",
      "Ideation and Concept Development",
      "Prototyping",
      "Testing and Iteration",
      "Implementation and Launch",
      "Evaluation and Optimization",
    ],

    mainImg: P1mainImg,
    Img1: P1Img1,
    Img2: P1Img2,
    Img3: P1Img3,
    lineColor: "#00A5EC",
    border: "",
    figmaLink: "",
  },

  {
    bar: {
      heading: "PEARMOCK (KUBERANIX PRODUCT)",
      subHeading:
        "Pearmock is a community-driven platform that helps aspiring product managers prepare for interviews through practice, and skill development.",
    },
    targetAudience: [
      "College students preparing for PM.",
      "Young Professional",
    ],
    problem: `Aspiring product managers often lack practical, real-world interview preparation and peer support, hindering their ability to secure competitive roles.`,

    role: "I was hired as a design intern on the team and developed the product from the scratch.",
    process: [
      "Ideation and Vision",
      "Rapid Prototyping",
      "Final Design",
      "Intern END................................",
      "Some Re-design work",
    ],

    mainImg: P2mainImg,
    Img1: P2Img1,
    Img2: P2Img2,
    Img3: P2Img3,

    lineColor: "#B1C923",
    border: "1px solid #FFFFFF66",
  },

  {
    bar: {
      heading: "VANCE (REQUIRETMENT TEST)",
      subHeading:
        "Vance is a financial technology company that provides banking and investment services.",
    },
    targetAudience: [
      "Young Adults (18-35 years)",
      "Middle-aged Adults (36-55 years)",
    ],
    problem: `The landing page requires a redesign to enhance its effectiveness in conveying the benefits of our service and to increase the conversion rate of visitors to waitlist sign-ups. Your task is to revamp the page for both mobile and desktop layouts, with a keen eye on user experience and conversion optimization.`,

    role: "To redesign the waiting list experience for VANCE users in order to boost user engagement.",
    process: [
      "Understanding problem statement",
      "Defining basic structure ",
      "Research and data based decision",
      "Iterating and finalizing the overall structure",
      "UI inspiration ..............................................................",
      "UI inspiration ..............................................................",
      "UI inspiration ..............................................................",
      "Final Design",
      "Offer Letter",
    ],

    mainImg: P3mainImg,
    Img1: P3Img1,
    Img2: null,
    Img3: P3Img3,

    lineColor: "#9E96D8",
    border: "1px solid #FFFFFF66",
  },

  {
    bar: {
      heading: "HOMEHIVE (SELF PROJECT)",
      subHeading:
        "HOMEHIVE connects tenants with landlords, allowing property management and issue resolution for both parties.",
    },
    targetAudience: ["Tenants", "Landlords"],
    problem: `Finding and managing rental properties is often a cumbersome and inefficient process for both tenants and landlords, with poor communication channels and unresolved issues leading to dissatisfaction and inconvenience for both parties.`,

    role: "I was hired as a design intern on the team and developed the product from the scratch. ",
    process: [
      "My first case-study, no research understanding",
      "Re-Design",
      "Research, and updated the user flow",
      "Discussion with seniors and collogues, and iteration",
      "Iteration and Final Design",
    ],

    mainImg: P4mainImg,
    Img1: P4Img1,
    Img2: P4Img2,
    Img3: P4Img3,

    lineColor: "#D9896A",
    border: "1px solid #FFFFFF66",
  },
];

export default data;
