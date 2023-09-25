// Library Imports
import React, { useState } from 'react'
import { Divider, Spacer, Text } from '@nextui-org/react'
import GroupsIcon from '@mui/icons-material/Groups';
import FaceIcon from '@mui/icons-material/Face';
import HouseIcon from '@mui/icons-material/House';
import ConstructionIcon from '@mui/icons-material/Construction';

// Style Imports
import { backgroundDark, backgroundLight, backgroundLighter, creamy, red600 } from '../assets/style/nextUiTheme'

// API Imports
import { gray900 } from '../libraries/Web-Legos/api/colors'

// Component Imports
import { platformGradient } from '../App'
import { LineButton } from '../libraries/Web-Legos/components/Buttons'
import {ColoredShadowBox, WLSpinnerPage} from "../libraries/Web-Legos/components/Layout"
import { QuoteBlock, WLHeader, WLText } from '../libraries/Web-Legos/components/Text'
import mom from "../assets/images/mom.JPG"
import momLarge from "../assets/images/large.jpg"
import { RockCandyBackground1, GrowingCircles } from '../libraries/Web-Legos/components/Backgrounds'
import { HoverActionBox, TestimonialCard, WLFlickity, WLSlick } from '../libraries/Web-Legos/components/Content'
import { SiteModel, WLTestimonial } from '../libraries/Web-Legos/api/models.ts';
import { ModelEditButton, } from '../libraries/Web-Legos/components/Modals';
import { useEffect, useContext } from 'react';
import { FloatingIsland, Mountains } from '../libraries/Web-Legos/components/Decoration';



import { Button, Input, Modal, Textarea } from "@nextui-org/react";

import ReCAPTCHA from "react-google-recaptcha";

// import { AuthenticationManagerContext, TAGMailManager, CurrentSignInContext } from '../App';
import { TAGMailManager, } from '../App';
import { FormResponse } from '../libraries/Web-Legos/api/admin.ts';

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


const DreamMountains = () => (
  <Mountains 
    color1="#f0672c"
    color2="#f0b666" 
    color3={red600} 
    color4={creamy}
    color5="#f09242"
    color6="#f2d692"
    style={{position:"absolute", left: 0, bottom: 0}}
  />
)
const MountainsUpsideDown = () => (
  <Mountains 
    color1="#f0672c"
    color2="#f0b666" 
    color3={red600} 
    color4={creamy}
    color5="#f09242"
    color6="#f2d692"
    style={{transform: "scaleY(-1)", position:"absolute", left: 0, top: 0, opacity: 0.4}}
  />
)

export default function Homepage() {

  const [formSent, setFormSent] = useState(false);

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
            <Text h1 size="36px" className='d-inline red-glow-light' b css={{paddingLeft: ".5rem", textGradient: `45deg, ${red600} 0%, ${creamy} 500%`}}>
              Dreams
            </Text>
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
          <div className="col-12 col-lg-6 px-5 d-flex flex-column align-items-center justify-content-center home-top-right-col" style={{zIndex: 3}}>
            <img src={mom} alt="julia-dobbelaar" className="home-top-headshot"/>
            <GrowingCircles color={creamy} size={500}/>
          </div>
        </div>
      </div>
    )
  }

  function SmallHeader() {
    return (
      <div className="d-flex d-lg-none flex-column align-items-center justify-content-center py-5" style={{zIndex: 2, marginTop: "5rem"}}>
          <div className="d-flex flex-column align-items-center justify-content-center" style={{zIndex: 3}}>
            <img src={mom} alt="julia-dobbelaar" className="home-top-headshot"/>
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
      <section id="dreams" className="d-flex flex-column w-100 align-items-center justify-content-center" style={{height: "100vh", marginTop: "-100px", position:"relative"}}>
        <RockCandyBackground1 color={red600} sectionHeight='100vh'/>
        <LargeHeader />
        <SmallHeader />
        <DreamMountains />
      </section>
      <div className="water">
        <section id="julia" className="d-flex flex-column align-items-center justify-content-center container-fluid w-100 py-5 sticky-walls" style={{paddingLeft: 0, paddingRight: 0,position: 'relative', zIndex: 1}}>
          <MountainsUpsideDown />
            <div className="row w-100" style={{zIndex: 1}}>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center py-2" >
              <img src={momLarge} alt="julia-dobbelaar" className="dreams-img-large" style={{maxHeight: 500, width: "auto"}}/>
            </div>
            <div className="col-12 col-lg-6 sticky-walls d-flex flex-column align-items-end justify-content-center py-2" style={{paddingLeft: "1rem", paddingRight: 0}}>
              <ColoredShadowBox
                className="home-bio-container p-2 p-lg-3"
                style={{border: `2px solid ${creamy}22`}}
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
        <section className="my-5 px-2 px-md-5 d-flex flex-column align-items-center justify-content-center w-100 bg-transparent-red" style={{height: 300,position: 'relative', zIndex: 1}}>
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
          <div className="row w-100" style={{position: 'relative', zIndex: 1}}>
            <div className="col-12">
              <Text h1 className='d-inline' size="36px">
                How I Can 
                <Text h1 size="36px" className='d-inline red-glow-light' b css={{paddingRight: ".5rem", paddingLeft:".5rem", textGradient: `45deg, ${red600} 0%, ${creamy} 500%`}}>
                  Help
                </Text>
              </Text>
            </div>
            <div className="col-12">
              <Spacer y={1} />
            </div>
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
        </section>
      </div>
       <section id="insights" style={{position: 'relative', zIndex: 1}}>
        <FloatingIsland color={creamy} islandCount={1} weight="0.1rem" width={1400} />
        <Spacer y={2} />
        {/* <Text color="white">Note: This image is scary! It's just a placeholder. There should be some monochrome image here to break up the text.</Text>
        <img src={silhouettes} alt="silhouettes" className="my-5 px-2 px-lg-5" style={{maxHeight: 400}}/> */}
          <Text h1 className='d-inline' size="36px">
            How People
            <Text h1 size="36px" className='d-inline red-glow-light' b css={{paddingRight: ".5rem", paddingLeft:".5rem", textGradient: `45deg, ${red600} 0%, ${creamy} 500%`}}>
              Feel
            </Text>
          </Text>
        <WLSlick
          buttonStyle="MUI"
          buttonColor={creamy}
        >
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
      <FloatingIsland color={creamy} islandCount={1} weight="0.1rem" width={1400} />
      <Contact formSent={formSent} setFormSent={setFormSent}/>
    </WLSpinnerPage>
  )
}


