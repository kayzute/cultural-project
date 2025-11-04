import React, { useState } from 'react';
import ReactCountryFlag from "react-country-flag";
import './App.css';
import christmasImg from './assets/christmas.jpg';
import friendsImg from './assets/friends.jpg';
import grandma from './assets/grandma.jpg';
import pho from './assets/pho.jpg';
import graduation from './assets/graduation.jpg';
import fishing from './assets/fishing.jpg';
import family from './assets/family.jpg';
import canoe from './assets/canoe.jpg';
import headshot from './assets/headshot.jpg';
import culture from './assets/culture.jpg';
import home from './assets/home.jpg';
import me from './assets/me.jpg'
import tet from './assets/tet.jpg'
import basketball from './assets/basketball.jpg'


function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleImageClick = (section) => {
    setActiveSection(section);
  };

  const sections = {
    home: {
      title: 'Tôi Là Hai Thế Giới',
      subtitle: 'I am two worlds.',
      content: (
        <div className="home-content">
          <p className="intro-text">
            Born between two cultures, I am both <strong><span style={{color:"red"}}>Vietnamese</span></strong> and <strong><span style={{color:"blue"}}>American</span></strong>. A clash between <strong>individualism</strong> and <strong>collectivism</strong>,
            <strong> hierarchy and respect</strong> vs <strong>directness and familiarity, and </strong> <strong>obligation</strong> vs <strong>independence</strong>. I feel like my existence
            is split between <strong>two entirely different cultural worlds</strong>. But because I am of two worlds, <strong><span style={{color:"purple"}}>my existence is incredibly unique</span></strong>.
          </p>
          <div className="photo-container">
            <img src={christmasImg} alt="Christmas celebration" className="photo" onClick={() => handleImageClick('heritage')} style={{cursor: 'pointer'}}/>
            <img src={friendsImg} alt="With friends" className="photo" onClick={() => handleImageClick('american')} style={{cursor: 'pointer'}}/>
          </div>
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
      subtitle: 'My Vietnamese Heritage',
      content: (
        <div className="heritage-content">
          <div className="heritage-card">
            <h3>Language & Love</h3>
            <div className="photo-container">
              <img src={grandma} alt="My grandma" className="photo" />
            </div>
            <p>The melodic tones of Vietnamese connect me to my ancestors and my family. 
            <strong>"Con ơi"</strong> or <strong>"thương"</strong> from my grandma are words that hold more meaning
            and love than "love" itself. Our elders' love is carried with us through these words.</p>
          </div>
          <div className="heritage-card">
            <h3>Food & Flavors</h3>
            <div className="photo-container">
              <img src={pho} alt="A bowl of pho" className="photo" />
            </div>
            <p><strong>Phở</strong> at 8am, <strong>bánh mì</strong> for lunch, or spring rolls and 
            <strong> nước mắm</strong> with vegetables straight from the garden will always hit the spot. Vietnamese food is incomparable to other cultural cuisines.
            My love for food stems from having access to the <strong>best food</strong>.</p>
          </div>
          <div className="heritage-card">
            <h3>Values & Traditions</h3>
            <div className="photo-container">
              <img src={graduation} alt="My graduation" className="photo" />
            </div>
            <p>The importance of family is given, but <strong>hard work</strong> and 
            <strong> education </strong> is a priority that has been drilled into me since birth. Through our <strong>Tết celebrations</strong> and love for our ancestors 
            we carry our family's honor and legacy in everything we do. That's why I'm obligated to give <strong>100%</strong>.</p>
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
            <p>I spoke Vietnamese at home, English at school after my ESL classes I had to take in elementary. 
              I was never allowed to go to sleep overs and I always took my shoes off indoors.
              I had to go with my Mom to translate at all times because most places are English-only.
              I had to live with microaggressions and face being the only Vietnamese kid in a PWI of 700 kids.
              I had to assimilate and felt "too American" yet "too Vietnamese" for others, yet perfectly myself.
              Despite having these conflicts, I am proud to say I am Vietnamese-American. </p>
            <div className="photo-container">
              <img src={fishing} alt="Me fishing" className="american-photo" />
              <img src={headshot} alt="My headshot" className="american-photo" />

            </div>
          </div>
          <div className="experience-card">
            <h3>Freedom & Opportunity</h3>
            <p>The American dream my family chased is being realized. They came from Vietnam so I could have what they couldn't.
              I'm able to live free and experience more than they were able to because of their sacrifice of leaving their family behind
              and going to a place they hardly know. Now I can enjoy that freedom and honor their sacrifice for what they did for me and my brother.
              I have obligations to fulfill because I'm Vietnamese, but I have dreams I want to chase because I'm American. Sometimes it's about finding the compromise.
            </p>
            <div className="photo-container">
              <img src={family} alt="My family" className="american-photo" />
              <img src={canoe} alt="Me canoeing" className="american-photo" />
            </div>
          </div>
          <div className="experience-card">
            <h3>Building Bridges</h3>
            <p>Sharing Vietnamese culture with American friends is one of my favorite things. Teaching them how to say 
            Vietnamese words, how to cook some of our foods, or celebrate like we're at a two-year old's birthday party is all apart of the experience.
            For me, it's like being the bridge between the East and the West. Even more so because culture is meant to be shared and I'm its conduit.</p>
            <div className="photo-container">
              <img src={home} alt="My friends" className="american-photo" />
              <img src={culture} alt="Vietnamese Wedding" className="american-photo" />
            </div>
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
              <p>I am still growing, learning, and trying new experiences from both cultures</p>
            </div>
            <div className="identity-item">
              <span className="icon">📚</span>
              <p>I can read and speak in two languages</p>
            </div>
            <div className="identity-item">
              <span className="icon">🎵</span>
              <p>I can sing and vibe to cải lương and hip-hop. Karaoke runs in our veins</p>
            </div>
            <div className="identity-item">
              <span className="icon">🧵</span>
              <p>I honor my ancestors and family while pursuing my own dreams</p>
            </div>
            <div className="identity-item">
              <span className="icon">✨</span>
              <p>I am my own melting pot of identity and culture, which makes me <strong><span style={{color:"purple"}}>unique</span></strong></p>
            </div>
          </div>
            <div className="photo-container">
              <img src={tet} alt="tet celebration" className="photo" />
              <img src={me} alt="me" className="photo" />
              <img src={basketball} alt="basketball with friends" className="photo" />

            </div>
          <p className="identity-statement">
            Being Vietnamese-American isn't about choosing between two cultures.
            It's about celebrating being both. It's truly a privilege to be someone
            who can serve as a bridge between cultures and to be proud about both identities.
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
        <p>tôi là• i am</p>
      </footer>
    </div>
  );
}

export default App;