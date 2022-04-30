import { Routes, Route } from 'react-router-dom'
import AudioTest from './containers/AudioTest/AudioTest'
import Chatbot from './containers/Chatbot/Chatbot'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Chatbot />} />
    </Routes>
  )
}

export default AppRoutes