function Contact({formSent, setFormSent}) {
  
  const [contactHeaderLoaded, setContactHeaderLoaded] = useState(false);
  const [contactSubtitleLoaded, setContactSubtitleLoaded] = useState(false);

  const [recaptchaModalOpen, setRecaptchaModalOpen] = useState(false);

  function sendForm() {
    function getEmailBody() {
      const body = `Name: ${document.getElementById("name").value}\n` + 
      `Phone: ${document.getElementById("phone").value}\n` +
      `Email: ${document.getElementById("email").value}\n` +
      `Contact Method: ${document.getElementById("contact").value}\n` +
      `Location: ${document.getElementById("location").value}\n` +
      `Message: ${document.getElementById("message").value}`
      return body;
    }

    TAGMailManager.sendMail(
      `New BTB Form Submission from ${document.getElementById("name").value}`,
      getEmailBody()
    )

    const res = new FormResponse();
    res.content["Name"] =  document.getElementById("name").value;
    res.content["Email"] =  document.getElementById("email").value;
    res.content["Phone Number"] =  document.getElementById("phone").value;
    res.content["Preferred Contact Method"] =  document.getElementById("contact").value;
    res.content["City, State"] =  document.getElementById("location").value;
    res.content["Message"] =  document.getElementById("message").value;
    res.shortStrings.formId = "contact-us";
    res.shortStrings.formTitle = "Contact Us";
    res.sendFormData();
  }


  // const {currentSignIn} = useContext(CurrentSignInContext);
  // const {authenticationManager} = useContext(AuthenticationManagerContext);
  
  const [userCanEditText, setUserCanEditText] = useState(false);

  // useEffect(() => {
  //   authenticationManager.getPermission(currentSignIn, "siteText").then(p => setUserCanEditText(p));
  // }, [authenticationManager, currentSignIn]);

  function handleCaptchaComplete(v) {
    if (v.length < 1) {
      setRecaptchaModalOpen(false);
      return;
    }
    sendForm();
    window.location = "/thank-you";
  }
  
  function handleButtonClick() {
    setFormSent(true)
  }

  return (
      <footer id="contact" className="d-flex flex-column justify-content-center align-items-center w-100 py-5" style={{position: 'relative', zIndex: 1}}>
        <div className="d-flex flex-row justify-content-center align-items-center w-100" style={{marginTop: "2rem", gap: "0.5rem"}}>
          <Text h1 className='d-inline' size="36px">
            Talk About Your
          <Text h1 size="36px" className='d-inline red-glow-light' b css={{paddingRight: ".5rem", paddingLeft:".5rem", textGradient: `45deg, ${red600} 0%, ${creamy} 500%`}}>
            Dreams
          </Text>
            With Me
          </Text>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center w-100" style={{gap: "0.5rem"}}>
          <WLText size="large">If you would like to pick apart your subconscious with me, submit your contact information and I'll reach connect with you shortly.</WLText>
        </div>
        <div className="d-flex flex-row justify-content-center w-100">
          <div className="gap-2 d-flex flex-column align-items-start justify-content-center contact-form w-100 mx-2 my-5 mx-md-5"  style={{maxWidth: 1400}}>
            <div className="container-fluid d-flex flex-column">
              <div className="row pt-2">
                <Input id="name" clearable bordered label="Your Name" fullWidth css={{display: "flex", alignItems: "start"}} />
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 pt-2">
                  <Input id="phone" clearable bordered label="Your phone" fullWidth css={{display: "flex", alignItems: "start"}} />
                </div>      
                <div className="col-lg-6 col-md-12 pt-2">
                  <Input id="email" clearable bordered label="Your email" fullWidth css={{display: "flex", alignItems: "start"}} />
                </div>      
              </div>
              <div className="row pt-2">
                <Input id="contact" clearable bordered label="Preferred contact method" fullWidth css={{display: "flex", alignItems: "start"}} />
              </div>
              <div className="row pt-2">
                <Input id="location" clearable bordered label="City, State" fullWidth css={{display: "flex", alignItems: "start"}} />
              </div>
            </div>
            <div className="py-3 w-100">            
              <LineButton text={formSent ? "Thank You!" : "Speak With Me"} closed={formSent} color={red600} onClick={handleButtonClick} />
            </div>
          </div>
        </div>
      </footer>
  )
}