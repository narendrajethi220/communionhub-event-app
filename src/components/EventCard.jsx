// (Title, Date, Location, Description).
import { useState } from "react";
const EventCard = ({events}) => {
    const [category, setCategory]=useState("All");
  return (
    <>
    <form className="event-category-form">
        <label className="event-filter">
            Filter by Category:
            <select name="selected-category" 
            value={category}
            onChange={e=>setCategory(e.target.value)}
            >
               <option value="All">All</option> 
               <option value="Religious">Religious</option>
               <option value="Social">Social</option>
               <option value="Charity">Charity</option>
            </select> 
        </label>
    </form>
    <div className="event-card">
        {events.filter((event)=>
        category==="All" || event.category===category).map((event)=>
            <div className="event-card-details" key={event.id}>
              <h2 className="event-card-title">{event.title}</h2>
              <h4 className="event-card-date">{event.date}</h4>
              <h5 className="event-card-location">{event.location}</h5>
              <p className="event-card-description">{event.description}</p>
              <p className="event-join-message"><img className="icon-img" src="/images/star.png"/> Join others in this event</p>
            </div>
        )}
    </div>
    </>
  )
}

export default EventCard;