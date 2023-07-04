import Notiflix from 'notiflix';
import React, { useContext, useState } from 'react';

const ContextAltrt = React.createContext()

export const useCastomContext = () => {
    return useContext(ContextAltrt)
}

const Context = ({children}) => {
    const [data, setData] = useState([]);
    const [dataMovie, setDataMovie] = useState(null);
    const [totalResults, setTotalResults] = useState(0);
    const [error, setError] = useState(null);

const handleData = (data, key) => {
  const results = data[key] || []; // Встановлюємо пустий масив, якщо data[key] не існує або є пустим
  setData(results);
};
    
const handleDataMovie = (dataMovie) => {
  setDataMovie(dataMovie);
};

const handleError = (error) => {
  console.error(error);
  Notiflix.Notify.failure('An error occurred while retrieving data. Please try again later.');
  setError('An error occurred while retrieving data.');
};

    return (
        <ContextAltrt.Provider
            value={{  
                handleData: handleData,
                handleDataMovie: handleDataMovie,
                handleError: handleError,
                data: data,
                setData: setData,
                dataMovie: dataMovie,
                setDataMovie: setDataMovie,
                totalResults: totalResults,
                setTotalResults: setTotalResults,
                error: error,
                setError: setError,
        }}>
            {children}
        </ContextAltrt.Provider>
        
    )
}
export default Context;