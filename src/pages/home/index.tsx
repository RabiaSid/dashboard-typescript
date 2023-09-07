import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
  return (
    <div className='justify-content-center align-items-center'>
        <Button variant='contained' onClick={() => navigate('/dashboard') }>
            Go To the Dashboard
        </Button>
    </div>
  )
}
