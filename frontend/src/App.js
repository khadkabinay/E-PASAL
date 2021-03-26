import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen'


const App = () => {
  return (
    <>
  
      <Header />
      <main>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />

    </>
  )
}

export default App


