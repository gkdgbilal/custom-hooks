import { useEffect } from 'react';
import './App.css';
import useAxios from './hooks/useAxios';
import useDebounce from './hooks/useDebounce';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const { width, height } = useWindowSize();

  const debounce = useDebounce("bilal", 5000);

  const { results, loading, error } = useAxios({
    method: "GET",
    url: "/products/1",
  });

  // console.log(results, loading, error)

  return (
    <div>
      <h1>Window size</h1>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
}

export default App;
