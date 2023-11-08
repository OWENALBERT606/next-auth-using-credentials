import Link from 'next/link'
import React from 'react'
import Nav from './components/Nav'

export default function page() {
  return (
    <div className='flex flex-col justify-center items-center text-center' >
      <Nav/>
      <h1>HOME PAGE</h1>
    </div>
  )
}
