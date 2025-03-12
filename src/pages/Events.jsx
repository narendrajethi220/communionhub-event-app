import "../index.css";
import EventCard from "../components/EventCard"
import { Link } from "react-router-dom";
const Events = ({events}) => {    
  return (
    <div className="events-page">
        <h2 className="events-page-header">We Helped Communities Connect & Flourish <span className="highlighted-text"> ✦ Upcoming Events </span> </h2>
        <div className="event-add-btn">
        <Link className="event-add" to="/addevents">Add Event<span> + </span></Link>
        </div>
        <EventCard events={events}/>
        
    </div>
  )
}

export default Events