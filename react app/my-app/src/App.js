import "./App.css";
//import profile from "./profile.jpg"
import { Counter } from "./Counter";
import { useState } from "react";

function App() {
 // const user = ["Asha", "Remya"]

  const persons = [
    {
      name1: "Tania",
      profile: "snskdsak"
    },
    {
      name1: "Sania",
      profile:"sjdbsajdb"
    }
  ]
  return (
    <div className="App">
     {/* <Counter/> */}
     <AddColor/>
      {/* {user.map((usr)=>
      <Welcome name = {usr}/>
      )} */}
      {/* <Welcome name="Asha" age="20" />
      <Welcome name="Remya" age="30" /> 
      <Msg name1= "Tania" profile = "https://images.app.goo.gl/18ZcrkDnw5uCPahT9"/>*/}

      {/* {persons.map((usr1)=>
        <Msg name1 = {usr1.name1} profile = {usr1.profile}/>
      )} */}

    </div>
  );
}

function AddColor(){

  //const colorList = ["orange","crimson","pink"]
  const [color,setColor] = useState("yellow");
  const [colorList,setColorList] = useState(["orange","crimson","pink"]);

  const styles = {
    backgroundColor: color
  }
  return(
    <div className="add-color">
      <div>
        <input type="text" style={styles} onChange={(event)=>setColor(event.target.color)}></input>
        <button onClick={()=>setColorList([...colorList,color])}>Add Color</button>
      </div>
      {colorList.map((clr)=>(
         <ColorBox color={clr}/>
      )
       
      )}
    </div>
  );
}

function ColorBox({color}){
  const styles = {
    width : "175px",
    height :"25px",
    backgroundColor: color

  }
  return(
    <div style={styles}></div>
  )
}

export default App;
