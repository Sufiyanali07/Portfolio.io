import React from "react";
import Navbar from "./Navbar";
const AboutSection = () => {
  return (
    <div id="about">
      <h2
        className="text-3xl sm:text-5xl lg:text-6xl text-center
       mt-20 tracking-wide "
      >
        Know More{" "}
        <span className="bg-gradient-to-r from-purple-950 to-purple-400 text-transparent bg-clip-text ">
          About Me
        </span>
      </h2>
      <p className="text-neutral-500 text-2xl mt-15">
        I am Sayyed Sufiyan Ali, a Computer Science (BCS) graduate with a
        passion for Frontend Development. I have completed courses in React.js
        and AWS Cloud, equipping myself with modern web development skills. My
        expertise includes HTML, CSS, JavaScript, React.js, and Tailwind CSS,
        focusing on clean and efficient coding. As a fresher, I am eager to
        apply my knowledge in real-world projects and gain industry experience.
        I have built personal projects showcasing my ability to create
        responsive and dynamic web applications. I have a basic understanding of
        AWS cloud services, enhancing my ability to work with cloud-based
        applications. I am a quick learner, always keen on exploring new
        technologies and staying updated with industry trends. Apart from
        technical skills, I possess strong problem-solving, communication, and
        teamwork abilities. I am looking for an opportunity to work in a dynamic
        and growth-oriented environment. My goal is to become a skilled frontend
        developer and eventually expand into full-stack development. I actively
        participate in online coding communities to enhance my learning and
        network with professionals. I am committed to continuous learning and
        improving both my technical and soft skills. I am open to internships
        and full-time opportunities where I can apply my skills effectively. If
        given a chance, I will be dedicated, hardworking, and eager to
        contribute to the team’s success. I look forward to starting my
        professional journey and making an impact in the tech industry. Would
        you like me to add any specific certifications or projects to make it
        more detailed
      </p>
      <hr className="p-5 mt-15 border-neutral-800" />
    </div>
  );
};

export default AboutSection;
