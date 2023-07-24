import { useState, createContext, useContext } from 'react'

const ComparatorContext = createContext({
    comparator: []
})

export const ComparatorProvider = ({ children }) => {
    const [comparator, setComparator] = useState([])
    console.log(comparator)

    const addItem = (carToAdd) => {
        if (!isInComparator(carToAdd.modelo)) {
          if (comparator.length < 3) {
            setComparator((prev) => [...prev, carToAdd]);
          } else {
            alert('Solo puede comparar 3 carros a la vez');
          }
        } else {
          console.error('Ya está agregado');
        }
      };
      

    const isInComparator = (modelo) => {
        return comparator.some(prod => prod.modelo === modelo)
    }

   
    const clearComparator = ()=>{
        setComparator([])
      }

    const removeItem = (itemModelo)=>{
        const comparatortUpdated= comparator.filter(prod => prod.modelo!==itemModelo)
        setComparator(comparatortUpdated)
    }


    return (
        <ComparatorContext.Provider value={{ comparator, addItem,clearComparator , removeItem}}>
            {children}
        </ComparatorContext.Provider>
    )
}

export const useComparator = () => {
    return useContext(ComparatorContext)
}