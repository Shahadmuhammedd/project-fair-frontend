import React from 'react'
import {Link} from 'react-router-dom'
import programmer from '../assets/programmer.webp'
import Projectcard from '../Components/ProjectCard'
function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6 mt-5">
          <h1 className='text-center mt-5'>Project Fair</h1>
          <p style={{textAlign:'justify'}} className='mx-5'>The term “project management system” usually refers to a category of software with distinct functionality and features that enable users to accomplish various activities of project management according to best business and work practices. In using the PM system, project teams can create plans, estimates, budgets, tasks, schedules, resource allocations, activities, and reports, and also make decisions that help bring about a successful project delivery.</p>
          <div className='text-center'>
            <Link to={'/login'}>
            <button className='btn btn-dark m-5'>Get Started</button>
            </Link>
          </div>
        </div>
        <div className="col-md-6 ">
          <img src={programmer} width={'100%'} alt=""  className='m-2'/>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h1 className='text-center m-5'>Explore Our Project </h1>
          <marquee width="100%" height='400px' direction="left">
             <div>
              <Projectcard/>
             </div>
          </marquee>
        </div>
      </div>
      <div className="row mx-5 mb-5">
        <h1 className='text-center m-5'>Our Services</h1>
        <div className="col-md-4">
          <div className='card shadow p-5' style={{height:'550px'}}>
            <h3 className='text-center m-2'>Web Designing</h3>
            <p style={{textAlign:'justify'}}>Web designing is a multifaceted discipline that encompasses various elements crucial for creating visually appealing, user-friendly, and functional websites. It involves combining principles of graphic design, user experience (UX) design, and web development to craft engaging digital experiences. Web designers utilize a range of tools, including graphic design software, prototyping tools, and code editors, to bring their creative visions to life.</p>
          </div>
        </div>
        <div className="col-md-4"> <div className='card shadow p-5' style={{height:'550px'}}>
            <h3 className='text-center m-2'>Single Page Application</h3>
            <p style={{textAlign:'justify'}}>
Single Page Applications (SPAs) have revolutionized the way we interact with web applications by providing seamless, fluid experiences reminiscent of desktop applications. Unlike traditional multi-page websites, SPAs load all necessary HTML, CSS, and JavaScript upon the initial visit, thereafter dynamically updating the content as users navigate without reloading the entire page. This is achieved through JavaScript frameworks like React, Angular, or Vue.js. </p>
          </div></div>
        <div className="col-md-4"> <div className='card shadow p-5' style={{height:'550px'}}>
            <h3 className='text-center m-2'>Backend Services</h3>
            <p style={{textAlign:'justify'}}>
Backend services form the backbone of modern web and mobile applications, handling data storage, processing, and business logic execution. These services are responsible for managing the server-side operations that support the functionality and interactivity of applications. Backend services often include databases for storing and retrieving data, application servers for processing requests, and APIs for communication between the client-side interface and server-side logic.</p>
          </div></div>
      </div>
    </div>
  )
}

export default Home