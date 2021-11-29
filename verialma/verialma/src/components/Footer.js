import React from "react";

function Footer() {

  return (
    <div>
      <footer className="bg-dark text-white d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0">© 2021 Company, Inc</p>

        <a
          href="www.google.com"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
        
          </svg>
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="www.google.com" className="nav-link px-2">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="www.google.com" className="nav-link px-2">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="www.google.com" className="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="www.google.com" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="www.google.com" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;