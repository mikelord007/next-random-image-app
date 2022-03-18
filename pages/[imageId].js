import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ImageGen({imgSrc,title}) {

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{`See Random Image for ${title}`}</title>
        <meta name="title" content="See Random Image"/>
        <meta name="description" content="You will be able to see random image on this page."/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.reddit.com/r/socialanxiety/comments/tgdn58/people_dont_realize_how_traumatic_being_the_quiet/"/>
        <meta property="og:title" content="See Random Image"/>
        <meta property="og:description" content="You will be able to see random image on this page."/>
        <meta property="og:image" content={imgSrc}/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.reddit.com/r/socialanxiety/comments/tgdn58/people_dont_realize_how_traumatic_being_the_quiet/"/>
        <meta property="twitter:title" content="See Random Image"/>
        <meta property="twitter:description" content="You will be able to see random image on this page."/>
        <meta property="twitter:image" content={imgSrc}/>
      </Head>
      <h2>Random Image for you:</h2>
      <Image src={imgSrc} alt='random image' width={800} height={450}/>
    </>
  )
}


export async function getServerSideProps(context) {
    const q = context.params.imageId
    const response = await fetch(`https://source.unsplash.com/1600x900/?${q}`)
    const imgSrc = response.url

    return {
      props: {
          imgSrc,
          title: `image for ${q}`
      }, // will be passed to the page component as props
    }
  }