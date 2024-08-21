import ContentPart from "./ContentPart";
import "./menu.css";
import { useState, useRef } from "react";
import Footer from './Footer';

export default function Menu() {
  const [selectedTopic, setSelectedTopic] = useState('About');
  const collapseRef = useRef(null);

  function handle(selected) {
    setSelectedTopic(selected);
    // Close the menu
    if (collapseRef.current) {
      const collapseElement = collapseRef.current;
      const bsCollapse = new window.bootstrap.Collapse(collapseElement, { toggle: false });
      bsCollapse.hide();
    }
  }

  return (
    <>
      <div className="navbar-center">
        <nav className="navbar navbar-expand-lg navbar-light d-inline-flex">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse main-nav"
              id="navbarTogglerDemo01"
              ref={collapseRef}
            >
              <ul className="navbar-nav" style={{ backgroundColor: "#edf2f0", borderRadius: "6px" }}>
                <li className="nav-item px-2">
                  <a
                    className={`nav-link ${selectedTopic === 'About' ? 'active' : ''}`}
                    aria-current="page"
                    href="#"
                    onClick={() => handle('About')}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a
                    className={`nav-link ${selectedTopic === 'Projects' ? 'active' : ''}`}
                    href="#"
                    onClick={() => handle('Projects')}
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a
                    className={`nav-link ${selectedTopic === 'Contact' ? 'active' : ''}`}
                    href="#"
                    onClick={() => handle('Contact')}
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a
                    className={`nav-link ${selectedTopic === 'Acheivements' ? 'active' : ''}`}
                    href="#"
                    onClick={() => handle('Acheivements')}
                  >
                    Acheivements
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a
                    className="nav-link"
                    href="/docs/RamuResume.pdf"
                    download
                  >
                    Resume
                  </a>
                </li>
                <div className="indicator"></div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="bodypart">
        <ContentPart values={selectedTopic} />
      </div>
    </>
  );
}
