import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header class="header">
        <div class="logo">
            <img  src="https://img.icons8.com/ios/50/satellites.png" alt="satellites"/>
        </div>
        <div class="icons">
            <p>Link 1</p>
            <p>Link 2</p>
        </div>
    </header>

    <section class="main-section">
        <div class="photo">
            <img src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem de Exemplo" />
        </div>
        <div class="text">
            <h1>Título da Seção</h1>
            <p>Este é um texto de exemplo para a seção. Ele pode conter qualquer informação que você queira destacar abaixo da imagem.</p>
        </div>
    </section>
    <section class="main-section">
        <div id="text2" class="text">
            <h1>Título da Seção</h1>
            <p>Este é um texto de exemplo para a seção. Ele pode conter qualquer informação que você queira destacar abaixo da imagem.</p>
        </div>
    </section>

    <footer class="footer">
        <p>© 2024 - Todos os direitos reservados.</p>
    </footer>
    </>
  )
}

export default App
