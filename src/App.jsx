import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';

function App() {
  const url = useSelector((state) => state.home.url);
  const dispatch = useDispatch();
  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((response) => {
      // console.log(response);
      dispatch(getApiConfiguration(response));
    });
  };

  useEffect(() => {
    apiTesting();
  }, []);

  return <div className="app">App</div>;
}

export default App;
