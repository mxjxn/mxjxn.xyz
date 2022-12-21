import styled from 'styled-components'
import Head from 'next/head'
import Hero from '../components/Hero'
import { CodeSection } from '../components/Sections/Code'
import { SocialSection } from '../components/Sections/Social'
import { NFTSection } from '../components/Sections/Art'
import { MusicSection } from '../components/Sections/Music'
import { Footer } from '../components/Sections/Footer'
import theme from '../themes.js';



export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero theme={theme.dark}/>
      <NFTSection />
      <CodeSection />
      <MusicSection />
      <SocialSection />
      <Footer />
    </>
  )
}
