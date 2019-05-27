import React from "react";
import FestviewBetaImg from "../../../Assets/images/festview_inline.png.png";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={FestviewBetaImg} />
        </div>
        <div>
          <ul>
            <li>Aide</li>
            <li>Festival</li>
            <li>Artistes</li>
            <li>
              <button>Rechercher</button>
            </li>
            <a>Se connecter</a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
