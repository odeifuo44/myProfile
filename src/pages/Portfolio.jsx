import React from 'react' 
import asudevImg from '../assets/project3.png' 
import dakuiImg from '../assets/project2.png' 
import DSpotImg from '../assets/dspot.png'   
import ormiImg from '../assets/project1.png' 
import artWorks from '../assets/bk-cover.jpg'
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
    <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">My Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* D-Spot */}
            <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Daily Spot</h3> 
                <a href="#" target='blank'  className="text-blue-500"> <img src={DSpotImg} alt="img" /></a>
                <p>Daily Spot is  task management platform built and presented together with my backend counterpart for our final demo/graduation project during the Generation GROW project deleivered by MEST Africa</p>
                <a href="#" target='blank'  className="text-blue-500">View Project</a>
            </div> 

            {/* Ads app */}
            <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Advertising App</h3> 
                <a href="#" target='blank'  className="text-blue-500"> <img src={dakuiImg} alt="img" /></a>
                <p>This is one of the projects worked with my team during my virtual internship at MEST Africa</p>
                <a href="#" target='blank'  className="text-blue-500">View Project</a>
            </div> 

            {/* Dakui Farms */}
            <div className="bg-white p-4 shadow rounded">
                <h3 className="font-bold">Dakui Farms</h3> 
                <a href="https://dakuifarms.com/" target='blank'  className="text-blue-500"> <img src={dakuiImg} alt="img" /></a>
                <p>A business website with eCommerce features built with wordpress for a freelance client</p>
                <a href="https://dakuifarms.com/" target='blank' className="text-blue-500">View Project</a>
            </div> 
            {/* Asudev Ghana */}
            <div className="bg-white p-4 shadow rounded"> 
            <a href="https://asudevgh.org/" target='blank'  className="text-blue-500"> <img src={asudevImg} alt="img" /></a>
                <h3 className="font-bold">Asudev Ghana</h3>
                <p>An NGO website with fundraising/donation features built with wordpress for a freelance client</p>
                <a href="https://asudevgh.org/" target='blank'  className="text-blue-500">View Project</a>
            </div> 
            {/* Ormi Ghana */}
            <div className="bg-white p-4 shadow rounded"> 
            <a href="https://www.ormi-ghana.org/" target='blank'  className="text-blue-500"> <img src={ormiImg} alt="img" /></a>
                <h3 className="font-bold">A few art works</h3>
                <p>A cooperate website with eLearning features built with wordpress for a freelance client</p>
                <a href="https://www.ormi-ghana.org/" target='blank'  className="text-blue-500">View Project</a>
            </div>
            <div className="bg-white p-4 shadow rounded"> 
            <a href="https://drive.google.com/drive/folders/18rrH0WioqEPvsZJ8m53WyjjoqcFmvpBQ?usp=drive_link" target='blank'  className="text-blue-500"> <img src={artWorks} alt="img" /></a>
                <h3 className="font-bold">A few art works</h3>
                <p>Here are a couple of graphic design works done in the past using Adobe Photoshop, Corel Draw and Canva</p>
                <a href="https://drive.google.com/drive/folders/18rrH0WioqEPvsZJ8m53WyjjoqcFmvpBQ?usp=drive_link" target='blank'  className="text-blue-500">View Projects</a>
            </div>
            {/* Repeat for more projects */}
        </div>
    </div>
</section>
  )
}

export default Portfolio