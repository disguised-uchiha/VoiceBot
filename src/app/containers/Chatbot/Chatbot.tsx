import { SpeedDial, SpeedDialIcon } from '@mui/material'
import React from 'react'

const Chatbot = () => {
  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        hello
      </SpeedDial>
    </div>
  )
}

export default Chatbot