import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import logo from './assets/Appointme-02.png';
import car from './assets/salon.png';


const Index = () => {
  return (
    <>

      <header id="header" className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <div className="container-fluid">
            <a href="#">
              <img src={logo} height="50" width="180" alt="logo" />
            </a>
            {/* <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                <a href="#" className="nav-item nav-link active">Home</a>
                <a href="#" className="nav-item nav-link">About</a>
                <a href="#" className="nav-item nav-link">Services</a>
                <a href="#" className="nav-item nav-link">Contact</a>
              </div>
              <div className="navbar-nav ms-auto">
                <a href="#" className="btn-get-started">Get Started</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section id="hero" className="d-flex justify-content-center align-items-center">
        <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
          <h1>Welcome to AppointMe.com</h1>
          <h2>Experience the future of salon bookings with AppointMe <br></br>your seamless solution for hassle-free appointments</h2>
          <a href="#" className="btn-get-started">Get Started</a>
        </div>
      </section>

      <main id="main">

        <section id="about" className="about">
          <div className="container">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <img src={car} height="250" width="500" className="img-fluid" alt="" />
                </div>
                <div className="col-md-7">
                  <h2 className="section-title">What is AppointMe?</h2>
                  <p>
                    AppointMe revolutionizes the salon industry by offering a pioneering platform that redefines the way appointments are scheduled. With its cutting-edge technology, users enjoy an unparalleled online experience, seamlessly booking salon services with ease and convenience. <br></br>
                  </p><p>Gone are the days of tedious scheduling processes; AppointMe simplifies the entire procedure, empowering users to effortlessly arrange appointments with their preferred salons. By streamlining the booking process, AppointMe sets a new standard for efficiency and convenience in salon appointments, providing a hassle-free solution that enhances the overall customer experience.                  </p>                </div>

              </div>
            </div>

          </div>
        </section>

        <section id="why-us" className="why-us">
          <div class="container">
            <h2 className="section-title2">Why AppointMe?</h2>
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-4 custom-card">
                  <div class="card-body text-center">
                    <i class="bi bi-globe2 h3 mb-3"></i>
                    <h5 class="card-title">Seamless Online Platform</h5>
                    <p class="card-text">AppointMe offers a user-friendly online platform that allows individuals to schedule salon appointments effortlessly.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 custom-card">
                  <div class="card-body text-center">
                    <i class="bi bi-clock-history h3 mb-3"></i>
                    <h5 class="card-title">Effortless Booking Process</h5>
                    <p class="card-text">With just a few clicks, users can select the salon services they need and book appointments at their preferred times.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 custom-card">
                  <div class="card-body text-center">
                    <i class="bi bi-calendar-check h3 mb-3"></i>
                    <h5 class="card-title">Preferred Salon Services</h5>
                    <p class="card-text">Provides users with a comprehensive list of salon services, allowing them to choose from a variety of options based on their preferences and needs.</p>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </section>


      </main >


      <footer class="footer mt-auto py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="footer-info">
                <h3>About AppointMe</h3>
                <p>AppointMe is a revolutionary platform that simplifies salon bookings, providing users with a seamless experience to schedule appointments online.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="footer-contact">
                <h4>Contact Us</h4>
                <div>
                  <strong>Address:</strong> 123 Street, City, Country
                </div>
                <div>
                  <strong>Phone:</strong> +123 456 7890
                </div>
                <div>
                  <strong>Email:</strong> info@example.com
                </div>

                <div class="social-links">
                  <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                  <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                  <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                  <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>



      <script src="assets/js/main.js"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
    </>
  );
};

export default Index;

export function renderApp() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
  reportWebVitals();
}

// Call renderApp function to render the app
renderApp();
