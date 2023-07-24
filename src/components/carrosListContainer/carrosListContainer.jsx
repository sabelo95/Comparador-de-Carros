import Item from "../item/item";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const CarrosListContainer = ({ data, filterValue }) => {
  const [productsByMarca, setProductsByMarca] = useState(data);

  useEffect(() => {
    
    const filtered = data.filter((result) =>
      result.marca.toLowerCase().includes(filterValue.toLowerCase())
    );
    setProductsByMarca(filtered);
  }, [filterValue, data]);

  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr', 
      gridTemplateRows: 'repeat(3, 1fr)', 
      gap: '10px', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#f0f0f0', 
      padding: '20px', 
      borderRadius: '8px', 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    }}>
      {productsByMarca.map((prod) => {
        return <Item key={prod.modelo} {...prod} />;
      })}
    </div>
  );
  
};

export default CarrosListContainer;











