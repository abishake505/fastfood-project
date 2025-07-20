import React from 'react';
import aboutImg from '../../assets/about.jpg';
import about1 from '../../assets/about1.jpg'
import about2 from '../../assets/about2.jpg'


const AboutPage = () => {
  return (
    <>
    <div style={styles.container}>
      <h1 style={styles.heading}>🧇 Welcome to WaffleHome 🏠<br/>It's waffle time</h1>
      

      <p style={styles.text}>
        At <strong>WaffleHome</strong>, we serve love with every waffle 🧡. Whether you like it crispy, gooey, chocolatey 🍫 or fruity 🍓 — we've got your cravings covered!
      </p>

      <p style={styles.text}>
        Our waffles are made fresh daily with handpicked ingredients 🥚🥛, golden batter, and magic in every bite ✨.
      </p>

      <p style={styles.text}>
        From classic Belgian waffles to fun flavors like Nutella 🍫, honey drizzle 🍯, mango tango 🥭, and more — it's a waffle wonderland!
      </p>

      <p style={styles.text}>
        Whether it’s breakfast, dessert, or just snack o’clock — WaffleHome is your happy place. Order now and treat yourself to sweet joy 🧇💛.
      </p>

      <p style={{ ...styles.text, textAlign: 'center', marginTop: '30px', fontSize: '1.2rem' }}>
        🛵 Fast Delivery &nbsp; | &nbsp; 😋 Fresh Taste &nbsp; | &nbsp; 🧇 Waffle Love
      </p>
    </div>
    <div className="container text-center">
  <h2 className="mb-4">Meet Our Story</h2>

  <div className="row">
    <div className="col-md-4 mb-3">
      <img src={aboutImg} alt="About 1" className="img-fluid rounded shadow" />
    </div>
    <div className="col-md-4 mb-3" >
      <img src={about1} alt="About 2" className="img-fluid rounded shadow" style={{height: '500px'}} />
    </div>
    <div className="col-md-4 mb-3">
      <img src={about2} alt="About 3" className="img-fluid rounded shadow" style={{height: '500px', width: '300px'}} />
    </div>
  </div>
</div>

    </>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fffaf0',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.8rem',
    marginBottom: '25px',
    color: '#d2691e',
  },
  text: {
    fontSize: '1.15rem',
    lineHeight: '1.9',
    marginBottom: '20px',
    color: '#333',
  },
};

export default AboutPage;
