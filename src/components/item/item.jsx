import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

const Item = ({ modelo,precio, marca,foto,año_fabricacion}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgb(64, 63, 63)', padding:'10px' }} >
            <h3>{modelo}</h3>
            <h3>{marca}</h3>
            <h3>{año_fabricacion}</h3>
            <img  style={{ width: '200px', height: '150px' }} src={foto} alt='proteina'/>
            <h3>price: ${precio}</h3>
            <Link className='btn btn-dark' to={`/carroDetail/${modelo}`}>Ver detalle</Link>
            
        </div>
    )
}

export default Item