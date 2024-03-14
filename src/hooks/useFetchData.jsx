import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [dados, setDados] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
        });
        const data = await response.json();
        const slicedData = data.data.slice(0, 100);
        setDados(slicedData);
        console.log(slicedData)
        setLoaded(true);
      } catch (error) {
        setLoaded(true);
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
  }, [url]);

  return { dados, loaded };
};

export default useFetchData;
