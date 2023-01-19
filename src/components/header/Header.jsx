import "./header.css";
import {faBed, faCalendar, faCar, faPerson, faPlane, faTaxi, faTowerObservation} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { useState } from "react";
import { format } from "date-fns";
import {NavLink, useNavigate} from "react-router-dom";

function Header({type}) {
    const [destination, setDestination] = useState("")
    const [dateOpen, setDateOpen] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
        }
      ]);

     

      const [openOption, setOpenOption] = useState(false)
      const [option, setOption] = useState(
        {
            adult: 1,
            children: 0,
            rooms: 1,
        }
      );

      const navigate = useNavigate()

      const handleOption = (value, operator)=>{
         setOption((prev)=>{
            return{
                ...prev,
                [value]: operator === "i" ? option[value] + 1 : option[value] - 1,
            }
         })  
      }
    

      const handleSearch = ()=>{

        navigate("/list", {state:{destination, date, option}})
       

      }

      

  return (
    <div className="header">
        <div className={type === "list" ? "header-container listMode" : "header-container"}>
            <div className="header-item">
            <NavLink to="/" className="navlink-icon" >  
            <div className="header-itemList active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            </NavLink>
            <div className="header-itemList">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="header-itemList">
            <FontAwesomeIcon icon={faCar} />
            <span>Cars Rentals</span>
            </div>
            <div className="header-itemList">
            <FontAwesomeIcon icon={faTowerObservation} />
            <span>Attractions</span>
            </div>
            <div className="header-itemList">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
            </div>
         </div>
         { type !== "list" &&
            <>
         <h1 className="header-title">Find your next stay</h1>
         <p className="header-description">Search low prices on hotels, homes and much more...</p>

         <div className="header-search">
            <div className="header-searchItem">
                <FontAwesomeIcon icon={faBed} className="header-icon" />
                <input type="text" 
                placeholder="Where are you going"
                className="header-searchInput" 
                onChange={(e)=> setDestination(e.target.value)}
                />
            </div>
            <div className="header-searchItem">
                <FontAwesomeIcon icon={faCalendar} className="header-icon" />
                <span onClick={()=> setDateOpen(!dateOpen)} className="header-searchDate">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy") }`} </span>
                {dateOpen && <DateRange
                 editableDateInputs={true}
                 onChange={item => setDate([item.selection])}
                 moveRangeOnFirstSelection={false}
                 ranges={date}
                 minDate={new Date()}
                 className="date"
                 />}
            </div>
            <div className="header-searchItem" >
                
                <FontAwesomeIcon icon={faPerson} className="header-icon" />
               
                <span className="header-searchText" onClick={()=> setOpenOption(!openOption)} >
                    {`${option.adult} Adults . ${option.children} Children . ${option.rooms} Rooms`}
                </span>
                
                { openOption &&

                <div className="options">
                    <div className="option-item">
                        <div className="option-itemList">
                            
                            <span className="option-text">Adults</span>
                            <div className="button-container">
                            <button className="option-button"
                            disabled = {option.adult <=1}
                            onClick={()=> handleOption("adult", "d")}>-</button>
                            <span className="option-counter">{option.adult}</span>
                            <button className="option-button" onClick={()=> handleOption("adult", "i")}>+</button>
                            </div>
                                
                        </div>
                        <div className="option-itemList">

                            <span className="option-text">Children</span>
                            <div className="button-container">
                            <button className="option-button"
                            disabled = {option.children <=0}
                            onClick={()=> handleOption("children", "d")}>-</button>
                            <span className="option-counter">{option.children}</span>
                            <button className="option-button" onClick={()=> handleOption("children", "i")}>+</button>
                            </div>
                                
                        </div>
                        <div className="option-itemList">

                            <span className="option-text">Rooms</span>
                            <div className="button-container">
                            <button className="option-button"
                            disabled = {option.rooms <=1}
                            onClick={()=> handleOption("rooms", "d")}>-</button>
                            <span className="option-counter">{option.rooms}</span>
                            <button className="option-button" onClick={()=> handleOption("rooms", "i")} >+</button>
                            </div>
                                
                        </div>
                    </div>
                </div>
                }
            </div>
            <div className="header-searchItem">
                <button className="header-searchButton" onClick={handleSearch}>
                    Search
                </button>
            </div>
         </div>
         </>
         }
        </div>
    </div>
  )
}

export default Header