import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function HomePage() {
  const a = useParams()

  console.log('a', a)
  return (
    <div>
      HomePage
      <Link to='/about'>About</Link>
    </div>
  )
}
