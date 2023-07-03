const { useState, useEffect, useRef } = React;

const Navbar = () => {
  return (
    <div id="navbar">
      <img src="./pic/Gotel-logo.PNG" />

      <button
        class="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i class="fas fa-bars" />
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">
            <img src="./pic/Gotel-logo.PNG" />
          </h5>
        </div>
        <div class="offcanvas-body">
          <nav>
            <ul>
              <li>
                <a href="./gotel.html">Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Book</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div id="footer" class="row justify-content-center">
      <div id="footerSection" class="col-2 mx-5">
        <h1 class="text-black">Contact</h1>
        <p class="text-black">Gotel</p>
        <p class="text-black">
          500 Terry Francois Street
          <span class="text-black d-block"> San Francisco, CA 94158</span>
        </p>
      </div>
      <div id="footerSection" class="col-2 mx-5 d-flex row">
        <label class="text-black ">Tel 123-456-7890</label>
        <label class="text-black ">Email info@Gotel.com</label>
        <label class="text-black ">Book a Consulation</label>
        <label class="text-black ">
          <i class="fab fa-facebook text-black m-1"></i>
          <i class="fab fa-instagram text-black m-1"></i>
          <i class="fab fa-youtube text-black m-1"></i>
        </label>
      </div>
      <div id="footerSection" class="col-4 mx-5">
        <label class="text-black m-1">Subscribe to our Newsletter</label>
        <form class="m-2 form-inline" id="footerSection">
          <div class="d-flex align-items-center">
            <input
              class="form-control w-50 border-2 border-black"
              type="email"
              placeholder="Enter your email here*"
            />
            <button class="btn bg-secondary m-2">Join</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Selection = ({ sendSelection }) => {
  const [selectCity, setSelectCity] = useState("");
  const [selectStrDate, setSelectStrDate] = useState(null);
  const [selectEndDate, setSelectEndDate] = useState(null);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(1);
  const [price, setPrice] = useState(null);
  const [rating, setRating] = useState(null);
  const dropdownRef = useRef(null);

  const cityMenu = () => {
    dropdownRef.current.classList.toggle("show");
  };

  const handleSelectCity = (city) => {
    setSelectCity(city);
    dropdownRef.current.classList.remove("show");
  };

  const handleStrDate = (event) => {
    const strDate = event.target.value;
    const currentDate = new Date().toISOString().split("T")[0];

    if (strDate >= currentDate) {
      setSelectStrDate(strDate);
    } else {
      alert("Please select a date that is not earlier than the current date.");
      setSelectStrDate(currentDate);
    }
  };

  const handleEndDate = (event) => {
    const endDate = event.target.value;
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const tomorrow = currentDate.toISOString().split("T")[0];

    if (endDate > selectStrDate) {
      setSelectEndDate(endDate);
    } else {
      alert("Please select a date this is later than the starting date.");
      setSelectEndDate(tomorrow);
    }
  };

  const handleAddAdult = () => {
    const qty = adult + 1;
    setAdult(qty);
  };

  const handlesubAdult = () => {
    if (adult === 1) {
      return;
    } else {
      const qty = adult - 1;
      setAdult(qty);
    }
  };

  const handleAddChildren = () => {
    const qty = children + 1;
    setChildren(qty);
  };

  const handleSubChildren = () => {
    if (children === 0) {
      return;
    } else {
      const qty = children - 1;
      setChildren(qty);
    }
  };

  const handleAddRoom = () => {
    const qty = room + 1;
    setRoom(qty);
  };

  const handleSubRoom = () => {
    if (room === 1) {
      return;
    } else {
      const qty = room - 1;
      setRoom(qty);
    }
  };

  const handlePrice = (event) => {
    const priceRange = event.target.value;
    setPrice(priceRange);
  };

  const handleRating = (event) => {
    const chooseRating = event.target.value;
    const rate = parseInt(chooseRating);
    setRating(rate);
  };

  const handleSelection = () => {
    const selection = [
      selectCity,
      selectStrDate,
      selectEndDate,
      adult,
      children,
      room,
      price,
      rating,
    ];
    sendSelection(selection);
    console.log(selection);
  };

  window.onload = function () {
    var selectionbtn = document.getElementById("triggerSelection");
    selectionbtn.click();
  };

  return (
    <div id="selectionBar">
      <div id="destination" className="dropdown">
        <input
          type="text"
          className="form-control"
          placeholder={
            selectCity === "" ? "place your destination" : selectCity
          }
          onClick={cityMenu}
          value={selectCity}
          autoComplete="on"
        />

        <ul className="dropdown-menu" ref={dropdownRef}>
          <li>
            <button
              onClick={() => handleSelectCity("berlin")}
              className="dropdown-item btn"
              type="button"
            >
              Berlin
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelectCity("munich")}
              className="dropdown-item btn"
              type="button"
            >
              Munich
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelectCity("darmstadt")}
              className="dropdown-item btn"
              type="button"
            >
              Darmstadt
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSelectCity("hamburg")}
              className="dropdown-item btn"
              type="button"
            >
              Hamburg
            </button>
          </li>
        </ul>
      </div>
      <div id="dateRange" className="row">
        <div className="col-6">
          <input
            onChange={handleStrDate}
            placeholder="Select date"
            type="date"
            value={selectStrDate}
            className="form-control"
          />
        </div>
        <div className="col-6">
          <input
            onChange={handleEndDate}
            placeholder="Select date"
            type="date"
            value={selectEndDate}
            className="form-control"
          />
        </div>
      </div>
      <div id="guests" className="dropdown">
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {adult} Adult {children} children {room} room
        </button>
        <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
          <li>
            Adult
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={handlesubAdult}
                type="button"
                className="btn btn-danger"
              >
                -
              </button>
              <button type="button" className="btn">
                {adult}
              </button>
              <button
                onClick={handleAddAdult}
                type="button"
                className="btn btn-success"
              >
                +
              </button>
            </div>
          </li>
          <li>
            Children
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={handleSubChildren}
                type="button"
                className="btn btn-danger"
              >
                -
              </button>
              <button type="button" className="btn ">
                {children}
              </button>
              <button
                onClick={handleAddChildren}
                type="button"
                className="btn btn-success"
              >
                +
              </button>
            </div>
          </li>
          <li>
            Room
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={handleSubRoom}
                type="button"
                className="btn btn-danger"
              >
                -
              </button>
              <button type="button" className="btn">
                {room}
              </button>
              <button
                onClick={handleAddRoom}
                type="button"
                className="btn btn-success"
              >
                +
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div id="price" className="input-group">
        <label className="input-group-text" for="inputGroupSelect01">
          &euro;
        </label>
        <select
          onChange={handlePrice}
          className="form-select"
          id="inputGroupSelect01"
        >
          <option selected>Select your price range</option>
          <option value="1">0 - 50</option>
          <option value="2">50 - 100</option>
          <option value="3">100 - 200</option>
        </select>
      </div>
      <div id="rating">
        <div class="input-group mb-3">
          <select
            onChange={handleRating}
            class="form-select"
            id="inputGroupSelect02"
          >
            <option selected>Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label class="input-group-text" for="inputGroupSelect02">
            <i className="fas fa-star"></i>
          </label>
        </div>
      </div>
      <div id="submit">
        <button
          onClick={handleSelection}
          type="submit"
          className="btn btn-success"
          id="triggerSelection"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const Hotels = ({ applyFilters }) => {
  const hotels = [
    {
      name: "Hollywood Media Hotel on Kurfuerstendamm",
      price: 164,
      city: "berlin",
      rating: 4,
      id: 1,
      img: "./pic/B1.jpg",
    },
    {
      name: "Motel One Berlin AlexanderPlatz",
      price: 146,
      city: "berlin",
      rating: 5,
      id: 2,
      img: "./pic/B2.jpg",
    },
    {
      name: "Yggotel Ravn",
      price: 158,
      city: "berlin",
      rating: 3,
      id: 3,
      img: "./pic/B3.jpg",
    },
    {
      name: "Select Hotel Berlin Spiegelturm",
      price: 86,
      city: "berlin",
      rating: 4,
      id: 4,
      img: "./pic/B4.jpg",
    },
    {
      name: "Mercure Hotel Berlin Mitte",
      price: 162,
      city: "berlin",
      rating: 2,
      id: 5,
      img: "./pic/B5.jpg",
    },
    {
      name: "Sheraton Berlin Grand Hotel Esplanade",
      price: 198,
      city: "berlin",
      rating: 5,
      id: 6,
      img: "./pic/B6.jpg",
    },
    {
      name: "Intercity Hotel Berlin Ostbahnhof",
      price: 95,
      city: "berlin",
      rating: 3,
      id: 7,
      img: "./pic/B7.jpg",
    },
    {
      name: "relexa hotel Munich",
      price: 159,
      city: "munich",
      rating: 4,
      id: 8,
      img: "./pic/M1.jpg",
    },
    {
      name: "Hotel Blutenburg",
      price: 82,
      city: "munich",
      rating: 3,
      id: 9,
      img: "./pic/M2.jpg",
    },
    {
      name: "Hotel Am Moosfeld",
      price: 90,
      city: "munich",
      rating: 4,
      id: 10,
      img: "./pic/M3.jpg",
    },
    {
      name: "Ruby Lilly Hotel Munich",
      price: 183,
      city: "munich",
      rating: 4,
      id: 11,
      img: "./pic/M4.jpg",
    },
    {
      name: "Rilano 24/7 Hotel Munich",
      price: 49,
      city: "munich",
      rating: 3,
      id: 12,
      img: "./pic/M5.jpg",
    },
    {
      name: "Boutique Hotel Germania",
      price: 120,
      city: "munich",
      rating: 4,
      id: 13,
      img: "./pic/M6.jpg",
    },
    {
      name: "THE FLAG Meiller Gardens",
      price: 78,
      city: "munich",
      rating: 3,
      id: 14,
      img: "./pic/M7.jpg",
    },
    {
      name: "Eden Hotel Wolff",
      price: 169,
      city: "munich",
      rating: 5,
      id: 15,
      img: "./pic/M8.jpg",
    },
    {
      name: "Hilton Garden Inn Munich City West",
      price: 125,
      city: "munich",
      rating: 4,
      id: 16,
      img: "./pic/M9.jpg",
    },
    {
      name: "PLAZA Premium Munich",
      price: 122,
      city: "munich",
      rating: 5,
      id: 17,
      img: "./pic/M10.jpg",
    },
    {
      name: "AWA Hotel",
      price: 166,
      city: "munich",
      rating: 4,
      id: 18,
      img: "./pic/M11.jpg",
    },
    {
      name: "The Rilano Hotel Hamburg",
      price: 117,
      city: "hamburg",
      rating: 4,
      id: 19,
      img: "./pic/H1.jpg",
    },
    {
      name: "Super 8 by Wyndham Hamburg Mitte",
      price: 129,
      city: "hamburg",
      rating: 3,
      id: 20,
      img: "./pic/H2.jpg",
    },
    {
      name: "ibis Styles Hamburg Barmbek",
      price: 143,
      city: "hamburg",
      rating: 5,
      id: 21,
      img: "./pic/H3.jpg",
    },
    {
      name: "Dorint Hotel Hamburg-Eppendorf",
      price: 117,
      city: "hamburg",
      rating: 4,
      id: 22,
      img: "./pic/H4.jpg",
    },
    {
      name: "Generator Hamburg",
      price: 30,
      city: "hamburg",
      rating: 3,
      id: 23,
      img: "./pic/H5.jpg",
    },
    {
      name: "GRAND ELYSEE Hamburg",
      price: 200,
      city: "hamburg",
      rating: 5,
      id: 24,
      img: "./pic/H6.jpg",
    },
    {
      name: "Hotel Domicil Hamburg by Golden Tulip",
      price: 148,
      city: "hamburg",
      rating: 3,
      id: 25,
      img: "./pic/H7.jpg",
    },
    {
      name: "ARCOTEL Onyx Hamburg",
      price: 198,
      city: "hamburg",
      rating: 4,
      id: 26,
      img: "./pic/H8.jpg",
    },
    {
      name: "Greet hotel Darmstadt - to Accor hotel -",
      price: 75,
      city: "darmstadt",
      rating: 3,
      id: 27,
      img: "./pic/D1.jpg",
    },
    {
      name: "Intercity Hotel Darmstadt",
      price: 81,
      city: "darmstadt",
      rating: 4,
      id: 28,
      img: "./pic/D2.jpg",
    },
    {
      name: "Aspire Victory",
      price: 81,
      city: "darmstadt",
      rating: 3,
      id: 29,
      img: "./pic/D3.jpg",
    },
    {
      name: "Holiday Inn Express - Darmstadt, at IHG Hotel",
      price: 118,
      city: "darmstadt",
      rating: 3,
      id: 30,
      img: "./pic/D4.jpg",
    },
    {
      name: "Best Western Hotel Darmstadt Mitte",
      price: 124,
      city: "darmstadt",
      rating: 4,
      id: 31,
      img: "./pic/D5.jpg",
    },
    {
      name: "limehome Darmstadt Wilhelminestrasse - Digital Access",
      price: 119,
      city: "darmstadt",
      rating: 3,
      id: 32,
      img: "./pic/D6.jpg",
    },
    {
      name: "Maritime Hotel Darmstadt",
      price: 96,
      city: "darmstadt",
      rating: 5,
      id: 33,
      img: "./pic/D7.jpg",
    },
    {
      name: "B&B Hotel Darmstadt",
      price: 91,
      city: "darmstadt",
      rating: 2,
      id: 34,
      img: "./pic/D8.jpg",
    },
    {
      name: "Moxy Darmstadt",
      price: 134,
      city: "darmstadt",
      rating: 3,
      id: 35,
      img: "./pic/D9.jpg",
    },
    {
      name: "DORMERO Hotel Darmstadt",
      price: 91,
      city: "darmstadt",
      rating: 5,
      id: 36,
      img: "./pic/D10.jpg",
    },
    {
      name: "Easy Living Darmstadt",
      price: 48,
      city: "darmstadt",
      rating: 2,
      id: 37,
      img: "./pic/D11.jpg",
    },
    {
      name: "Hotel Waldfriede",
      price: 92,
      city: "darmstadt",
      rating: 4,
      id: 38,
      img: "./pic/D12.jpg",
    },
    {
      name: "Hotel Arheilgerhof",
      price: 68,
      city: "darmstadt",
      rating: 3,
      id: 39,
      img: "./pic/D13.jpg",
    },
    {
      name: "Hotel Reuterhof",
      price: 75,
      city: "darmstadt",
      rating: 3,
      id: 40,
      img: "./pic/D14.jpg",
    },
  ];

  const shuffleHotels = hotels.sort(() => Math.random() - 0.5);
  let strDate = new Date(applyFilters[1]);
  let endDate = new Date(applyFilters[2]);
  let nights = Math.ceil((endDate - strDate) / (1000 * 60 * 60 * 24));
  const night = (nights) => {
    if (nights === 0) {
      return (nights = 1);
    } else {
      return nights;
    }
  };

  let rooms = applyFilters[5];
  return (
    <div id="hotels">
      {shuffleHotels
        .filter((item) => {
          return applyFilters[0] === "" ? item : item.city === applyFilters[0];
        })
        .filter((item) => {
          return applyFilters[6] === "1" ? item.price <= 50 : item;
        })
        .filter((item) => {
          return applyFilters[6] === "2"
            ? item.price > 50 && item.price <= 100
            : item;
        })
        .filter((item) => {
          return applyFilters[6] === "3" ? item.price > 100 : item;
        })
        .filter((item) => {
          return applyFilters[7] === null
            ? item
            : item.rating === applyFilters[7];
        })
        .map((hotel) => (
          <div id="hotelCard" key={hotel.id}>
            <img src={hotel.img} alt={hotel.name} />
            <div id="cardText">
              <h7 id="cardName">{hotel.name}</h7>
              <h6 id="cardCity">
                {hotel.city.charAt(0).toUpperCase() + hotel.city.slice(1)}
              </h6>
              <span id="cardRating">
                {hotel.rating &&
                  Array(hotel.rating)
                    .fill()
                    .map((_, id) => <i key={id} className="fas fa-star" />)}
              </span>
              <h6 id="cardPrice">
                &euro; {hotel.price * rooms * night(nights)}
              </h6>
              <button id="cardbutton" className="btn btn-warning">
                Book now
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

const Booking = () => {
  const [filter, setFilter] = useState([]);

  const handleFiltration = (filters) => {
    setFilter(filters);
  };

  return (
    <>
      <Navbar />
      <Selection sendSelection={handleFiltration} />
      <Hotels applyFilters={filter} />
      <Footer />
    </>
  );
};

ReactDOM.render(<Booking />, document.querySelector(".bookingPage"));
