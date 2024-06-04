import { useState, useEffect } from "react";
import "./SideBar.css";

const SideBar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector("aside");
      if (sidebar) {
        if (window.scrollY > 0) {
          sidebar.classList.add("sticky");
        } else {
          sidebar.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isMenuOpen);

  return (
    <div className={isMenuOpen ? "container" : "container-collapsed"}>
      <aside>
        <div className="toggle">
          <div className="logo"></div>
        </div>
        <div className="expand-btn" id="expand-btn" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="material-symbols-sharp">chevron_left</span>
          ) : (
            <span className="material-symbols-sharp">chevron_right</span>
          )}
        </div>{" "}
        {/* Side bar  Section*/}
        {isMenuOpen ? (
          <div className="sidebar">
            <a href="#" onClick={toggleMenu}>
              <span className="material-symbols-sharp">home</span>
              <h3>Home</h3>
            </a>
            <a href="#" onClick={toggleMenu} className="active">
              <span className="material-symbols-sharp">terminal</span>
              <h3>Projects</h3>
            </a>
            <a href="#" onClick={toggleMenu}>
              <span className="material-symbols-sharp">service_toolbox</span>
              <h3>Toolkit</h3>
            </a>
            <a href="#" onClick={toggleMenu}>
              <span className="material-symbols-sharp">contact_page</span>
              <h3>Contact</h3>
            </a>
          </div>
        ) : (
          <div className="sidebar">
            <a href="#" className="collapsed-sidebar">
              <span className="material-symbols-sharp">home</span>
            </a>
            <a href="#" className="collapsed-sidebar">
              <span className="material-symbols-sharp">terminal</span>
            </a>
            <a href="#" className="collapsed-sidebar active">
              <span className="material-symbols-sharp">service_toolbox</span>
            </a>
            <a href="#" className="collapsed-sidebar">
              <span className="material-symbols-sharp">contact_page</span>
            </a>
          </div>
        )}
        {/* Side bar end Section*/}
      </aside>
    </div>
  );
};

export default SideBar;
