import React from "react";

function Nav({ currentPage, handlePageChange }) {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#home"
                    onClick={() => handlePageChange("Home")}
                    className={currentPage === "Home" ? "nav-link active" : "nav-link"}>
                        Home</a>
                </li>
                <li>
                    <a href="#About"
                    onClick={() => handlePageChange("About")}
                    className={currentPage === "About" ? "nav-link active" : "nav-link"}>
                        About</a>
                </li>
                <li>
                    <a href="#Work"
                    onClick={() => handlePageChange("Work")}
                    className={currentPage === "Work" ? "nav-link active" : "nav-link"}>
                        Work</a>
                </li>
                <li>
                    <a href="#contact"
                    onClick={() => handlePageChange("Contact")}
                    className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>
                        Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav