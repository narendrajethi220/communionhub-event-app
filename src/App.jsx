import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventForm from "./components/EventForm";
import initialEvents from "./data/EventData.jsx";
const App = () => {
  const [events, setEvents] = useState(initialEvents);

  const addEvent = (newEvent) => {
    setEvents([newEvent, ...events]);
  };
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events events={events} />} />
        <Route path="/addevents" element={<EventForm addEvent={addEvent} />} />
      </Routes>
    </div>
  );
};

export default App;
