import React from 'react'
import useCounter from '~/lib/useCounter.ts'
import { Header, Details, Footer } from '~/layouts/mod.tsx'

export default function Home() {

  return (
    <div className="page">
      <head>
        <title>Hello World - Aleph.js</title>
        <link rel="stylesheet" href="../style/index.css" />
      </head>
      <Header />
      <Details />
      <Footer />
    </div>
  )
}
