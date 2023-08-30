
import Logo from './assets/LogoNP.png'
import './Pagina1.css'

function App() {


  return (
    <>
      <div className='fundo'>
          <img src={Logo} className="logoNutri" alt="Nutri logo" />
          <div className='bloco'>
          <h1 className='txt1'>Seja bem-vindo ao nosso App</h1>
          <h2 className='txt2'>Deseja entrar como:</h2>
         <a href="" className='btn1'>Cliente</a>
         <h3 className='txt2'>ou</h3>
         <a href="" className='btn1'>Profissional</a>
          </div>
      </div>

    </>
  )
}

export default App


