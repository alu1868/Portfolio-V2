import './App.css';
import React, {useState} from "react"

// Import Static Components
import Nav from "./components/Nav"
import Footer from "./components/Footer"

// Import Variable Components
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Home from "./components/Home"

function App() {

  const [currentPage, setCurrentPage] = useState();

  // switch statement
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Home />;
  }

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div className="flex-wrapper">
      <div className="App">
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <main>
        </main>
        <footer><Footer /></footer>
      </div>
    </div>
  );
}

export default App;
