import React, { useState } from 'react';
import './styles/Home.css';
import homePageImage from './images/train-booking.png';
import { Link } from 'react-router-dom';

// Assume indianCitiesWithRailwayStationCodes is an array of cities with their station codes
const indianCitiesWithRailwayStationCodes = [
  "Mumbai - BCT",
  "Delhi - NDLS",
  "Bangalore - SBC",
  "Kolkata - HWH",
  "Chennai - MAS",
  "Hyderabad - HYB",
  "Ahmedabad - ADI",
  "Pune - PUNE",
  "Jaipur - JP",
  "Lucknow - LKO",
  "Kanpur - CNB",
  "Nagpur - NGP",
  "Indore - INDB",
  "Patna - PNBE",
  "Bhopal - BPL",
  "Ludhiana - LDH",
  "Agra - AGC",
  "Vadodara - BRC",
  "Varanasi - BSB",
  "Surat - ST",
  "Visakhapatnam - VSKP",
  "Coimbatore - CBE",
  "Kochi - ERS",
  "Madurai - MDU",
  "Vijayawada - BZA",
  "Guwahati - GHY",
  "Thiruvananthapuram - TVC",
  "Bhubaneswar - BBS",
  "Amritsar - ASR",
  "Jabalpur - JBP",
  "Raipur - R",
  "Allahabad - ALD",
  "Mangalore - MAQ",
  "Jodhpur - JU",
  "Rajkot - RJT",
  "Cuttack - CTC",
  "Kota - KOTA",
  "Salem - SA",
  "Warangal - WL",
  "Bhilai - BIA",
  "Guntur - GNT",
  "Dehradun - DDN",
  "Jalandhar - JUC",
  "Jammu - JAT",
  "Noida - NDLS",
  "Kollam - QLN",
  "Thrissur - TCR",
  "Srinagar - SINA",
  "Chandigarh - CDG",
  "Ghaziabad - GZB",
  "Gorakhpur - GKP",
  "Panipat - PNP",
  "Shimla - SML",
  "Durgapur - DGR",
  "Rohtak - ROK",
  "Kakinada - COA",
  "Bilaspur - BSP",
  "Kharagpur - KGP",
  "Bhiwandi - BIRD",
  "Jamshedpur - TATA",
  "Amravati - AMI",
  "Bikaner - BKN",
  "Durg - DURG",
  "Ajmer - AII",
  "Gulbarga - GR",
  "Jamnagar - JAM",
  "Bhatpara - HGY",
  "Saharanpur - SRE",
  "Sagar - SAG",
  "Pali - Pali",
  "Bijapur - BJP",
  "Alwar - AWR",
  "Brahmapur - BAM",
  "Mathura - MTJ",
  "Kurnool - KRNT",
  "Kadapa - HX",
  "Hapur - HPU",
  "Shivamogga - SME",
  "Rampur - RMU",
  "Shahjahanpur - SPN",
  "Hosapete - HPT",
  "Chandrapur - CD",
  "Bhimavaram - BVRM",
  "Ongole - OGL",
  "Nandyal - NDL",
  "Guntakal - GTL",
  "Khammam - KMT",
  "Orai - ORAI",
  "Puducherry - PDY",
  "Anantapur - ATP",
  "Machilipatnam - MTM",
  "Kavali - KVZ",
  "Srikakulam - CHE",
  "Chittoor - CTO",
  "Hindupur - HUP",
  "Narasaraopet - NRT",
  "Tadipatri - TU",
  "Tenali - TEL",
  "Proddatur - PRDT",
  "Adoni - AD",
  "Madanapalle - MPL",
  "Chilakaluripet - CLX",
  "Gudur - GDR",
  "Mandya - MYA",
  "Hassan - HAS",
  "Udupi - UD",
  "Gangtok - GKC",
  "Aizawl - AIZ",
  "Agartala - AGTL",
  "Imphal - IMP",
  "Kohima - NHK",
  "Itanagar - IAN",
  "Shillong - SGUJ",
  "Puri - PURI",
  "Kangra - KANGRA",
  "Dharamshala - DHL",
  "Ambikapur - ABKP",
  "Chirmiri - CHRM",
  "Bhatapara - BYT",
  "Korba - KRBA",
  "Jagdalpur - JDB",
  "Raigarh - RIG",
  "Mahasamund - MSR",
  "Rajnandgaon - RJN",
  "Balurghat - BLGT",
  "Bankura - BQA",
  "Bardhaman - BWN",
  "Cooch Behar - COB",
  "Darjeeling - DJ",
  "Hooghly - HYG",
  "Howrah - HWH",
  "Jalpaiguri - JPE",
  "Malda - MLDT",
  "Midnapore - MDN",
  "Murshidabad - MB",
  "Nadia - ND",
  "North 24 Parganas - N24P",
  "Purulia - PRR",
  "South 24 Parganas - S24P",
  "Uttar Dinajpur - UTD",
  "Asansol - ASN",
  "Siliguri - SGUJ",
  "Dum Dum - DDJ",
  "Alipurduar - APDJ",
  "Barrackpore - BP",
  "Bally - BLY",
  "Durgapur - DGR",
  "Kamarhati - KMA",
  "Titagarh - TGH",
  "Haldia - HLZ",
  "Uluberia - ULB",
  "Barasat - BT",
  "Bidhannagar - BNX",
  "Dankuni - DKAE",
  "Santipur - STB",
  "Ashoknagar Kalyangarh - ASKR",
  "Baharampur - BPC",
  "Bangaon - BNJ",
  "Chakdaha - CDH",
  "Champdani - CPDR",
  "Gangarampur - GRMP",
  "Contai - CNT",
  "Dainhat - DHQ",
]

