import React, { useState } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Modal, Nav, Navbar } from "react-bootstrap";
import HanumanLogo from "../../assets/png/hanumanji-logo.png";
import { IoIosShareAlt } from "react-icons/io";
import { GiByzantinTemple } from "react-icons/gi";
import { FaReadme } from "react-icons/fa";
import { LiaAssistiveListeningSystemsSolid } from "react-icons/lia";
import { GiSoundOn } from "react-icons/gi";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { MdAudiotrack } from "react-icons/md";
import ShareChalisaModal from "../../Modals/ShareChalisaModal/ShareChalisaModal.jsx";

const Header = () => {
  const [showShareModal, setShowShareModal] = useState(false);

  const handleShareClick = () => {
    setShowShareModal(true);
  };

  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        collapseOnSelect
        className="bg-body-tertiary hc-bg-custom"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="hc-brand-name">
            <div className="brand-content">
              <img
                alt="hanuman-logo"
                src={HanumanLogo}
                width="60"
                height="60"
                className="d-inline-block align-center hanuman-logo"
              />{" "}
              <div className="hanuman-brand-text">
                <div>Hanuman</div>
                <div>Chalisa</div>
              </div>{" "}
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto hc-nav-link">
              <Nav.Link
                as={NavLink}
                to="/"
                exact
                className={
                  window.location.pathname === "/"
                    ? "nav-link active-nav-link"
                    : "nav-link"
                }
              >
                <GiByzantinTemple
                  className="nav-icon home-icon shared-icon"
                  size={20}
                />
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/read"
                className={
                  window.location.pathname === "/read"
                    ? "nav-link active-nav-link"
                    : "nav-link"
                }
              >
                <FaReadme className="nav-icon shared-icon" size={20} />
                Read
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/listen"
                className={
                  window.location.pathname === "/listen"
                    ? "nav-link active-nav-link"
                    : "nav-link"
                }
              >
                <GiSoundOn
                  className="nav-icon home-icon shared-icon"
                  size={20}
                />
                Listen
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/watch"
                className={
                  window.location.pathname === "/watch"
                    ? "nav-link active-nav-link"
                    : "nav-link"
                }
              >
                {" "}
                <BsFillCollectionPlayFill
                  className="nav-icon home-icon shared-icon"
                  size={20}
                />
                Watch
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className={
                  showShareModal ? "nav-link active-nav-link" : "nav-link"
                }
                onClick={handleShareClick}
              >
                {" "}
                <div className="share-div">
                  <IoIosShareAlt
                    className="nav-icon home-icon shared-icon"
                    size={20}
                  />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ShareChalisaModal
        showShareModal={showShareModal}
        setShowShareModal={setShowShareModal}
      />
    </>
  );
};

export default Header;
