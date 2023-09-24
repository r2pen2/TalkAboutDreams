// Library Imports
import React, { useState } from 'react'
import { Spacer, Text } from '@nextui-org/react'
import GroupsIcon from '@mui/icons-material/Groups';
import FaceIcon from '@mui/icons-material/Face';
import HouseIcon from '@mui/icons-material/House';
import ConstructionIcon from '@mui/icons-material/Construction';

// Style Imports
import { backgroundDark, creamy, red600 } from '../assets/style/nextUiTheme'

// API Imports
import { gray900 } from '../libraries/Web-Legos/api/colors'

// Component Imports
import { platformGradient } from '../App'
import { LineButton } from '../libraries/Web-Legos/components/Buttons'
import {ColoredShadowBox, WLSpinnerPage} from "../libraries/Web-Legos/components/Layout"
import { QuoteBlock, WLHeader, WLText } from '../libraries/Web-Legos/components/Text'
import mom from "../assets/images/mom.JPG"
import logoTransparent from "../assets/images/logoTransparent.svg"
import { RockCandyBackground1, GrowingCircles } from '../libraries/Web-Legos/components/Backgrounds'
import { HoverActionBox, TestimonialCard, WLFlickity, WLSlick } from '../libraries/Web-Legos/components/Content'
import { SiteModel, WLTestimonial } from '../libraries/Web-Legos/api/models.ts';
import { ModelEditButton, } from '../libraries/Web-Legos/components/Modals';
import { useEffect } from 'react';

const serviceBoxColors = {
  "1on1": HoverActionBox.colors.blue,
  "groups": HoverActionBox.colors.purple,
  "retreats": HoverActionBox.colors.yellow,
  "workshops": HoverActionBox.colors.green,
}

const serviceBoxIcons = {
  "1on1": <FaceIcon />,
  "groups": <GroupsIcon />,
  "retreats": <HouseIcon />,
  "workshops": <ConstructionIcon />,
}

export const serviceBoxBackgroundColor = gray900;

