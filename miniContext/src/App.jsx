
import './App.css'
import UserContextProvider from './contexts/userContextProvider'

function App() {
 

  return (
    <UserContextProvider>
      <h1>Welcome to the Context API</h1>

    </UserContextProvider>
    
  )
}

export default App
