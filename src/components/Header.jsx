import {Link} from 'react-router-dom'

function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/contact"> Contacts </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <a
              href="https://github.com/DdoseS1337/react_spa"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
