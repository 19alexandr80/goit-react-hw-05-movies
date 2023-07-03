import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { HomeList } from 'components/HomeList/HomeList';

import { NewApi } from 'API/Api';

const api = new NewApi();

const HomePage = () => {
  const [list, setList] = useState([]);
  const location = useLocation();
  // const [status, setStatus] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      // setStatus(true);
      try {
        const data = await api.getAll();

        setList([...data.results]);
      } catch (error) {
        console.error(error.messeng);
      } finally {
        // setStatus(false);
        return;
      }
    };
    getApi();
  }, []);

  return <HomeList list={list} location={location} />;
};
export default HomePage;
