import React from "react";
import Footer from "./Footer";
import aboutpic from "./aboutpic.png";
const About = () => {
  return (
    <div style={{marginTop:"60px", backgroundColor:"black"}}>
      <header style={{ backgroundColor: "black", color: "#fff", padding: "20px", fontFamily:"cursive"}}>
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>About Us</h1>
      </header>
      <section style={{color:"white",display:"flex", alignItems: "center", justifyContent: "center", gap: "40px" }} >
        <img src={aboutpic} alt="About" style={{borderRadius:"80px",marginBottom:"20px"}}/>
      
      <p style={{fontFamily:"cursive",padding:"18px",lineHeight:"2.5",marginTop:"0",marginRight:"15px"}}>
        Our mission is to provide top-notch service and customer satisfaction. We take pride in our workmanship and strive to exceed your expectations with every service call.
        At Home Appliance Service Portal, we value professionalism, integrity, and transparency. We believe in honest and fair pricing, and we'll always provide you with a clear understanding of the repairs or installations needed and the associated costs. You can trust us to handle your appliances with care and provide reliable solutions to meet your needs.
      </p>
      
      </section>
      <footer>
      <Footer/>
      </footer>
    </div>
  );
};

export default About;