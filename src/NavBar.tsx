import { Link } from "react-router-dom";

/** Navigation bar displays links to routes */

function NavBar() {
  function renderLinks() {
    return (
      <>
        <li className="nav-item">
          <Link to={`/users`} className="nav-link">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/adduser`} className="nav-link">
            Add User
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/addmessage`} className="nav-link">
            Add Message
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/getmessages`} className="nav-link">
            Get Messages
          </Link>
        </li>
      </>
    );
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={`/users`} className="navbar-brand">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav ms-auto">{renderLinks()}</ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
