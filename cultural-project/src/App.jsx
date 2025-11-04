import React, { useState } from 'react';
import ReactCountryFlag from "react-country-flag";
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    home: {
      title: 'tôi là hai thế giới.',
      subtitle: 'I am two worlds.',
      content: (
        <div className="home-content">
          <p className="intro-text">
            Born between two cultures, I carry the warmth of Vietnamese traditions 
            and the spirit of American dreams. My identity is woven from rice fields 
            and city streets, from áo dài and blue jeans, from phở and pizza.
          </p>
          <div className="flag-container">
            <ReactCountryFlag countryCode="VN" svg className="flag vn-flag" style={{ fontSize: '4rem' }} />
            <div className="heart">❤️</div>
            <ReactCountryFlag countryCode="US" svg className="flag us-flag" style={{ fontSize: '4rem' }} />
          </div>
        </div>
      )
    },
    heritage: {
      title: 'Di Sản Việt Nam',
      subtitle: 'Vietnamese Heritage',
      content: (
        <div className="heritage-content">
          <div className="heritage-card">
            <h3>Language & Words</h3>
            <p>The melodic tones of Vietnamese connect me to my ancestors. 
            "Con ơi" from my grandmother, the poetry of our six tones, 
            and phrases that hold meanings English cannot capture.</p>
          </div>
          <div className="heritage-card">
            <h3>Food & Flavors</h3>
            <p>Phở on Sunday mornings, bánh mì for lunch, the complexity of 
            nước mắm. Every meal is a story, every recipe a memory passed down 
            through generations.</p>
          </div>
          <div className="heritage-card">
            <h3>Values & Traditions</h3>
            <p>Respect for elders, the importance of family, hard work and 
            education. Tết celebrations, ancestor worship, and the belief that 
            we carry our family's honor in everything we do.</p>
          </div>
        </div>
      )
    },
    american: {
      title: 'The American Experience',
      subtitle: 'Growing Up in America',
      content: (
        <div className="american-content">
          <div className="experience-card">
            <h3>Between Two Worlds</h3>
            <p>Speaking Vietnamese at home, English at school. Explaining why 
            I take my shoes off indoors. Being "too American" for some, 
            "too Vietnamese" for others, yet perfectly myself.</p>
          </div>
          <div className="experience-card">
            <h3>Freedom & Opportunity</h3>
            <p>The American dream my family chased. The freedom to be whoever 
            I want to be, to honor my heritage while creating my own path. 
            The promise that hard work opens doors.</p>
          </div>
          <div className="experience-card">
            <h3>Building Bridges</h3>
            <p>Sharing Vietnamese culture with American friends. Teaching 
            people how to say my name correctly. Being a living bridge 
            between East and West.</p>
          </div>
        </div>
      )
    },
    identity: {
      title: 'My Identity',
      subtitle: 'Proudly Vietnamese-American',
      content: (
        <div className="identity-content">
          <div className="identity-grid">
            <div className="identity-item">
              <span className="icon">🌸</span>
              <p>I am the lotus flower that blooms in new soil</p>
            </div>
            <div className="identity-item">
              <span className="icon">📚</span>
              <p>I carry stories written in two alphabets</p>
            </div>
            <div className="identity-item">
              <span className="icon">🎵</span>
              <p>I dance to both cải lương and hip-hop</p>
            </div>
            <div className="identity-item">
              <span className="icon">👨‍👩‍👧‍👦</span>
              <p>I honor my ancestors while creating my own legacy</p>
            </div>
            <div className="identity-item">
              <span className="icon">🌏</span>
              <p>I am proof that home can be two places at once</p>
            </div>
            <div className="identity-item">
              <span className="icon">✨</span>
              <p>I am beautifully, completely, both</p>
            </div>
          </div>
          <p className="identity-statement">
            Being Vietnamese-American isn't about choosing between two cultures—
            it's about celebrating the unique beauty of being both. I am the child 
            of resilience, the bridge between generations, the living proof that 
            identity is not either/or, but a rich and beautiful both/and.
          </p>
        </div>
      )
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-overlay">
          <h1 className="main-title" style={{color: 'white', fontFamily: "'Bungee', sans-serif"}}>I AM</h1>
          <h2 style={{color: 'white', fontFamily: "'Bungee', sans-serif"}}>VIETNAMESE-AMERICAN</h2>
            <h3 style={{color: 'black', fontFamily: "'Bungee', sans-serif"}}>by Vincent Nguyen</h3>
        </div>
      </header>

      <nav className="navigation">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            className={`nav-btn ${activeSection === key ? 'active' : ''}`}
            onClick={() => setActiveSection(key)}
          >
            {sections[key].title}
          </button>
        ))}
      </nav>

      <main className="main-content">
        <div className="section-header">
          <h2>{sections[activeSection].title}</h2>
          <p className="section-subtitle">{sections[activeSection].subtitle}</p>
        </div>
        <div className="section-content">
          {sections[activeSection].content}
        </div>
      </main>

      <footer className="footer">
        <p>Hành trình của tôi • My Journey</p>
      </footer>
    </div>
  );
}

export default App;