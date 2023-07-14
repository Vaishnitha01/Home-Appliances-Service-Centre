import React from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "./Services.css";
const Services = () => {
  const navigate = useNavigate();
  const navigateToLoginPage = () => {
    navigate('/login');
  };

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", paddingTop: "60px", display: "flex", flexDirection: "column" }}>
      <header style={{ backgroundColor: "black", color: "#fff", padding: "20px", fontFamily: "cursive" }}>
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Services Available</h1>
      </header>
      <section style={{ flex: "1", color: "white", display: "flex", alignItems: "center", gap: "40px", justifyContent: "space-evenly" }}>
        <div style={{ textAlign: "center", opacity: "0.8"}}>
          <img style={{width:"260px",borderRadius:"80%"}} src="https://www.lg.com/in/images/washing-machines/md07560270/gallery1/FHV1409Z4M-Washing-Machines-Front-View-D-01.jpg" alt="Washing Machine"/>
          <p>Washing Machine</p>
          <p>Repair or Maintenance</p>
          <button
            onClick={navigateToLoginPage}
            style={{
              border: "2px solid white",
              borderRadius: "80px",
              fontSize: "15px",
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              marginTop: "10px",
              marginBottom:"10px",
              fontFamily: "cursive"
            }}
          >
            Book
          </button>
        </div>
        <div style={{ textAlign: "center", opacity: "0.8" }}>
        <img style={{width:"260px",borderRadius:"80%"}} src="https://www.lg.com/in/images/microwave-ovens/md05809853/gallery/MC2846BV-Microwave-ovens-Front-view-D-01.jpg" alt="Microwave Oven"/>
          <p>Microwave Oven</p>
          <p>Repair or Maintenance</p>
          <button
            onClick={navigateToLoginPage}
            style={{
              border: "2px solid white",
              borderRadius: "80px",
              fontSize: "15px",
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              marginTop: "10px",
              marginBottom:"10px",
              fontFamily: "cursive"
            }}
          >
            Book
          </button>
        </div>
        <div style={{ textAlign: "center", opacity: "0.8" }}>
          <img style={{width:"260px",borderRadius:"80%"}} src="https://duet-cdn.vox-cdn.com/thumbor/0x0:1200x800/828x552/filters:focal(600x400:601x401):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/9991479/fridge.png" alt="Refrigerator"/>
          <p>Refrigerator</p>
          <p>Repair or Maintenance</p>
          <button
            onClick={navigateToLoginPage}
            style={{
              border: "2px solid white",
              borderRadius: "80px",
              fontSize: "15px",
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              marginTop: "10px",
              fontFamily: "cursive",
              marginBottom:"10px"
            }}
          >
            Book
          </button>
        </div>
        <div style={{ textAlign: "center", opacity: "0.8" }}>
            <img style={{width:"260px",borderRadius:"80%"}} src="https://www.lg.com/my/images/home-air-conditioners/bs-q126bry4/gallery/large04.jpg" alt="Air Conditioner"/>
          <p>Air Conditioner</p>
          <p>Repair or Maintenance</p>
          <button
            onClick={navigateToLoginPage}
            style={{
              border: "2px solid white",
              borderRadius: "80px",
              fontSize: "15px",
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              marginTop: "10px",
              fontFamily: "cursive",
              marginBottom:"10px"
            }}
          >
            Book
          </button>
        </div>
      </section>
      <footer style={{ width: "100%" }}>
        <Footer />
      </footer>
    </div>
  );
};

export default Services;
