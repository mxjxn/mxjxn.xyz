import styled from 'styled-components'
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
      <Hero theme={theme.dark}/>
      <CodeSection />
      <NFTSection />
      <MusicSection />
      <SocialSection />
      <Footer />
    </>
  )
}
