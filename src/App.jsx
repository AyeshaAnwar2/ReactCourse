import Login,{Profile} from "./UserComponent";
function App(){
return(
  <div>
  <h1>hello it is first component</h1>
  <p>it is para</p>
  <h2>hlo</h2>
  <Fruit/>
  <Color/>
  <Sum/>
  <Login/>
  <Profile/>
  </div>
)
}


function Fruit(){
  return(
   <h1>Apple</h1>
  )
}

function Color(){
  return(
    <h2>red2</h2>
  )
}
function Sum(){
  return 10 + 10;
}
export default App;