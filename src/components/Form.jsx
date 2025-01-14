import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin.jsx"

export default function Form() {


  return (
    <div>
        {logado === true ? <FormLogin /> : <FormRegister />}
    </div>
  );
}
