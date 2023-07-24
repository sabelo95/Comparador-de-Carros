import { useParams } from "react-router-dom";
import { useComparator } from "../../context/ComparatorContext"
import { useState } from "react"
import { Link } from "react-router-dom";


const CarroDetail = ({ data }) => {
  const { modelo } = useParams();
  const {addItem} = useComparator()
  const [botonCompararVisible, setBotonCompararVisible] = useState(true);
  

  const carroFilter = (modeloParam) => {
    const foundCarro = data.find((carro) => carro.modelo === modeloParam);
    return foundCarro;
  };

  const carroEncontrado = carroFilter(modelo);

  const addCarro = ()=> {
    addItem(carroEncontrado)
    setBotonCompararVisible(false)
    
    
  }

  
  if (!carroEncontrado) {
    return <div>No se encontró ningún carro con el modelo {modelo}</div>;
  }

  
  return (
    <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid rgb(64, 63, 63)',
        padding: '10px',
        maxWidth: '300px', 
        margin: '0 auto', 
        backgroundColor: '#f9f9f9', 
        borderRadius: '8px', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
      }}>
        <h3>{carroEncontrado.modelo}</h3>
        <h4>{carroEncontrado.marca}</h4>
        <p>Año de fabricación: {carroEncontrado.año_fabricacion}</p>
        <p>Potencia: {carroEncontrado.potencia}</p>
        <p>Velocidad final: {carroEncontrado.velocidad_final}</p>
        <p>{carroEncontrado.descripcion}</p>
        <p>País de fabricación: {carroEncontrado.pais_fabricacion}</p>
        <p>Torque: {carroEncontrado.torque}</p>
        <p>ABS: {carroEncontrado.abs}</p>
        
        <img
          style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '4px', margin: '10px 0' }}
          src={carroEncontrado.foto}
          alt='proteina'
        />
        
        <h3>Precio: ${carroEncontrado.precio}</h3>
        {botonCompararVisible && (
          <button className="Compararbtn" onClick={addCarro}>
            Comparar Carro
          </button>
        )}
        <Link className='btn btn-dark' to={`/Comparator`}>Comparador</Link>
      </div>
      
  );
};
export default CarroDetail;

