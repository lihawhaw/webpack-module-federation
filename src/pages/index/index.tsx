import React from 'react'
import { Link } from 'react-router-dom'

export default function IndexPage() {
  return (
    <div>
      IndexPage
      <Link to='/about'>About</Link>
    </div>
  )
}
