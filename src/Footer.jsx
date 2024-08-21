import React from "react";
import "./Footer.css";
export default function footer() {
  return (
    <div className="footerdiv">
      <ul className="ul">
        <li>
          <a href="#">
            <i class="fab fa-edge"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-firefox"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-chrome"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-opera"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
