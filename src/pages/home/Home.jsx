import "./home.css";
import City from "../../components/city/City";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Propertylist from "../../components/propertylist/Propertylist";
import Propertyfeature from "../../components/propertyfeature/Propertyfeature";
import Subscribe from "../../components/subscribe/Subscribe";
import Footer from "../../components/footer/Footer";


function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="home-container">
        <City />
        <h1 className="home-title">Browse by property type</h1>
        <Propertylist />
        <h1 className="home-title">Homes guests love</h1>
        <Propertyfeature />
        <Subscribe />
        <Footer />
        <div className="copyright">

        <span>Copyright © 1996 2023 Booking.com™. All rights reserved.</span>
        </div>

        </div>
    </div>
  )
}

export default Home;