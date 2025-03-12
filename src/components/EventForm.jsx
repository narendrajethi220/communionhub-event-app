import "../index.css"
import { useState } from "react"
const EventForm = ({addEvent}) => {
    const [title,setTitle]=useState("");
    const [category,setCategory]=useState("");
    const [date,setDate]=useState(Date.now());
    const [location,setLocation]=useState("");
    const [description,setDescription]=useState("");
    
    const handleSubmit=(event)=>{
      event.preventDefault();
    
      const newEvent={
       id:Date.now(),
       title,
       category,
       date,
       location,
       description
     };

    addEvent(newEvent);
    
    setTitle("");
    setCategory("");
    setDate("");
    setLocation("");
    setDescription("");
  
  }

  return (
    <div className="event-form">
      <h1 className="event-form-header">Add New Event</h1>
    <form  onSubmit={handleSubmit}>
        <label className="event-title">Title:
            <input 
              type="text"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              required
            />
        </label>

        <label className="event-date">Date:
            <input 
              type="date"
              value={date}
              onChange={(e)=>setDate(e.target.value)}
            />
        </label>

        <label className="event-location">Location:
            <input 
              type="text"
              value={location}
              onChange={(e)=>setLocation(e.target.value)}
              required
            />
        </label>
        
        <label className="event-category">Category:
            <select value={category} onChange={e=>setCategory(e.target.value)} required>
               <option value="">Select Category</option>
               <option value="Religious">Religious</option>
               <option value="Social">Social</option>
               <option value="Charity">Charity</option>   
            </select>
        </label>

        <label className="event-description">Description:
            <textarea
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            />
        </label>
        <button className="btn-event-add" type="submit">Submit</button>
    </form>
    </div>
  )
}

export default EventForm