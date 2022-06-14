import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {

  interface memeProps{
    box_count:number;
    height:number;
    id:string;
    name:string;
    url:string;
    width:number;
  }

  const[count, setCount] = useState(0);
  const incrementer =()=>{setCount(count+1)}
  useEffect(()=>{
    const interval = setInterval(()=> incrementer(),1000); 
    return(()=>clearInterval(interval))
  })
  useEffect(()=>{fetcher()},[])
  const[memeArray, setMemeArray]= useState<memeProps[]>([])
  const [allMemes, setAllMemes] = useState<memeProps[]>([])

  const fetcher = async() =>{
    const getData = await fetch("https://api.imgflip.com/get_memes");
    const data = await getData.json()
    const randomCurrent = data.data.memes[Math.floor(Math.random()*100)]
    setMemeArray([...memeArray,randomCurrent]);
    const memeList = data.data.memes;
    setAllMemes(memeList)
  }

  return (
    <div className="App">
      <h1>Exercises</h1>
      <div className="counter-area">
        <h3>{count}</h3>
        <button onClick={incrementer}>+</button>
      </div>
      <button onClick={fetcher}>Another random meme please</button>
      <ul>
        {memeArray.map(meme=>{
          return(
            <li>
              <h4>{meme.name}</h4>
              <img src={meme.url}/>
            </li>
            )
          }
        )}
      </ul>
      <ol>
        {allMemes.map(meme=>{
          return(
          <li>
            <Link style={{fontSize:"12px"}} to={`/memePage/${meme.id}`} state={meme}>{meme.name}</Link>
          </li>)
         })
       } 
      </ol>
    </div>
  );
}
export default App;
