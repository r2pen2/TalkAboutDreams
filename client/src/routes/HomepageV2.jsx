import React from 'react'
import {GlyphSectionTwoItemsNoActions} from "../libraries/Web-Legos/Layouts/Sections/GlyphSection"
import {WLHeader, WLHeaderV2, WLLayoutHeader, WLLayoutText, WLText, WLTextV2} from "../libraries/Web-Legos/components/Text"

import bridge from "../assets/images/bridge.svg";
import flower from "../assets/images/leaf.png";
import { swanBlueGray, swanWhite } from '../libraries/Web-Legos/api/colors';
import { ButtonRounded } from '../libraries/Web-Legos/Layouts/Buttons/Buttons';

import "../assets/style/homepageV2.css"
import { Paper } from '@mantine/core';

import moonLogo from "../assets/images/moonLogo.png";

        
const ContactButton = () => 
<ButtonRounded color="#5738B3" size="lg">
  Speak With Me
</ButtonRounded>

export default function HomepageV2({userCanEditText}) {

  console.log(userCanEditText)

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <section className="splash d-flex flex-column align-items-center justify-content-center px-2">
        <hgroup style={{maxWidth: 800}} id="home">
          <WLHeaderV2 editable={userCanEditText} firestoreId="header" align="center" color="white">Julia Dobbelaar</WLHeaderV2>
          <WLTextV2 editable={userCanEditText} firestoreId="header-text" align="center" size={24} color="white">
            One-on-one and group dream analysis sessions: Assisting individuals and training social workers to interpret and understand dreams, available both virtually and in person.
          </WLTextV2>
        </hgroup>
        <div className="dreams-line" />
        <div className="wl-spacer-2" />
        <Paper shadow="xl" style={{backgroundColor: "#fefefe", maxWidth: 1000}} className="d-flex flex-md-row flex-column align-items-start justify-content-center gap-2 p-lg-4 p-2">
          <img src={moonLogo} alt="moonLogo" className="moon-logo" />
          <div className="d-flex flex-column align-items-center justify-content-start h-100 gap-2">
            <WLHeaderV2 editable={userCanEditText} firestoreId="header-2" align="left" size={32} color="#1e1e1e">Talk About Dreams</WLHeaderV2>
            <WLTextV2 editable={userCanEditText} firestoreId="header-text-2" size={18} color="#525252">
              The dream belongs to the dreamer and no one is truly in the position to tell you what your dream means. Rather than the traditional approach of treating dream images as a static set of symbols to be interpreyed, we will examine the dreamers responses to the content, in so do leads to insight into our parallel walking state behaviors.
            </WLTextV2>
            <div className="wl-spacer-1" />
            <ContactButton />
          </div>
        </Paper>
        <img src={bridge} alt="bridge" className="wl-section-bottom"/>
      </section>
      <section>
        <div className="w-100" style={{backgroundColor: swanWhite}}>
          <div className="wl-glyph-section-two-items-no-actions d-none d-lg-flex wl-gap-3">
            <div className="wl-glyph-section-two-items-no-actions-item text-center">
            <WLHeaderV2 editable={userCanEditText} firestoreId="bio-header" />
            <WLTextV2 editable={userCanEditText} firestoreId="bio" />
            <div id="about" />
            </div>
            <div className="wl-glyph-section-two-items-no-actions-glyph-container">
              <img src={flower} alt="glyph" className="wl-glyph-section-glyph" data-testid="wl-glyph-section-glyph" />
            </div>
            <div className="wl-glyph-section-two-items-no-actions-item text-center">
            <div id="about" />
            <WLHeaderV2 editable={userCanEditText} firestoreId="goal-header"/>
            <WLTextV2 editable={userCanEditText} firestoreId="goal" />
            </div>
          </div>
          <div className="wl-glyph-section-two-items-no-actions d-flex d-lg-none">
            <div className="wl-glyph-section-two-items-no-actions-md-container container-fluid">
              <div className="row">
                <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="wl-glyph-section-two-items-no-actions-item text-center">
            <WLHeaderV2 editable={userCanEditText} firestoreId="bio-header" />
            <WLTextV2 editable={userCanEditText} firestoreId="bio" />
            <div id="about" />
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="wl-glyph-section-two-items-no-actions-item text-center">
            <div id="about" />
            <WLHeaderV2 editable={userCanEditText} firestoreId="goal-header"/>
            <WLTextV2 editable={userCanEditText} firestoreId="goal" />
                  </div>
                </div>
              </div>
            </div>
            <div className="wl-glyph-section-two-items-no-actions-glyph-container">
              <img src={flower} alt="glyph" className="wl-glyph-section-glyph" data-testid="wl-glyph-section-glyph" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
