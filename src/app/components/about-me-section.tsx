import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
        quote:
          "I collaborated as the main designer and developer within the  IEEE Student Branch at the Instituto Tecnológico Superior de Huauchinango. I developed the website for CIICTI 2024 and provided training to other students at the institute to ensure they could manage the site in the future.",
        name: "IEEE Student Branch at ITSH",
        designation: "Web Developer from June 2024 to December 2024",
        src: "/img/Web Dev.jpeg",
      },
    {
        quote:
          "From June to August 2024, I participated in the Delfín Program 2024, completing a research internship at ITSH. I contributed to projects involving virtual and augmented reality, such as an interactive VR tour of the institute.",
        name: "Summer Internship",
        designation: "Web Developer and Researcher",
        src: "/img/Delfin 2024.jpg",
      },
      {
          quote:
            "During the January to June 2024 semester, I was an instructor for the “Development and Deployment of Websites with HTML and CSS Course.” Along with other colleagues, I taught high school students basic web development concepts as part of activities promoting our academic program.",
          name: "Web Development Courses",
          designation: "Course Instructor",
          src: "/img/Course Instructor.jpg",
        },
        {
            quote:
              "During the August December 2024 semester, I served as the primary author of the article titled “PROJECTION OF VISITS TO CULTURAL SITES IN MEXICO USING THE ARIMA MODEL.” I collaborated with junior students from my program, leading the research process and presenting the article at the INGECO 2024 Congress.",
            name: "Research Activities",
            designation: "Lead Researcher",
            src: "/img/INGECO 2024.jpeg",
          },
          {
            quote:
              "I always try to learn new things. I continuously take courses beyond my academic curriculum, such as the “Virtual and Augmented Reality Course” offered by CIDESI in August 2024, the “Google UX Design Certificate Program” provided by Google on Coursera, and I recently started the “General English Certificate Program” offered by The Anglo Academy to further improve my English proficiency.",
            name: "More about me",
            designation: "Lifelong Learning",
            src: "/img/Avatar.png",
          },
      
  ];
  return (
    <div className="mx-8 pt-20 lg:mx-20 w-auto my-10" id="AboutMe">
        <div>
            <h1 className=" text-4xl lg:text-6xl font-bold">My Experience </h1>
            <p className=" py-10 text-lg lg:pr-16">
            I am a 9th-semester student pursuing a degree in Information and Communication Technology Engineering, currently seeking an opportunity to complete my professional residency process. My main areas of interest include front-end and mobile development, as well as UI/UX design. I am 22 years old and study at the Instituto Tecnológico Superior de Ciudad Hidalgo.

            Throughout my academic journey, I have actively participated in various projects and activities that highlight my skills and dedication to continuous learning. Some of my most notable experiences include:
            </p>
          </div>
        <AnimatedTestimonials testimonials={testimonials} />
    </div>
    
  );
}
