import Form from "./Form";

let useRegister = true;

function App() {
  return(
    <div className="container">
        <Form useRegister={useRegister}/>
    </div>
  )
}

export default App