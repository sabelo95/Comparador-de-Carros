import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useComparator } from "../../context/ComparatorContext";
import { useState,useEffect } from "react";

const Comparator = () => {
  const { comparator,clearComparator } = useComparator();
  const [carro, setCarros] = useState(comparator);

  useEffect(() => {
    setCarros(comparator);
  }, [comparator]);

  const Limpiar = () => {
    clearComparator(); 
    setCarros([]); 
  };

  return (
    <>
    <div style={{display:"flex", flexDirection:"row"}}>
      {carro.map((car) => (
      <div key={car.modelo}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid rgb(64, 63, 63)",
          padding: "10px",
          maxWidth: "300px", 
          margin: "0 auto", 
          backgroundColor: "#f9f9f9", 
          borderRadius: "8px", 
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        
        
          
            <h3>{car.modelo}</h3>
            <h4>{car.marca}</h4>
            <p>Año de fabricación: {car.año_fabricacion}</p>
            <p>Potencia: {car.potencia}</p>
            <p>Velocidad final: {car.velocidad_final}</p>
            <p>{car.descripcion}</p>
            <p>País de fabricación: {car.pais_fabricacion}</p>
            <p>Torque: {car.torque}</p>
            <p>ABS: {car.abs}</p>

            <img
              style={{
                width: "200px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "4px",
                margin: "10px 0",
              }}
              src={car.foto}
              alt={car.modelo} 
            />

            <h3>Precio: ${car.precio}</h3>
          
        
      </div>
      ))}
      </div>
      <button onClick={clearComparator}>Limpiar comparador</button>
    </>
  );
};

export default Comparator;
