import React from 'react'
import "./About.scss"
import { TiTick } from "react-icons/ti";

const About = () => {
  return (
    <div>
        <div>
        <img src="/images/slide-02.jpg" alt="" className="about" />
        <h4 className="inner-contents">About Us</h4>
      </div>

      <div className='a1'>
        <h2>Welcome to Round D' Planet- <br />Your Passport to Extraordinary Journeys!</h2>
    </div>
    <div className='container a2'>
    <p>At Round D’Planet, we’re not just travel enthusiasts; we’re your dedicated companions on the road to unforgettable adventures. Our journey together is defined by passion, experience, and a commitment to crafting personalized travel experiences that linger in your heart forever.</p>
    </div>



    <div className='roundt'>
  <div className='text-container'>
    <div  className='discover'>
      <h2>Our Mission</h2>
      <p className='tourspara'>At Round D’Planet, our unique mission is to bring your travel dreams to life. We achieve this by tailoring each experience to suit your individual preferences and desires. We believe in responsible travel, which means respecting local cultures and the environment everywhere we go. Our team of travel enthusiasts is passionate and knowledgeable, ensuring your journey is nothing short of extraordinary. We focus on cultural exchange, introducing you to the traditions, flavors, and heritage of each destination, fostering a deeper connection with the local communities. Through global collaboration and continuous learning, we strive to stay at the forefront of travel trends and provide you with exceptional experiences.</p>
      <p className='tourspara'>Ultimately, our goal is to create cherished memories that last a lifetime, making every adventure with Round D’Planet truly unforgettable.</p>
     
    </div>
    <div className='image-container'>
      <img src="/images/about-image.jpg" alt="" />
    </div>
    
  </div>
  

</div>


        <div className='container choose'>
            <h1>Why Choose Round D’Planet?</h1>
        </div>
        <div className='container points'>
        <p className='pp'><TiTick className='tick'/><span className='bus'>Business Brilliance:</span>For the corporate explorer, we curate exceptional business tours. Dive into government meetings, explore factories, and seize lucrative business.</p> 

        <p className='pp'><TiTick className='tick'/><span className='bus'>Educational Exploration:</span>We believe that education should transcend classrooms. Our educational tours for schools and colleges.</p> 

        <p className='pp'><TiTick className='tick'/><span className='bus'>Adventure Awaits:</span>Seek adrenaline-charged experiences? Our adventurous tours are designed for thrill-seekers who crave excitement and exploration.</p> 

        <p className='pp'><TiTick className='tick'/><span className='bus'>Romantic Retreats:</span>Celebrate love with our magical honeymoon packages in breathtaking destinations that set the stage for romance and lifelong memories.</p> 

        <p className='pp'><TiTick className='tick'/><span className='bus'>Family Gateways:</span>Create cherished family moments with our family-focused trips designed to cater to all age groups.</p>

         <p className='pp'><TiTick className='tick'/><span className='bus'>Ladies’ Escapes & Men’s Retreats:</span>Our tours are designed to cater to your specific needs, ensuring a comfortable and enjoyable journey for everyone.</p>

         <p className='pp'><TiTick className='tick'/><span className='bus'>Our Global Reach:</span>We spread our wings across Indonesia, India, Malaysia, Singapore, Vietnam, Cambodia, UAE, Oman, and Qatar, offering you the world on a platter.</p> 

         <p className='pp'><TiTick className='tick'/><span className='bus'>Your Friendly Travel Partners:</span>The Round D’Planet team is your extended family on the road. Approachable, responsive, and always eager to assist.</p> 

         <p className='pp'><TiTick className='tick'/><span className='bus'>Tailored Just for You:</span>Your desires are at the heart of our packages. We customize every trip to match your preferences and dreams.</p> 

         <p className='pp'><TiTick className='tick'/><span className='bus'>Decades of Expertise:</span>With over 20 years of experience in Southeast Asia and Arab countries , we bring a wealth of knowledge and insights to ensure your journey.</p>

         <p>
            Join us at Round D’Planet, where each adventure is a story waiting to be written, and each traveler is family. Let’s embark on a journey that’ll fill your life with stories, smiles, and unforgettable moments. Your adventure starts with us!
            </p>
        </div>

       
    </div>
  )
}

export default About