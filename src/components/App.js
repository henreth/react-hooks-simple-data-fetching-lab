import React, { useState,useEffect  } from "react";

const dogURL = 'https://dog.ceo/api/breeds/image/random';

function App () {
    const [randomDog, setRandomDog] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      fetch(dogURL)
        .then((response) => response.json())
        .then((data) => {
          setRandomDog(data.message);
          setIsLoaded(true);
        });
    }, []);
  
    // if the data hasn't been loaded, show a loading indicator
    if (!isLoaded) return <p>Loading...</p>;
  
    return <img src={randomDog} alt='A Random Dog'></img>
}

export default App;