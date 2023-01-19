import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Subscribe from "../../components/subscribe/Subscribe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Hotel() {

  const [slideIndex, setSlideIndex] = useState(0);
  const [slideopen, setSlideopen] = useState(false);

  const hotelImage = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/7329651.jpg?k=153c14eef5cc54cb51cb52b98cbf999c6219389744f37ec3d0f2cf5c88096350&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/285212371.jpg?k=a8616a73c1f0d0dd04058081dd6f50fcd75dc25fa0fdccfcb07363a0d0be74c6&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/285212034.jpg?k=071e4dff5905f0582390a4fabd3eab91f16e8d66e8a0ed2d92ec6d90dbc99b49&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/285212375.jpg?k=3c9e9618b9343a7143d31dd2e1ca45f38d31825fd81b639a0e989019226ab12f&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/7828996.jpg?k=ebb6ab74b3bc448dc3e3a6fa1f10ad96952218b01df45e13281c8c5ffbda3666&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/115645325.jpg?k=abb98dbe6251358e3c81cc76be5c686a402aa080daa5cb679a2d09e08941392e&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/180665341.jpg?k=9c389a0c14827a0cb420cb0e6e447055c7764ece7f149d08dd210fb439b934d4&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/180665412.jpg?k=f538a0102adf8ab64a0d68e3108eb7bbc1df951b3b56f8dc61193b9c4d872083&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/42249104.jpg?k=2569ffe15e4a280d317291d7897e901b82e8ec610ba71a070459e563452fa169&o=&hp=1"
    },
  ]

  const handleSlide = (i)=>{
    setSlideIndex(i)
    setSlideopen(true)
  }

  const handleMove = (direction)=>{
   let newSlideIndex;

   if(direction === "l"){
    newSlideIndex = slideIndex === 0 ? 8 : slideIndex - 1;
   } else{
    newSlideIndex = slideIndex === 8 ? 0 : slideIndex + 1;

   }
   setSlideIndex(newSlideIndex)
  }

  

  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      <div className="hotel-container">
        { slideopen && <div className="hotel-slider">
          <FontAwesomeIcon icon={faCircleXmark}
           onClick={()=> setSlideopen(false)} 
           className="cross"/>
          <FontAwesomeIcon icon={faCircleArrowLeft}
          onClick={()=> handleMove("l")}
          className="arrow" />
          <div className="hotel-slider-wrapper">
          
          <img src={hotelImage[slideIndex].src} alt="" className="slide-image" />

          </div>
          <FontAwesomeIcon icon={faCircleArrowRight}
          onClick={()=> handleMove("r")}
          className="arrow"/>
        </div>}
        <div className="hotel-wrapper">
          <div className="hotel-title-container">
          <h2 className="hotel-title">Hotel Grand Tower</h2>
           <button className="hotel-reserve-btn">Reserve or Book Now!</button>
          </div>
          <div className="hotel-address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Near Jawahar Circle, Ashram Marg,, 302015 Jaipur, India</span>            
          </div>
          <span className="hotel-distance">
            Excellent Location - 500 mtr from center
          </span>
          <span className="hotel-price-highlight">
            Book a stay over <b>₹12,323</b>  at this property and get a free airport taxi
          </span>
          <div className="hotel-image-container">
            {hotelImage.map((e, i)=>(
              <div key={i} className="hotel-image-wrapper">
                <img onClick={()=>handleSlide(i)} src={e.src} className = "hotel-image" alt="" />
              </div>
            ))}
          </div>
          <div className="hotel-description-container">
            <div className="hotel-description">
          <h2>
            Get the celebrity treatment with world-class service at Jaipur Marriott Hotel
          </h2>
          <span>
          Jaipur Marriott Hotel is located in the commercial area of Ashram Marg, a 10-minute drive from the International Airport of the city. The luxurious 5-star hotel mixes tradition with modernity and offers a spa, free parking and free WiFi.
          </span>
          <span>
          Air-conditioned guestrooms are fitted with an iPod dock, tea/coffee making facilities and a flat-screen TV with satellite channels. The private bathroom comes with bathroom amenities and a bathtub.
          </span>
          <span>
          Marriott Jaipur has a fully equipped business center with fax and photocopying facilities. The tour desk can assist guests with making travel arrangements. Laundry and dry cleaning services are offered. The property also features large banquet spaces to host a variety of events, especially for weddings in Jaipur.
          </span>

            </div>
            <div className="hotel-description-price">
              <h3>Perfect for a 9-night stay!</h3>
             <span> Located in a real heart of jaipur.
              This property has an excellent location score of 9.8! 
              </span>
              <span className="price">
             <b>₹12,323</b>  (9 nigths)
              </span>
              <button className="hotel-description-btn">
              Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>
        <Subscribe />
        <div className="hotel-footer">
        <Footer />

        </div>
        <div className="copyright-1">

        <span>Copyright © 1996 2023 Booking.com™. All rights reserved.</span>
        </div>
      </div>
    </div>
  )
}
