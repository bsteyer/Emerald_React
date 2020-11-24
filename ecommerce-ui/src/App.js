import React from 'react';
import logo from './logo.svg';
import './App.css';
import airbnbs from './airbnbs.json';
import { Button } from 'react-bootstrap';
import shoppingcart from './shoppingcart.js';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faUserPlus, faFrog, faHome, faDesktop, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div
          className="App-link"
        >
        <div>
          <Navbar className="nav-style" bg="light" variant="light">
                <Nav className="mr-auto"> 
                <Nav.Link className="home-style hover-style" href="#home"> <FontAwesomeIcon className= "icon-style" size='lg' icon={faFrog} /> Home</Nav.Link>
                <Nav.Link className="margin-style hover-style" href="#features"> <FontAwesomeIcon className= "icon-style" icon={faHome} /> Places to Stay </Nav.Link>
                <Nav.Link className="margin-style hover-style" href="#features"> <FontAwesomeIcon className= "icon-style" icon={faDesktop} /> Login </Nav.Link>
                <Nav.Link className="margin-style hover-style" href="#features"> <FontAwesomeIcon className = "icon-style" icon={faUserPlus} /> Sign Up </Nav.Link>
                 <Nav.Link className="" className="margin-style hover-style" href="#pricing"> <FontAwesomeIcon className = "icon-style" icon={faCoins} />Pricing </Nav.Link>
              </Nav>
            </Navbar>
        </div>
        <div className ="background-style">
        <div  className="logo-style">
            <Jumbotron>
              <h1 className="h1-style">Looking for the Best Rentals in Seattle?</h1>
                <p className="p-style">
                  Look no futher! We have you covered. We combine and aggregate apartment listings.
                </p>
                <p>
                  <Form inline>
                  <Button className="search-style" variant="primary">Search</Button>
                  </Form> 
                </p>
            </Jumbotron>
          </div>
        </div>

          <div> 
            <p> <strong> Aggregate Seattle Apartment Destinations </strong> </p>
          </div>

        <h1>  Search 1,323 Seattle properties </h1>

          {/* const [data, setData] = useState([
    'Brian',
    'Aaron',
    'Evan'
  ]);
  const [displayedData, setDisplayedData] = useState(data);
  const [filter, setFilter] = useState(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <input onChange={(e) => {
        const { value } = e.target;
        setFilter(value);
        setDisplayedData(data.filter(nm => new RegExp(value, 'i').test(nm)))
      }} />
      {
        displayedData
        .map(name => {
          return <p>{name}</p>;
        })
      }
    </div>
  ); */}


        {/* <div className="flex-style">
        {airbnbs.map(apartmentinfo => {
          return(
          <div className="image-style-2">

            <p>
              <img className="image-style" src={apartmentinfo.image}  />
            </p>
            <p>
              <span className="title-style">{apartmentinfo.title} </span>
            </p>
            <p>
            ${apartmentinfo.payment.cost} <Button className ="button-style" variant="primary" href ="briansteyer.com">Add to Shopping Cart</Button>{' '}
            </p>
          </div> */}
          
          {/* )
        })}
        </div> */}
        


        <div className="list-style" > 
          <ul className="list-style-2">
            <li > Spacous interior Affordable prices Elegent design Quick purchase</li>
          </ul>
          </div>
        <div>
           <p className="footer-style"> Copyright © Brian Steyer 2020</p> 
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
