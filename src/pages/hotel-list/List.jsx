import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Hotellist from "../../components/hotel-list/Hotellist";
import Subscribe from "../../components/subscribe/Subscribe";
import Footer from "../../components/footer/Footer";



function List() {

const location = useLocation();
const [destination, setDestination] = useState(location.state.destination);
const [date, setDate] = useState(location.state.date);
const [openDate, setOpenDate] = useState(false);
const [option, setOption] = useState(location.state.option);

  return (
    <div>
      <Navbar />
      <Header type={"list"} />
        <div className="list-container">
          <div className="list-wrapper">
            <div className="list-search">
              <h2 className="search-title">Search</h2>
              <div className="search-item">
                 <label >Destination/Property name:</label>
                 <input type="text" placeholder={destination} className="list-search-destination" />
              </div>
              <div className="search-item">
                 <label >Check-in/out</label>
                 <span 
                 onClick={()=> setOpenDate(!openDate)}
                 className="search-item-date">
                  {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy") }`}
                  </span>
                  { openDate && <DateRange 
                  onChange={(item)=> setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  />}
              </div>
              <div className="search-item">
                 <label >3 Night stay</label>
                 <span className="search-item-date">
                 {`${option.adult} Adults . ${option.children} Children . ${option.rooms} Rooms`}
                 </span>
                 
            </div>
             <button className="update-search">
              Search
             </button>
            </div>

            <div className="list-hotel">
            <Hotellist />
            </div> 
          </div>
        </div>
            <Subscribe />
            <div className="hotel-list-footer">
            <Footer />

            </div>
      </div>
  )
}

export default List;