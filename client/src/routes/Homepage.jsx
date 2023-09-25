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
import logoTransparent from "../assets/images/logoTransparent.svg"
import { RockCandyBackground1, GrowingCircles, TornadoBackground1, CenteredBlob1 } from '../libraries/Web-Legos/components/Backgrounds'
import { HoverActionBox, TestimonialCard, WLFlickity, WLSlick } from '../libraries/Web-Legos/components/Content'
import { SiteModel, WLTestimonial } from '../libraries/Web-Legos/api/models.ts';
import { ModelEditButton, } from '../libraries/Web-Legos/components/Modals';
import { useEffect, useContext } from 'react';
import { FloatingIsland } from '../libraries/Web-Legos/components/Decoration';
import silhouettes from "../assets/images/Silhouettes Cream.png"



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
      <section id="dreams" className="d-flex flex-column w-100 align-items-center justify-content-center" style={{height: "100vh", marginTop: "-100px", position:"relative"}}>
        <RockCandyBackground1 color={red600} sectionHeight='100vh'/>
        <LargeHeader />
        <SmallHeader />
        <Mountains />
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
      <Contact />
    </WLSpinnerPage>
  )
}


function Contact() {
  
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

  function getCaptchaMessage() {
    const messages = [
      "Are you as real as our little learners? Prove it by solving this puzzle!",
      "Let’s play a quick game! Show us your human skills below!",
      "Are you a clever human like our little scholars? Prove it below!",
      "Quick! Show us you're not a robot so we can welcome you to our learning family!",
      "Join our kiddos in a mini-challenge — prove you're human below!",
      "Solve this puzzle, and you're in the Smartypants Club with our little ones!",
      "Pssst! Can you solve this like a super-smart grown-up?",
      "Our little bookworms challenge you to prove you’re human! Puzzle time!",
      "Jump into the kiddie pool by showing us your human-ness below!",
      "A quick brain teaser to join our circle of learning heroes! Prove you’re human below!"
    ]

    function getRandomValueFromArray(array) {
      if (array.length === 0) {
          return null; // return null if the array is empty
      }
  
      var randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    }

    return getRandomValueFromArray(messages);
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
              <LineButton text="Speak With Me" color={red600} />
            </div>
          </div>
        </div>
      </footer>
  )
}

// style={{position:"absolute", left: 0}}

function Mountains() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" classname="w-100" viewBox="-60 450 1770 450" style={{position:"absolute", left: 0, bottom: 0}}>
      <polygon fill="#ef2427" points="957 450 539 900 1396 900"/>
      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900"/>
      <polygon fill="#f0672c" points="-60 900 398 662 816 900"/>
      <polygon fill="#ba4f11" points="337 900 398 662 816 900"/>
      <polygon fill="#f09242" points="1203 546 1552 900 876 900"/>
      <polygon fill="#c97d33" points="1203 546 1552 900 1162 900"/>
      <polygon fill="#f0b666" points="641 695 886 900 367 900"/>    
      <polygon fill="#d7a65d" points="587 900 641 695 886 900"/>
      <polygon fill="#f2d692" points="1710 900 1401 632 1096 900"/>
      <polygon fill="#e6cd8e" points="1710 900 1401 632 1365 900"/>
      <polygon fill="#f9f3c4" points="1210 900 971 687 725 900"/>
      <polygon fill="#f9f3c4" points="943 900 1210 900 971 687"/>
    </svg>
  )
}

function MountainsUpsideDown() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" classname="w-100" viewBox="-60 450 1770 450" style={{transform: "scaleY(-1)", position:"absolute", left: 0, top: 0, opacity: 0.4}}>
      <polygon fill="#ef2427" points="957 450 539 900 1396 900"/>
      <polygon fill="#aa0000" points="957 450 872.9 900 1396 900"/>
      <polygon fill="#f0672c" points="-60 900 398 662 816 900"/>
      <polygon fill="#ba4f11" points="337 900 398 662 816 900"/>
      <polygon fill="#f09242" points="1203 546 1552 900 876 900"/>
      <polygon fill="#c97d33" points="1203 546 1552 900 1162 900"/>
      <polygon fill="#f0b666" points="641 695 886 900 367 900"/>    
      <polygon fill="#d7a65d" points="587 900 641 695 886 900"/>
      <polygon fill="#f2d692" points="1710 900 1401 632 1096 900"/>
      <polygon fill="#e6cd8e" points="1710 900 1401 632 1365 900"/>
      <polygon fill="#f9f3c4" points="1210 900 971 687 725 900"/>
      <polygon fill="#f9f3c4" points="943 900 1210 900 971 687"/>
    </svg>
  )
}