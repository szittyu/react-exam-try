import React, { useEffect, useState } from "react";
import LoadingMask from './components/LoadingMask'
import Character from './components/Character'
import Subscription from './components/Subscription'

const useCharacters = () => {
  const [loading, setLoading] = React.useState(true)
  const [data, setData] = React.useState(null);

  useEffect(() => {
    fetch("https://seriescharacters.com/api/howimetyourmother")
      .then((res) => res.json())
      .then((d) => {
        setData(d)
        setLoading(false);
      });
  }, [])

  return { loading, data }
}

const useSubTimer = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 10000)

  }, [])
  const hide = () => {
    setTimeout(() => {
      setShow(false)
    }, 5000)
  }
  return {show, hide}
}

const App = () => {
  const { show, hide} = useSubTimer();
  const { loading, data } = useCharacters();

  if (loading) {
    return <LoadingMask />
  }
  const characters = [];
  for (const char of data) {
    characters.push(<Character key={char.name} char={char} />)
  }
  

  return (
    <div className="App">
      <h1>Series Api</h1>
      <div className="">{characters}</div>
      {(show) ? (<Subscription onSubscribed={hide} />) : null}
    </div>
  );
}


export default App;
