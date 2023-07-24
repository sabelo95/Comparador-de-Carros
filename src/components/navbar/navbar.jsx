import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

const Navbar = ({ filterValue, onFilterChange }) => {
  const handleFilterChange = (event) => {
    const value = event.target.value;
    onFilterChange(value); 
  };

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
       <div class="container-fluid">
    <a class="navbar-brand" href="#">SPARTAN CARS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className="nav-link" to={`/`}>Home</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to={`/Comparator`}>Comparador</Link>
        </li>
      <li>
        <input
          type="text"
          value={filterValue}
          onChange={handleFilterChange}
          placeholder="Filtrar por palabra..."
        />
      </li>
      </ul>
    </div>
  </div>
    </nav>
  );
};

export default Navbar;
