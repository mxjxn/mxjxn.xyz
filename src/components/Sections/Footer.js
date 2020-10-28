import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MXFooter = styled.div`
  display:flex;
  justify-content: space-between;
  font-size: 0.95em;
  font-weight: 100;
  margin: 3em 0 0 0;
  padding: 1em 3.5em;
  background: linear-gradient(to bottom, #555 0%, #333 100%);
  @media screen and (max-width:768px){
    padding: 0.2em 0.3em;
  }
`

const FooterDiv = styled.div`
  & ul {
    margin:0;
    list-style-type:none;
  }
  & li > a{
    color: white;
  }

  @media screen and (max-width:768px){
    ul {
    padding-inline-start:0px;
    }
  }
`

const MXLink = ({url, children}) => (<a href={url}>{children}</a>)

const Footer = () => {
  return (
    <MXFooter>
      <FooterDiv>
        <ul>
          <li>
            <MXLink url="https://github.com/mxjxn">
              <FontAwesomeIcon icon={['fab', 'github']}/> My Github
            </MXLink>
          </li>
          <li>
            <MXLink url="https://gitlab.com/mxjxn">
              <FontAwesomeIcon icon={['fab', 'gitlab']}/> My Gitlab
            </MXLink>
          </li>
        </ul>
      </FooterDiv>
      <FooterDiv>
        <ul>
          <li>
            <MXLink url="https://instagram.com/fastaction">
              <FontAwesomeIcon icon={['fab', 'instagram']}/> My Instagram
            </MXLink>
          </li>
        </ul>
      </FooterDiv>
      <FooterDiv >
        Get in touch with me: <br/>
        <MXLink url="mailto:modulations@gmail.com">
          modulations@gmail.com
        </MXLink>
      </FooterDiv>
    </MXFooter>
  )
}

export default Footer;
