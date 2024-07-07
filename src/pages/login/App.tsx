
import './App.css'
import illustration from '../../assets/images/delivery-illustration.svg';
import Form from '../../components/Form/form';

function App() {

  return (
    <main>
      <Form />
      <section>
        <h1>You should, MoveIt!</h1>
        <img id="illustration" src={illustration} alt="ilustração" />
      </section>
    </main>
  )
}

export default App