export default function Homepage() {

  const [userCanEditTestimonials, setUserCanEditTestimonials] = useState(false);
  const [currentModel, setCurrentModel] = useState(new SiteModel());
  const [modelEditModalOpen, setModelEditModalOpen] = useState(false);

  const [testimonials, setTestimonials] = useState([]);
  const [testimonialsFetched, setTestimonialsFetched] = useState(false);

  useEffect(() => {
    setTestimonials([WLTestimonial.examples.default, WLTestimonial.examples.default, WLTestimonial.examples.default])
    // WLTestimonial.getAndSet(setTestimonials, setTestimonialsFetched)
  }, [])

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
    return <LineButton text="Speak With Me" color={red600} />
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

  function handleActionBoxClick(key) { }
  
  return (
    <WLSpinnerPage dependencies={[]}>
      <section id="dreams" className="d-flex flex-column w-100 align-items-center justify-content-center" style={{height: "100vh", marginTop: "-100px"}}>
        <RockCandyBackground1 color={red600} fadeColor={backgroundDark} fadePosition={"50%"} sectionHeight='calc(100vh)'/>
        <LargeHeader />
        <SmallHeader />
      </section>
      <section id="julia" className="d-flex flex-column align-items-center justify-content-center container-fluid w-100 py-5 sticky-walls" style={{paddingLeft: 0, paddingRight: 0}}>
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
          <WLText size="$lg">
            Dream analysis is the process of interpreting the content and emotions of dreams to gain insights into one's thoughts and feelings. Rooted in psychology, it aims to uncover underlying themes and patterns, helping individuals better understand their waking lives and personal experiences.
          </WLText>
        </div>
      </section>
      <section className="d-flex flex-column align-items-center justify-content-center container-fluid w-100 py-5 px-2 px-md-5" id="services">
        <WLHeader>What I Offer:</WLHeader>
        <Spacer y={1} />
        <div className="row w-100 ">
          <div className="col-12 col-md-6 col-xl-3 py-3">
            <HoverActionBox
              background={serviceBoxBackgroundColor}
              color={serviceBoxColors['1on1']}
              accentColor={creamy}
              icon={serviceBoxIcons['1on1']}
              buttonText="Schedule Now"
              stackIndex={1}
              onClick={() => handleActionBoxClick("1on1")}
            >
              <HoverActionBox.Title text="1 on 1 Sessions" color="white" />
              <HoverActionBox.Body>
                <WLText indent align="left">
                  Get 1 on 1 dream analysis sessions over zoom or in person. Get 1 on 1 dream analysis sessions over zoom or in person. Get 1 on 1 dream analysis sessions over zoom or in person. Get 1 on 1 dream analysis sessions over zoom or in person. Get 1 on 1 dream analysis sessions over zoom or in person.
                </WLText>
              </HoverActionBox.Body>
            </HoverActionBox>
          </div>
          <div className="col-12 col-md-6 col-xl-3 py-3">
            <HoverActionBox
              background={serviceBoxBackgroundColor}
              color={serviceBoxColors['groups']}
              accentColor={creamy}
              icon={serviceBoxIcons['groups']}
              buttonText="Schedule Now"
              stackIndex={2}
              onClick={() => handleActionBoxClick("groups")}
            >
              <HoverActionBox.Title text="Group Sessions" color="white" />
              <HoverActionBox.Body>
                <WLText indent align="left">
                  Get group dream analysis sessions over zoom or in person. Get group dream analysis sessions over zoom or in person. Get group dream analysis sessions over zoom or in person. Get group dream analysis sessions over zoom or in person. Get group dream analysis sessions over zoom or in person.
                </WLText>
              </HoverActionBox.Body>
            </HoverActionBox>
          </div>
          <div className="col-12 col-md-6 col-xl-3 py-3">
            <HoverActionBox
              background={serviceBoxBackgroundColor}
              color={serviceBoxColors['retreats']}
              accentColor={creamy}
              icon={serviceBoxIcons['retreats']}
              buttonText="Schedule Now"
              stackIndex={3}
              onClick={() => handleActionBoxClick("retreats")}
            >
              <HoverActionBox.Title text="Dream Retreats" color="white" />
              <HoverActionBox.Body>
                <WLText indent align="left">
                  Foster a deeper connection with your dream world by going on a dream retreat. Foster a deeper connection with your dream world by going on a dream retreat. Foster a deeper connection with your dream world by going on a dream retreat. Foster a deeper connection with your dream world by going on a dream retreat.
                </WLText>
              </HoverActionBox.Body>
            </HoverActionBox>
          </div>
          <div className="col-12 col-md-6 col-xl-3 py-3">
            <HoverActionBox
              background={serviceBoxBackgroundColor}
              color={serviceBoxColors['workshops']}
              accentColor={creamy}
              icon={serviceBoxIcons['workshops']}
              buttonText="Schedule Now"
              stackIndex={4}
              onClick={() => handleActionBoxClick("workshops")}
            >
              <HoverActionBox.Title text="Mini Workshops" color="white" />
              <HoverActionBox.Body>
                <WLText indent align="left">
                  Join me for a workshop and learn the fundamentals of dream analysis. Join me for a workshop and learn the fundamentals of dream analysis. Join me for a workshop and learn the fundamentals of dream analysis. Join me for a workshop and learn the fundamentals of dream analysis.
                </WLText>
              </HoverActionBox.Body>
            </HoverActionBox>
          </div>
        </div>
        <Spacer y={2} />
        <LineButton size="xl" b text="Contact Me" color={red600} />
      </section>
      <section id="insights">
        <WLSlick>
          {testimonials.map((t, i) => {
            return <TestimonialCard
              outlineWeight="2px"
              key={i} 
              testimonial={t}
              glyphColor={red600}
              accentColor={gray900}
              editButton={<ModelEditButton model={WLTestimonial} data={t} userCanEdit={userCanEditTestimonials} setCurrentModel={setCurrentModel} setEditModalOpen={setModelEditModalOpen}/>}
            />})
          }
        </WLSlick>
      </section>
    </WLSpinnerPage>
  )
}