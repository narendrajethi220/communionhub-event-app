import "../index.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
      <header id="hero">
      <h1 id="hero-main-title">Welcome to <span id="hero-title"> Communion </span> App</h1>
      <p id="hero-subtitle">Connecting People Across Faiths & Interests</p>
     </header>
     </div> 
     <div className="hero-features">
        <div className="hero-features-header">
    
        <img src="/images/advantages.png"/>
    
        <h2 className="hero-feature-title">Unite, Innovation,<span className="feature-img"><img src="/images/feature-image-2.png"/></span></h2>
        <h2 className="hero-feature-title"><span className="feature-img"><img src="/images/feature-image-1.png"/></span> Connect, Inspires </h2>
        <h2 className="hero-feature-title">
        Together <span className="feature-img"><img src="/images/feature-people-image.png"/></span>
        </h2>
        
        <p className="hero-feature-subtitle">
        Connecting people of all faiths through events and community support.
        </p>
       
       <div className="btn-explore-events">
       <Link className="explore-event" to="/events">Explore Events <span><img
       className="icon-arrow" src="/images/icon-arrow.png"/></span></Link>
       </div>

        </div>
    
        <div className="hero-features-images">
        <img className="hero-feature-image" src="/images/feature-event-image-2.webp"/>
        <img className="hero-feature-image" src="/images/feature-event-image-3.avif"/>
        <img className="hero-feature-image" src="/images/feature-event-image-1.avif"/>
        
        </div>
     </div>
    
    </div>
  )
}

export default Home