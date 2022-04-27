import { Routes, Route } from 'react-router-dom'
import AudioTest from './container/AudioTest/AudioTest'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AudioTest />} />
    </Routes>
  )
}

export default AppRoutes