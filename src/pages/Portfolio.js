import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaGlobe, FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineQuestionMark, MdAutoFixHigh } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import { Tooltip } from 'react-tooltip';
import AnimatedBackground from './AnimatedBackground';






const Portfolio = () => {

    const [reset, setReset] = useState(false);


    const projects = [
        {
            id: 1,
            name: 'HazyNotes',
            site: 'https://hazynotes.com/',
            code: 'https://github.com/fd-kn/Story-Planning-Platform',
            technologies: 'React.js, Tailwind CSS, Firebase',
            description: 'A comprehensive story planning platform designed for writers to organize and store detailed information about their fictional works, including character profiles, setting descriptions, plot details, and more.'
        },
        {
            id: 2,
            name: 'Offline Webpage Downloader',
            code: 'https://github.com/fd-kn/Offline-Downloader-Project',
            technologies: 'EJS, Node.js, Express.js, MongoDB, Bootstrap CSS, Service Workers, Puppeteer',
            description: 'Developed as part of my final year university assignment, this web application allows users to store webpages and access them offline. By utilizing Puppeteer, the app scrapes webpage data from user-provided links and stores it in cache. Service workers ensure that content is accessible when offline. A CRON job is used to regularly check and update the stored webpages to reflect their online versions.'
        },
        {
            id: 3,
            name: "The Writer's Block",
            site: 'https://thewritersblock.netlify.app/home',
            code: 'https://github.com/fd-kn/Blog-Platform-Project',
            technologies: 'React.js, Tailwind CSS, Firebase',
            description: 'A blog platform that lets users read, write, publish, update, and delete posts. This project uses Firebase for authentication and storage and was my first experience implementing full CRUD operations.'
        },
        {
            id: 4,
            name: 'Noteify',
            site: 'https://fdkntodolist.netlify.app/',
            code: 'https://github.com/fd-kn/Notes-Project',
            technologies: 'React.js, Tailwind CSS',
            description: 'A to-do list application where users can add tasks to different categories, such as shopping lists or appointments, and mark them as complete. This was the first project I built entirely on my own, without following a tutorial.'
        },

        {
            id: 5,
            name: 'Leads Generation Server',
            code: 'https://github.com/fd-kn/new-leads-gen-server',
            technologies: 'Node.js, Express.js, Puppeteer',
            description: 'A server that can extract Facebook and Instagram links from webpages, ideal for lead generation.'
        }
    ];
    
    const handleReset = () => {
        setReset(!reset); 
      };

    const firstName = ["F", "A", "R", "I", "D"];
    const lastName = ["K", "H", "A", "N"];

    return (
        <div className="min-h-screen ">

            {/* HOME */}
            <div id='home' className='min-h-screen flex flex-col justify-center items-center '>
            <AnimatedBackground />

                <div className="min-h-screen flex flex-col  justify-center items-center ">
                        
                        {/* QUESTION MARK */}

                        <div className='duration-300 hover:scale-110 text-pink-300 -translate-y-10'>
                            <motion.button
                                className='p-2'
                                initial={{ opacity: 0, y: -50 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 1, delay: 7, ease: "easeOut" }} 
                                data-tooltip-id="my-tooltip-multiline" 
                                data-tooltip-offset={20}
                                data-tooltip-html="Drag the letters around and reset<br /> them with the button by my name :)"

                            >
                                <MdOutlineQuestionMark size={50} />
                                <Tooltip 
                                    id="my-tooltip-multiline" 
                                    place='right'
                                    style={{ 
                                        backgroundColor: "black", 
                                        color: "white", 
                                        fontSize: "0.7rem", 
                                        fontFamily: 'cursive',
                                        padding: "0.5rem 0.5rem", 
                                        borderRadius: "0.25rem"
                                    }} 
                                />

                            </motion.button>

                        </div>

                    {/* Name Letters and Reset Button */}
                    <div className="flex flex-col md:flex-row font-light italic text-5xl md:text-7xl mb-10 text-white justify-center">
                        <motion.div
                        className="flex"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                        }}
                        >
                        {/* First Name Letters */}
                        <div className="flex mr-6">
                            {firstName.map((letter, index) => (
                            <motion.div
                                key={index}
                                className="duration-300 hover:scale-125 hover:text-pink-400"
                                drag
                                dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
                                dragElastic={0.8}
                                whileHover={{ scale: 1.2 }}
                                animate={reset ? { x: 0, y: 0 } : {}} 
                            >
                                <motion.h1
                                    className="transition-transform duration-300 hover:scale-125 mr-1"
                                    initial={{ opacity: 0, y: -100 * (index + 1), rotate: index * 10 }}
                                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeInOut" }}
                                >
                                    {letter}
                                </motion.h1>
                            </motion.div>
                            ))}
                        </div>

                        {/* Last Name Letters */}
                        <div className="flex">
                            {lastName.map((letter, index) => (
                            <motion.div
                                key={index}
                                className="duration-300 hover:scale-125 hover:text-blue-400"
                                drag
                                dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
                                dragElastic={0.8}
                                whileHover={{ scale: 1.2 }}
                                animate={reset ? { x: 0, y: 0 } : {}} 
                            >
                                <motion.h1
                                    className="transition-transform mr-1"
                                    initial={{ opacity: 0, y: 100 * (index + 1), scale: 0.5 + index * 0.1 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeInOut" }}
                                    >
                                    {letter}
                                </motion.h1>
                            </motion.div>
                            ))}
                        </div>
                        </motion.div>
                        
                        {/* Reset Button */}
                        <div className='duration-300 hover:scale-110 text-pink-300 md:translate-x-10 md:-translate-y-2 translate-y-4 flex md:block justify-center'>
                            <motion.button
                                className='border-2 border-white shadow-md shadow-white rounded-xl p-2'
                                initial={{ opacity: 0, x: 100 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                onClick={handleReset} 
                                transition={{ duration: 1, delay: 5, ease: "easeOut" }} 
                            >
                                
                                <MdAutoFixHigh size={30} />

                            </motion.button>

                        </div>




                    </div>

                    {/* Homepage Copy  */}
                    
                    <div className='text-white text-md font-extralight italic mb-10 ml-10 md:ml-0 '>

                        <motion.h4
                            initial={{ x: '100', opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut", delay: 1.5 }} 
                        >
                            A web developer, building projects that reflect my interests and hobbies!
                        </motion.h4>
                    </div>

            

                {/* LINKS BAR */}

                <div className=''>
                    <motion.div
                        className='flex bg-blue-300 rounded-xl p-2'
                        initial={{ scaleX: 0 }} 
                        animate={{ scaleX: 1 }} 
                        transition={{ duration: 1, delay: 3.5, ease: "easeInOut" }} 
                        style={{ transformOrigin: "center" }} 
                    >
                        <a href="https://github.com/fd-kn" target="_blank" rel="noopener noreferrer" className="mx-2 duration-300 hover:scale-125">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/faridkhan-/" target="_blank" rel="noopener noreferrer" className="mx-2 duration-300 hover:scale-125">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="mailto:fdkhan470@gmail.com" className="mx-2 duration-300 hover:scale-125">
                            <HiOutlineMail size={30} />
                        </a>
                        <a href='/Farid Khan CV 26-11-24.pdf' target="_blank" rel="noopener noreferrer" className="mx-2 duration-300 hover:scale-125" download>
                            <TbFileCv size={30} />
                        </a>
                    </motion.div>
                </div>

                {/* PROJECTS BUTTON */}

                <div className='duration-300 hover:scale-110 mt-10'>
                    <motion.button
                        className='border-2 border-white shadow-md shadow-white rounded-xl p-2 '
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.75, delay: 6, ease: "easeOut" }} 
                    >
                        <a href="#projects" className='text-white'><FaArrowDown size={30}/></a>
                    </motion.button>
                </div>

            </div>

            </div>

            {/* PROJECTS */}
            <div id='projects' className='min-h-screen bg-gradient-to-b from-black to-gray-950 text-white'>
                <a href="#home" className='flex justify-center pt-10  '>
                    <FaArrowUp className='duration-300 hover:scale-110 border-2 border-white shadow-md  shadow-white rounded-xl p-2' size={50}/>
                </a>
                
                <h1 className='my-10 text-5xl font-extralight flex justify-center'>
                    <span className='hover:text-blue-400'>My Projects</span>
                </h1>

                {/* PROJECTS LIST */}

                <div className="pb-10">
                    
                    {projects.map(project => (
                        
                       <motion.div
                            className='flex flex-col p-4 m-10 h-full border-b-2 rounded-xl border-b-blue-200 shadow-lg shadow-blue-100'
                            whileHover={{
                                borderColor: "#6366F1", 
                                boxShadow: "0px 0px 20px 3px rgba(99, 102, 241, 0.7)" 
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <h1 className='py-4 italic text-blue-400 font-light text-4xl'>{project.name}</h1>
                            <p className=' text-md mb-4'>{project.description}</p>
                            <div className='flex justify-between'> 
                                <p className='text-sm text-pink-300'>{project.technologies}</p>                               
                                <div className='flex'>
                                    {project.site && (
                                        <button className='mr-4 duration-300 hover:scale-125'>
                                        <a href={project.site} target="_blank" rel="noopener noreferrer">
                                            <FaGlobe size={30} />
                                        </a>
                                        </button>
                                    )}
                                    <button className='duration-300 hover:scale-125'>
                                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={30} />
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
            </div>

        </div>
    );
}

export default Portfolio;