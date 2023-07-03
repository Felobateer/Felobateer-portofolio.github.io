const { useState, useEffect } = React;

const Main = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Service />
      <Footer />
    </div>
  );
};

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

const Intro = () => {
  const goBooking = () => {
    window.location.href = "./gotelBooking.html";
  };

  return (
    <div id="Slideshow" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" id="slide1">
          <div class="text-center" id="slidetext">
            <h1>Gotel</h1>
            <h4>Plan your trip in minutes online</h4>
            <button onClick={goBooking} class="btn btn-warning">
              Book
            </button>
          </div>
        </div>
        <div class="carousel-item" id="slide2">
          <div id="slidetext">
            <h4>Choose your destination</h4>
          </div>
        </div>
        <div class="carousel-item" id="slide3">
          <div id="slidetext">
            <h4>
              Book the <span> hotel</span> that you want
            </h4>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#Slideshow"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#Slideshow"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const About = () => {
  return (
    <div id="about" class="row">
      <div id="aboutText" class="col-8">
        <h1 id="aboutTitle">About</h1>
        <p id="aboutText1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
          repudiandae quibusdam nulla alias? Harum, commodi ipsa eligendi qui
          consequuntur quas sed praesentium nulla nisi neque deleniti nesciunt
          ex quaerat debitis? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Minus distinctio sequi non culpa numquam quasi pariatur vel
          sunt! Reiciendis, amet temporibus? Obcaecati pariatur, ut
          exercitationem officiis dolorum possimus quos impedit! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Maxime autem at
          reprehenderit, commodi, eligendi dicta perspiciatis recusandae vero
          consequuntur nesciunt nostrum optio temporibus pariatur enim odit amet
          saepe. Dignissimos, reiciendis?
        </p>
        <p id="aboutText2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          voluptatum, voluptatibus assumenda obcaecati aliquid asperiores.
          Quibusdam maiores vero molestiae nobis iste asperiores distinctio
          quas, aut dolorum, sapiente pariatur reprehenderit cumque. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Maxime eum accusantium,
          magni excepturi necessitatibus debitis. Inventore labore ratione
          numquam quo velit non deserunt quibusdam nesciunt, deleniti quis
          corporis ab ex.
        </p>
      </div>
      <div id="aboutPic">
        <img id="touristsPic" src="./pic/tourist.jpg" />
      </div>
    </div>
  );
};

const Service = () => {
  const goBooking = () => {
    window.location.href = "./gotelBooking.html";
  };

  return (
    <div>
      <h1 class="text-center mb-5">Popular searches</h1>
      <div id="city" class="row justify-content-center">
        <div id="cityCard" class="col-2">
          <img id="cityImg" src="./pic/Berlin.jpg" />
          <div id="cityText" class="d-flex row">
            <label>Berlin</label>
            <label>7 Hotels</label>
            <label>On average &euro; 154</label>
            <button onClick={goBooking} class="btn btn-warning">
              Book
            </button>
          </div>
        </div>
        <div id="cityCard" class="col-2">
          <img id="cityImg" src="./pic/Munich.jpg" />
          <div id="cityText" class="d-flex row">
            <label>Munich</label>
            <label>11 Hotels</label>
            <label>On average &euro; 168</label>
            <button onClick={goBooking} class="btn btn-warning">
              Book
            </button>
          </div>
        </div>
        <div id="cityCard" class="col-2">
          <img id="cityImg" src="./pic/Hamburg.jpg" />
          <div id="cityText" class="d-flex row">
            <label>Hamburg</label>
            <label>8 Hotels</label>
            <label>On average &euro; 146</label>
            <button onClick={goBooking} class="btn btn-warning">
              Book
            </button>
          </div>
        </div>
        <div id="cityCard" class="col-2">
          <img id="cityImg" src="./pic/Darmstadt.jpg" />
          <div id="cityText" class="d-flex row">
            <label>Darmstadt</label>
            <label>14 Hotels</label>
            <label>On average &euro; 149</label>
            <button onClick={goBooking} class="btn btn-warning">
              Book
            </button>
          </div>
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

ReactDOM.render(<Main />, document.querySelector(".mainPage"));
