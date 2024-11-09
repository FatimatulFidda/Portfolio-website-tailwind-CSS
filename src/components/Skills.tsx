import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='containerpt-32'>
      <div className='grid md:grid=cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-down">
          <h2 className='text=4xl md:text-5xl'>Technologies I work with</h2>
          <p className='text-gray-500 pt-2'>
          I have a solid function in wep development specializing in HTML, CSS, Javascript. 
          My experience extends to using framework like React and Next.js to create dynamic and user-friendly application. 
          I'm also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay update on the latest technologies to enhance my skills set and contribute effectively to projects.  
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-down">Typescript</h2>
              <h2 data-aos="zoom-in-down">react.js</h2>
              <h2 data-aos="zoom-in-down">Next.js</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-down">Tailwind</h2>
              <h2 data-aos="zoom-in-down">CSS</h2>
              <h2 data-aos="zoom-in-down">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
