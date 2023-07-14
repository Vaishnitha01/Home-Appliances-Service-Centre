import React from "react";
import Footer from "./Footer";
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import CallIcon from '@mui/icons-material/Call';
import TodayIcon from '@mui/icons-material/Today';
const Contact = () => {
  return (
    <div style={{ backgroundColor:"black",minHeight:"100vh",paddingTop:"60px",display:"flex",flexDirection:"column"}}>
      <header style={{ backgroundColor: "black", color: "#fff", padding: "20px", fontFamily:"cursive"}}>
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Contact Us</h1>
      </header>
      <section style={{flex:"1",color:"white",display:"flex", alignItems: "center", gap: "40px", justifyContent: "space-evenly"  }} >
        <div style={{ textAlign: "center",opacity:"0.8" }}>
          <BusinessIcon style={{ fontSize: 35}}/>
          <p>Our Address</p>
          <p>123 City Street, Coimbatore</p>
        </div>
        <div style={{ textAlign: "center",opacity:"0.8" }}>
        <EmailIcon style={{ fontSize: 35}}/>
          <p>Enquiries</p>
          <p>service@gmail.com</p>
        </div>
        <div style={{ textAlign: "center",opacity:"0.8" }}>
          <CallIcon style={{ fontSize: 35}}/>
          <p>Call Us</p>
          <p>(+91)9876543210</p>
        </div>
        <div style={{ textAlign: "center",opacity:"0.8" }}>
          <TodayIcon style={{ fontSize: 35}}/>
          <p>Timings</p>
          <p>Mon - Sun : 9.00 AM - 9.00 PM</p>
        </div>
      </section>
      <footer style={{width:"100%"}}>
      <Footer/>
      </footer>
    </div>
  );
};

export default Contact;