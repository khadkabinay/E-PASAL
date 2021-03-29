import React from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen'


const App = () => {
  return (
    <Router>
  
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />

    </Router>
  )
}

export default App


