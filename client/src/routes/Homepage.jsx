import React from 'react'

import {ColoredShadowBox, WLSpinnerPage} from "../libraries/Web-Legos/components/Layout"
import { WLHeader, WLText } from '../libraries/Web-Legos/components/Text'
import { Button, Spacer, Text } from '@nextui-org/react'
import { backgroundDark, creamy, red600 } from '../assets/style/nextUiTheme'

import mom from "../assets/images/mom.JPG"
import logoTransparent from "../assets/images/logoTransparent.svg"
import { RockCandyBackground1, GrowingCircles } from '../libraries/Web-Legos/components/Backgrounds'
import { HoverActionBox } from '../libraries/Web-Legos/components/Content'

import GroupsIcon from '@mui/icons-material/Groups';
import FaceIcon from '@mui/icons-material/Face';
import HouseIcon from '@mui/icons-material/House';
import ConstructionIcon from '@mui/icons-material/Construction';
import { platformGradient } from '../App'

export default function Homepage() {

  function HeaderText() {
    return (
      <div className="d-flex flex-column align-items-center header-top-text p-2">
        <div className="d-flex flex-row align-items-center" style={{gap: "0.5rem"}}>
          <Text h1 className='d-inline' size="36px">
            Talk About
          </Text>
          <Text h1 size="36px" className='d-inline red-glow-light' b css={{paddingRight: "1rem", textGradient: `45deg, ${red600} 0%, ${creamy} 500%`}}>
            Dreams
          </Text>
        </div>
        <WLHeader headerLevel={2}>Let's explore your dreams, find patterns, and uncover the significance of unconscious thoughts.</WLHeader>
      </div>
    )
  }

  function HeaderButton() {
    return (
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
    )
  }

  function LargeHeader() {
    return (
      <div className="container-fluid h-100 w-100 d-lg-flex align-items-center justify-content-center d-none">
        <div className="row d-flex flex-row align-items-center jusify-content-center h-100 w-100">
          <div className="col-12 col-lg-6 d-flex flex-row align-items-center home-top-left-col">
            <div className="d-flex flex-column align-items-start justify-content-center" style={{textAlign: 'left', maxWidth: 700}}> 
              <HeaderText />
              <Spacer y={3} />
              <HeaderButton />
            </div>
          </div>
          <div className="col-12 col-lg-6 px-5 d-flex flex-column align-items-center justify-content-center home-top-right-col">
            <img src={logoTransparent} alt="logo-transparent" style={{maxWidth: 500}} />
            <GrowingCircles color={creamy} size={500}/>
          </div>
        </div>
      </div>
    )
  }

  function SmallHeader() {
    return (
      <div className="d-flex d-lg-none flex-column align-items-center justify-content-center py-5" style={{zIndex: 2, marginTop: "5rem"}}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src={logoTransparent} alt="logo-transparent" style={{width: "100%", height: "auto", maxWidth: 300}} />
            <GrowingCircles color={creamy} size={300}/>
          </div>
          <Spacer y={3} />
          <HeaderText />
          <Spacer y={3} />
          <HeaderButton />
      </div>
    )
  }


  return (
    <WLSpinnerPage dependencies={[]}>
      <section id="dreams" className="d-flex flex-column w-100 align-items-center justify-content-center" style={{height: "100vh", marginTop: "-100px"}}>
        <RockCandyBackground1 color={red600} fadeColor={backgroundDark} fadePosition={"50%"} sectionHeight='calc(100vh)'/>
        <LargeHeader />
        <SmallHeader />
      </section>
      <section id="goal" className="d-flex flex-column align-items-center justify-content-center container-fluid w-100 py-5 sticky-walls" style={{paddingLeft: 0, paddingRight: 0}}>
        <div className="row w-100">
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center" >
            <img src={mom} alt="julia-dobbelaar" className="home-top-headshot"/>
          </div>
          <div className="col-12 col-lg-6 sticky-walls d-flex flex-column align-items-end justify-content-center" style={{paddingLeft: 0, paddingRight: 0}}>
            <ColoredShadowBox
              className="home-bio-container p-2 p-lg-3"
              stickLeft
              background={platformGradient}
            >
              <WLHeader align="left">Julia Dobbelaar</WLHeader>
              <WLText size="$lg" align="left" color="#e0e0e0" indent>
                This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst.
              </WLText>
              <WLHeader headerLevel={2} size="$2xl" align="left">My Goal:</WLHeader>
              <WLText size="$lg" align="left" color="#e0e0e0" indent>
                This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst.
              </WLText>
            </ColoredShadowBox>
          </div>
        </div>
      </section>
      <section className="my-5 px-2 px-md-5 d-flex flex-column align-items-center justify-content-center w-100 bg-transparent-red" style={{height: 300}}>
        <div style={{maxWidth: 900}}>
          <WLHeader>
            What is Dream Analysis?
          </WLHeader>
          <WLText>
            Dream analysis is the process of interpreting the content and emotions of dreams to gain insights into one's thoughts and feelings. Rooted in psychology, it aims to uncover underlying themes and patterns, helping individuals better understand their waking lives and personal experiences.
          </WLText>
        </div>
      </section>
      <section className="d-flex flex-column align-items-center justify-content-center container w-100 py-5">
        <WLHeader>What I Offer:</WLHeader>
        <Spacer y={1} />
        <div className="row w-100">
          <div className="col-12 col-md-6 col-lg-3">
            <HoverActionBox
              background="#1a1a1e"
              color="#56CCF2"
              borderColor={creamy}
              icon={<FaceIcon style={{color: creamy, fontSize: 48}}/>}
            >
              <Text b size="$lg">
                1 on 1 Sessions
              </Text>
            </HoverActionBox>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <HoverActionBox
              background="#1a1a1e"
              color="#9B51E0"
              borderColor={creamy}
              icon={<GroupsIcon style={{color: creamy, fontSize: 48}}/>}
            >
              <Text b size="$lg">
                Group Sessions
              </Text>
            </HoverActionBox>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <HoverActionBox
              background="#1a1a1e"
              color="#EBB512"
              borderColor={creamy}
              icon={<HouseIcon style={{color: creamy, fontSize: 48}}/>}
            >
              <Text b size="$lg">
                Dream Retreats
              </Text>
            </HoverActionBox>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <HoverActionBox
              background="#1a1a1e"
              color="#63C34E"
              borderColor={creamy}
              icon={<ConstructionIcon style={{color: creamy, fontSize: 48}}/>}
            >
              <Text b size="$lg">
                Mini Workshops
              </Text>
            </HoverActionBox>
          </div>
        </div>
      </section>
    </WLSpinnerPage>
  )
}