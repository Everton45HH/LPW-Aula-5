import './App.css'

function App() {
  const professor = {

    nome : "Everton",
    sobrenome : "Lindo",
    curso : "Clã do pé",
    disciplina : "LPW3"
  }

  const saudacao = () => {
    alert(`Olá ${professor.nome}`)
  }

  return (
    <>
    <li>
      <h2>Nome : {professor.nome} {professor.sobrenome}</h2>
        <p>Professor do curso : {professor.curso} na discipline de {professor.disciplina}</p>
    </li>

    <button onClick={saudacao}>

    </button>
    </>
  )
}

export default App
