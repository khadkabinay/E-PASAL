import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Container } from 'react-bootstrap'


const App = () => {
  return (
    <>
  
      <Header />
      <main>
        <Container>
          <h1>Welcome to E-Pasal</h1>
        </Container>
      </main>
      <Footer />

    </>
  )
}

export default App


