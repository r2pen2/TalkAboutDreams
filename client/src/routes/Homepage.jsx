import React from 'react'

import {WLSpinnerPage} from "../libraries/Web-Legos/components/Layout"
import { WLHeader, WLText } from '../libraries/Web-Legos/components/Text'
import { Button, Spacer, Text } from '@nextui-org/react'
import { creamy, red600 } from '../assets/style/nextUiTheme'

import mom from "../assets/images/mom.JPG"

export default function Homepage() {
  return (
    <WLSpinnerPage dependencies={[]}>
      <section className="d-flex flex-column w-100 align-items-center home-top-container" style={{height: 'calc(100vh - 100px)'}}>
        <div className="container-fluid h-100">
          <div className="row d-flex flex-row align-items-center jusify-content-center h-100">
            <div className="col-12 col-lg-6 d-flex flex-row align-items-center home-top-left-col">
              <div className="d-flex flex-column align-items-start justify-content-center" style={{textAlign: 'left', maxWidth: 700}}> 
                <div className="d-flex flex-row align-items-center justify-content-start p-2 w-100" style={{gap: "0.5rem"}}>
                  <Text h1 className='d-inline'>
                    Talk About
                  </Text>
                  <Text h1 className='d-inline red-glow-light' b css={{paddingRight: "1rem", textGradient: `45deg, ${red600} 0%, ${creamy} 500%`}}>
                    Dreams
                  </Text>
                </div>
                <WLHeader headerLevel={2}>Let's explore your dreams, find patterns, and uncover the significance of unconscious thoughts.</WLHeader>
                <Spacer y={3} />
                <div className="d-flex flex-row button-line-container align-items-center justify-content-center w-100">
                  <div className="button-line" />
                  <div className="button-container">
                    <Button className="dreams-button" size="lg">
                      <Text color="white" b>
                        Speak With Me
                      </Text>
                    </Button>
                  </div>
                  <div className="button-line" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center home-top-right-col">
              <div className="home-top-bio-container red-shadow">
                <img src={mom} alt="mother" className="home-top-headshot"/>
                <WLText align="left">
                  This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst.
                </WLText>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WLSpinnerPage>
  )
}
