import Form from "./Form.jsx";

let userIsRegistered = true

export default function App() {
  return (
    <div>
      <Form userIsRegistered = {userIsRegistered} />
    </div>
  );
}
