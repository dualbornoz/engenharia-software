import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import { ProfessorPage } from './pages/FormPages/components/Form/Professor/ProfessorPage'
import { AlunoPage } from './pages/FormPages/components/Form/Aluno/AlunoPage'
import { DisciplinaPage } from './pages/FormPages/components/Form/Disciplina/DisciplinaPage'
import { HomePage } from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <BrowserRouter>
        <header>
          <h1>Formulário App</h1>
          <nav style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/professores">Professor</NavLink></li>
              <li><NavLink to="/alunos">Aluno</NavLink></li>
              <li><NavLink to="/disciplina">Disciplina</NavLink></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<HomePage />}  />
          <Route path="/professores/" element={<ProfessorPage />} />
          <Route path='/alunos' element={<AlunoPage />}/>
          <Route path='/disciplina' element={<DisciplinaPage />} />
        </Routes>

        <footer>
          <p>@Formulários App</p>
        </footer>
       </BrowserRouter>
      </div>
    </>
  )
}

export default App
