import Image from "next/image";
import Github from "./icons/github-1.png"
import Linkedin from "./icons/linkedin-1.png"
import Instagram from "./icons/instagram-1.png"
import X from "./icons/x-1.png"
import Link from "./icons/link-1.png"

export default function Home() {
  return (
      <div className="flex md:flex-row flex-col h-screen text-wrap">
        <div className="bg-white p-10 md:w-1/2 md:h-full md:relative">
          <p className="font-mono font-semibold text-7xl mb-10">Abbazs Rahman</p>
          <p className="font-mono font-normal text-2xl mb-10">Computer Science Major @RMIT</p>
          <p className="font-mono font-normal text-2xl mb-10 text-sky-700">Tech enthusiast exploring the cutting-edge realms of cloud computing, back-end development, and artificial intelligence.</p>
          <div className="h-max grid content-end md:absolute md:bottom-10 md:left-10">
            <div className="flex flex-row gap-10 mb-5">
              <a href="https://github.com/abbazsr795"><Image src={Github} width={40}></Image></a>
              <a href="https://www.linkedin.com/in/abbazs-rahman-968b65260/"><Image src={Linkedin} width={40}></Image></a>
              <a href="https://www.instagram.com/abbazs.r/"><Image src={Instagram} width={40}></Image></a>
              <a href="https://x.com/abbazsr795"><Image src={X} width={40}></Image></a>
            </div>
            <p className="font-mono font-normal text-xl text-sky-700 mb-5">Built by me.</p>
          </div>
        </div>
        <div className="bg-white p-10 md:w-1/2 md:h-full md:overflow-auto">
          <div>
            <p className="font-mono font-bold text-5xl mb-5">Projects</p>
            <a href="https://github.com/abbazsr795/Perceptron-based-Coordinate-Classifier" className="flex flex-row gap-3 hover:border-b border-black w-fit"><p className="font-mono font-bold text-2xl mb-2">Perceptron-based Coordinate Classifier</p><Image className="h-fit flex self-center" src={Link} width={20}></Image></a>
            <p className="font-mono font-normal text-2xl mb-5 text-balance">Developed a standalone Java application implementing a Perceptron algorithm from scratch to classify points relative to a predefined linear boundary (y=mx+c) without using machine learning frameworks. The application trains a classifier with labeled coordinates and predicts the class of new points. Responsibilities included implementing the Perceptron learning algorithm, random weight values and coordinate assigning, designing a Java Swing GUI for real-time visualization and enabling real-time classification.</p>
            <a href="https://github.com/abbazsr795/Image-Classification" className="flex flex-row gap-3 hover:border-b border-black w-fit"><p className="font-mono font-bold text-2xl mb-2">CNN Image Classification Model</p><Image className="h-fit flex self-center" src={Link} width={20}></Image></a>
            <p className="font-mono font-normal text-2xl mb-5 text-balance">The Jupyter notebook showcases the development of a Convolutional Neural Network (CNN) Image Classification model. This model is designed to distinguish between two specific categories of images, such as happy and sad individuals. Additionally, the workflow includes a data pipeline aimed at enhancing efficiency and facilitating the integration of other image categories into the process. The tools used for this project are Python, Numpy, Pandas, Scikit-Learn and Tensorflow.</p>
            <a href="https://github.com/abbazsr795/sql_job_analysis" className="flex flex-row gap-3 hover:border-b border-black w-fit"><p className="font-mono font-bold text-2xl mb-2">Looking for Jobs?</p><Image className="h-fit flex self-center" src={Link} width={20}></Image></a>
            <p className="font-mono font-normal text-2xl mb-5 text-balance">This repository showcases an SQL analysis I conducted on Data Analyst jobs using the SQL language and PostgreSQL as the database management system. The analysis aims to identify top paying skills, most in-demand skills, top paying jobs, and optimal skills that offer both high salary and high demand. Throughout the project, various best practices and advanced SQL techniques are utilized, such as Common Table Expressions (CTE), aggregate functions, table joins, and set operations.</p>
            <a href="https://github.com/abbazsr795/GUICalculator" className="flex flex-row gap-3 hover:border-b border-black w-fit"><p className="font-mono font-bold text-2xl mb-2">GUI Calculator</p><Image className="h-fit flex self-center" src={Link} width={20}></Image></a>
            <p className="font-mono font-normal text-2xl mb-5 text-balance">Create a Java calculator featuring a graphical user interface that supports basic arithmetic operations on all numbers, including negatives and decimals.</p>
            <a href="https://racket-ideas.vercel.app/" className="flex flex-row gap-3 hover:border-b border-black w-fit"><p className="font-mono font-bold text-2xl mb-2">Racket Ideas</p><Image className="h-fit flex self-center" src={Link} width={20}></Image></a>
            <p className="font-mono font-normal text-2xl mb-5 text-balance">{"A startup I\'m currently working on that facilitates connections between business owners and potential investors and partners. Additionally, the platform allows businesses to gather feedback from the public through voting to assess their success rate and receive constructive criticisms through comments. The website was built using Next.js, Firebase, TailwindCSS, EvergreenUI, and Zustand for state management."}</p>
            <a href="https://github.com/abbazsr795/SnakeGameJava" className="flex flex-row gap-3 hover:border-b border-black w-fit"><p className="font-mono font-bold text-2xl mb-2">Feed The Snake!</p><Image className="h-fit flex self-center" src={Link} width={20}></Image></a>
            <p className="font-mono font-normal text-2xl mb-5 text-balance">Developed a Java game where a user controls a snake to eat randomly appearing apples on the screen, boosting their score. The game features teleportation through edges and allows users to replay when the snake perishes.</p>
            <p className="font-mono font-bold text-2xl mb-2">Portfolio Website</p>
            <p className="font-mono font-normal text-2xl mb-5">{"You're in it right now! Built using TailwindCSS and NextJS"}</p>
            <a href="https://racket-design.vercel.app/" className="flex flex-row gap-3 hover:border-b border-black w-fit"><p className="font-mono font-bold text-2xl mb-2">Racket Design</p><Image className="h-fit flex self-center" src={Link} width={20}></Image></a>
            <p className="font-mono font-normal text-2xl mb-20 text-balance">{"A versatile collection of web components crafted with a unique design ethos. Inspired by the innovative creations of Racket Labs, the startup I\'m proud to be a part of, these components embody elegance and functionality."}</p>
          </div>
          <div>
            <p className="font-mono font-bold text-5xl mb-5">Education</p>
            <p className="font-mono font-bold text-2xl mb-2">Royal Melbourne Institute of Technology, Australia</p>
            <p className="font-mono font-normal text-2xl mb-5">Bachelor of Computer Science</p>
            <p className="font-mono font-bold text-2xl mb-2">Gateway College, Sri Lanka</p>
            <p className="font-mono font-normal text-2xl mb-2 text-balance">Edexcel/Cambridge International A Level in:</p>
            <p className="font-mono font-normal text-2xl mb-2 text-balance">Mathematics (592/600 - A* - Highest Mark)</p>
            <p className="font-mono font-normal text-2xl mb-2 text-balance">Further Mathematics (546/600 - A* - Highest Mark)</p>
            <p className="font-mono font-normal text-2xl mb-2 text-balance">Physics (569/600 -  A* - Highest Mark)</p>
            <p className="font-mono font-normal text-2xl mb-20 text-balance">Computer Science (87/100 - A)</p>
          </div>
          <div>
            <p className="font-mono font-bold text-5xl mb-5">License and Certification</p>
            <a href="https://www.udemy.com/certificate/UC-a0fe3ea1-048b-4002-bd82-98a2350f706c/" className="flex flex-row gap-3 hover:border-b border-black w-fit"><p className="font-mono font-bold text-2xl mb-2">Machine Learning & Data Science Bootcamp</p><Image className="h-fit flex self-center" src={Link} width={20}></Image></a>
            <p className="font-mono font-normal text-2xl mb-5">By Andrei Neagoie and Daniel Bourke</p>
            <a href="https://www.udemy.com/certificate/UC-ed4a3eae-3dc1-4760-b8b4-7d61b3a714d9/" className="flex flex-row gap-3 hover:border-b border-black w-fit"><p className="font-mono font-bold text-2xl mb-2">Full Stack Web Development Bootcamp</p><Image className="h-fit flex self-center" src={Link} width={20}></Image></a>
            <p className="font-mono font-normal text-2xl mb-5">By Andrei Neagoie</p>
            <p className="font-mono font-bold text-2xl mb-2">AWS Certified Cloud Practitioner (In Progress)</p>
            <p className="font-mono font-normal text-2xl mb-5">By Stéphane Maarek</p>
            <p className="font-mono font-bold text-2xl mb-2">International Computer Driving License</p>
            <p className="font-mono font-normal text-2xl mb-20">In Digital Marketing, Advanced Spreadsheets, Word Processing and Presentation by ICDL Asia</p>
          </div>
          <div>
            <p className="font-mono font-bold text-5xl mb-5">Skills and Technologies</p>
            <div className="flex flex-row flex-wrap gap-5 mb-20">
              <p className="font-mono font-normal text-xl p-3 bg-sky-200 rounded-md">Python</p>
              <p className="font-mono font-normal text-xl p-3 bg-sky-200 rounded-md">Javascript</p>
              <p className="font-mono font-normal text-xl p-3 bg-sky-200 rounded-md">HTML</p>
              <p className="font-mono font-normal text-xl p-3 bg-sky-200 rounded-md">CSS</p>
              <p className="font-mono font-normal text-xl p-3 bg-sky-200 rounded-md">Java</p>
              <p className="font-mono font-normal text-xl p-3 bg-sky-200 rounded-md">SQL</p>
              <p className="font-mono font-normal text-xl p-3 bg-sky-200 rounded-md">Python</p>
              <p className="font-mono font-normal text-xl p-3 bg-sky-200 rounded-md">ReactJS</p>
              <p className="font-mono font-normal text-xl p-3 bg-sky-200 rounded-md">NextJS</p>
              <p className="font-mono font-normal text-xl p-3 bg-sky-200 rounded-md">Git</p>
              <p className="font-mono font-normal text-xl p-3 bg-sky-200 rounded-md">Firebase</p>
            </div>
          </div>
          <div>
            <p className="font-mono font-bold text-5xl mb-5">Honors and Awards</p>
            <p className="font-mono font-bold text-2xl mb-2">High Achiever Award for Edexcel International A Level</p>
            <p className="font-mono font-normal text-2xl mb-5">For achieving 3 A*s</p>
            <p className="font-mono font-bold text-2xl mb-2">Young Computer Scientist (YCS) 2019</p>
            <p className="font-mono font-normal text-2xl mb-5">Issued by Federation of IT Industry Sri Lanka (FITIS)</p>
            <p className="font-mono font-bold text-2xl mb-2">KRUU Project - Merit and Eminence Class</p>
            <p className="font-mono font-normal text-2xl mb-5">By KRUU Project</p>
            <p className="font-mono font-bold text-2xl mb-2">SPARK Youth Entrepreneur Competition Top 105</p>
            <p className="font-mono font-normal text-2xl mb-20">By Sri lankan Chamber of Commerce</p>
          </div>
        </div>
      </div>
  );
}
