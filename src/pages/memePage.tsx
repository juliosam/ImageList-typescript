import { useLocation } from "react-router-dom"

interface LocationState {
  state:{
    box_count:number;
    height:number;
    id:string;
    name:string;
    url:string;
    width:number;
    }
}
export const MemePage = () =>{
  const location = useLocation() as LocationState;
  console.log(location)
  return(
    <div>
      <p>{location.state.name}</p>
      <img src={location.state.url}/>
    </div>
  )
}