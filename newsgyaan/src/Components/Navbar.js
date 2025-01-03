import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Findresult from './Findresult';
import { Appcontext } from '../Context/Appcontext';

const Navbar = () => {
  const [result, setresult] = useState([]);
  const [input, setinput] = useState('');
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { token, setToken } = useContext(Appcontext);
  const fetchdata = async () => {
    let response = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4aeb55b3b1b54b3f95416061e611648b'
    );
    let data = await response.json();
    if (data && data.articles && input) {
      const result_val = data.articles.filter(
        (article, index, self) =>
          article &&
          article.title &&
          self.findIndex((a) => a.url === article.url) === index &&
          article.title.toLowerCase().includes(input.toLowerCase())
      );

      if (result_val) {
        setresult(result_val);
      }
    }
  };


  useEffect(() => {
    if (input) fetchdata();
    else setresult([])
  }, [input])


  const handlechange = (value) => {
    setinput(value);
  };



  const handleNavItemClick = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleremove = () => {
    localStorage.removeItem('token');
    setToken('');
  }


  return (
    <>
      <nav className='navbar position-sticky navbar-expand-lg navbar-dark bg-dark'>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/newsgyaan">
            NewsGyaan
          </Link>
          <button
            className="navbar-toggler"
            type="button"

            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={navbarOpen ? "true" : "false"} // Dynamically set aria-expanded
            aria-label="Toggle navigation"
            onClick={handleNavItemClick}
            // Toggle the navbar state when clicked
            style={{ transition: 'all ease-in 1s' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`} // Add "show" class to display when open
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/home"
                  onClick={handleNavItemClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/business"
                  onClick={handleNavItemClick}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/entertainment"
                  onClick={handleNavItemClick}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/health"
                  onClick={handleNavItemClick}
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/science"
                  onClick={handleNavItemClick}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/sports"
                  onClick={handleNavItemClick}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/technology"
                  onClick={handleNavItemClick}
                >
                  Technology
                </Link>
              </li>

                 {/* <button
                  value='btn'
                    onClick={handleremove}
                    className="nav-item text-white logout-btn bg-dark"
                    style={{ cursor: 'pointer', backgroundColor: 'white', width: '90px', borderRadius: '8px' }}
                  >
                Logout
              </button> */}
                
            </ul>
          </div>
          <form
            className="form-inline my-2 my-lg-0 fixed-top-right"
            style={{ maxWidth: '200px' }}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={input}
              onChange={(e) => handlechange(e.target.value)}
            />
          </form>
            <button
                  value='btn'
                    onClick={handleremove}
                    className="hidden nav-item text-white logout-btn bg-dark"
                    style={{ cursor: 'pointer', backgroundColor: 'white', width: '90px', borderRadius: '8px' ,height:'40px',marginLeft:'12px' }}
                  >
                Logout
              </button>
        </div>
      </nav>
      <div
        className="list"
        style={{
          display: 'flex',
          justifyContent: 'end',
          maxHeight: '30px',
        }}
      >
        <Findresult resultvalue={result} />
      </div>
    </>
  )
}



export default Navbar; 