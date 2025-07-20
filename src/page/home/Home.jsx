import React from 'react';
import home from '../../assets/home.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: '🧇',
      title: 'Fresh Ingredients',
      desc: 'Only the freshest and highest quality ingredients go into our waffles.',
    },
    {
      icon: '⚡',
      title: 'Fast Delivery',
      desc: 'Hot waffles delivered quickly right to your door, every time.',
    },
    {
      icon: '☕',
      title: 'Cozy Ambience',
      desc: 'Enjoy your meal in a warm and inviting environment.',
    },
    {
      icon: '⭐',
      title: 'Top Rated',
      desc: 'Our customers consistently rate us 5 stars for quality and service.',
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#fff0f6',
        color: '#4a0033',
        minHeight: '90vh',
        padding: '60px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '80px',
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          maxWidth: '1100px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '50px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '1 1 450px' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: '900',
              color: '#ff3ca6',
              marginBottom: '20px',
              lineHeight: '1.1',
              letterSpacing: '-1px',
              overflowWrap: 'break-word',
            }}
          >
            Welcome to <br />
            WaffleHome 🧇 <br />
            (It's Waffle Time)
          </h1>
          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '35px',
              color: '#660038',
            }}
          >
            Dive into a world of freshly made waffles with premium ingredients,
            amazing flavors, and a cozy atmosphere. Your new favorite treat awaits!
          </p>
          <Link to="/products">
            <button
              style={{
                backgroundColor: '#ff3ca6',
                color: 'white',
                fontWeight: '600',
                border: 'none',
                padding: '15px 40px',
                fontSize: '1.15rem',
                borderRadius: '35px',
                boxShadow: '0 8px 15px rgba(255, 60, 166, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#e0318c';
                e.currentTarget.style.boxShadow = '0 12px 20px rgba(224, 49, 140, 0.5)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#ff3ca6';
                e.currentTarget.style.boxShadow = '0 8px 15px rgba(255, 60, 166, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Explore Menu
            </button>
          </Link>
        </div>

        <div style={{ flex: '1 1 450px', textAlign: 'center' }}>
          <img
            src={home}
            alt="Delicious waffle with syrup and berries"
            style={{
              width: '100%',
              maxWidth: '450px',
              borderRadius: '20px',
              boxShadow: '0 10px 20px rgba(255, 60, 166, 0.2)',
            }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section
        style={{
          maxWidth: '1100px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '30px',
          textAlign: 'center',
          padding: '0 10px',
        }}
      >
        {features.map(({ icon, title, desc }, i) => (
          <div
            key={i}
            style={{
              backgroundColor: 'white',
              padding: '30px 20px',
              borderRadius: '15px',
              boxShadow: '0 8px 18px rgba(255, 60, 166, 0.15)',
              color: '#4a0033',
              transition: 'transform 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div
              style={{
                fontSize: '3.2rem',
                marginBottom: '15px',
                color: '#ff3ca6',
              }}
              aria-label={title}
            >
              {icon}
            </div>
            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                marginBottom: '12px',
              }}
            >
              {title}
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>{desc}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section
        style={{
          backgroundColor: '#ff3ca6',
          color: 'white',
          padding: '50px 30px',
          borderRadius: '20px',
          maxWidth: '700px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(255, 60, 166, 0.4)',
          fontWeight: '600',
          fontSize: '1.3rem',
        }}
      >
        Ready for a delicious waffle experience? <br />
        <Link to="/cart">
          <button
            style={{
              marginTop: '20px',
              backgroundColor: 'white',
              color: '#ff3ca6',
              border: 'none',
              padding: '15px 40px',
              borderRadius: '30px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 5px 15px rgba(255, 60, 166, 0.3)',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#ffe6f0';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 60, 166, 0.5)';
              e.currentTarget.style.color = '#c7006d';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(255, 60, 166, 0.3)';
              e.currentTarget.style.color = '#ff3ca6';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Order Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