const HomePage = ({ loggedUser, startCity, destinationCity, setStartCity, setDestinationCity }) => {
  
  const [startCitySuggestions, setStartCitySuggestions] = useState([]);
  const [destinationCitySuggestions, setDestinationCitySuggestions] = useState([]);

  const handleStartCityChange = (event) => {
    const value = event.target.value;
    setStartCity(value);
    // Filter cities based on user input
    const suggestions = indianCitiesWithRailwayStationCodes.filter((city) =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );
    setStartCitySuggestions(suggestions);
  };

  // Function to handle changes in destination city input
  const handleDestinationCityChange = (event) => {
    const value = event.target.value;
    setDestinationCity(value);
    // Filter cities based on user input
    const suggestions = indianCitiesWithRailwayStationCodes.filter((city) =>
      city.toLowerCase().startsWith(value.toLowerCase())
    );
    setDestinationCitySuggestions(suggestions);
  };
  // Function to handle selection of start city suggestion
  const handleStartCitySelect = (selectedCity) => {
    setStartCity(selectedCity);
    setStartCitySuggestions([]);
  };

  // Function to handle selection of destination city suggestion
  const handleDestinationCitySelect = (selectedCity) => {
    setDestinationCity(selectedCity);
    setDestinationCitySuggestions([]);
  };

 
  return (
    <div className="home-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="image-container">
              <img className="main-img img-fluid w-100" src={homePageImage} alt="Home" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-container">
          <h1 className="title">TrainSlot365</h1>
          <p className="description">Welcome to TrainSlot365, where we revolutionize the way you book train tickets. Say goodbye to long queues and endless waits. With TrainSlot365, you can effortlessly manage your train bookings with secure login, intuitive calendar views, and quick slot reservations. Whether you're planning your daily commute or a weekend getaway, TrainSlot365 ensures you never miss a beat. Experience the future of hassle-free train scheduling today!</p>
          {
            (loggedUser) 
            ? 
            <>
              <p>Select Start Station:</p>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <input
                  type="text"
                  value={startCity}
                  onChange={handleStartCityChange}
                />
                {/* Suggestions for start city */}
                {startCitySuggestions.length > 0 && (
                  <ul className="input-suggestions">
                    {startCitySuggestions.map((city, index) => (
                      <li key={index} onClick={() => handleStartCitySelect(city)}>{city}</li>
                    ))}
                  </ul>
                )}
              </div>

              <p>Select Destination Station:</p>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <input
                  type="text"
                  value={destinationCity}
                  onChange={handleDestinationCityChange}
                />
                {/* Suggestions for destination city */}
                {destinationCitySuggestions.length > 0 && (
                  <ul className="input-suggestions">
                    {destinationCitySuggestions.map((city, index) => (
                      <li key={index} onClick={() => handleDestinationCitySelect(city)}>{city}</li>
                    ))}
                  </ul>
                )}
              </div>
            <Link to='/calender'> <button className='getStartedButton' >Start Booking</button></Link> 
            </>
            :
            <Link to='/signup'> <button className='getStartedButton' >Get Started</button></Link> 
          }
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;