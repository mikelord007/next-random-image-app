import Head from 'next/head'
// import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [inpText, setInpText] = useState('')
  return (
    <>
      <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>Random Image Generator</title>
      <meta name="title" content="Random Image Generator"/>
      <meta name="description" content="Hey, This is a site where you can generate random images!"/>

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://www.reddit.com/"/>
      <meta property="og:title" content="Random Image Generator"/>
      <meta property="og:description" content="Hey, This is a site where you can generate random images!"/>
      <meta property="og:image" content="https://source.unsplash.com/1600x900/?beach"/>

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://www.twitter.com/"/>
      <meta property="twitter:title" content="Random Image Generator"/>
      <meta property="twitter:description" content="Hey, This is a site where you can generate random images!"/>
      <meta property="twitter:image" content="https://source.unsplash.com/1600x900/?beach"/>
      </Head>
      <h1>Hi, You can see random images with this page!</h1>
      <input type="text" value={inpText} onChange={(e) => {setInpText(e.target.value)}} placeholder='Search for an image theme'/>
      <button onClick={() => {Router.push(`/${inpText}`)}}>Search</button>
    </>
  )
}
