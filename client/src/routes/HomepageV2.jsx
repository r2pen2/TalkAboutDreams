import React from 'react'
import {GlyphSectionTwoItemsNoActions} from "../libraries/Web-Legos/Layouts/Sections/GlyphSection"
import {WLHeader, WLHeaderV2, WLLayoutHeader, WLLayoutText, WLText, WLTextV2} from "../libraries/Web-Legos/components/Text"

import bridge from "../assets/images/bridge.svg";
import flower from "../assets/images/leaf.png";
import { swanBlueGray, swanWhite } from '../libraries/Web-Legos/api/colors';
import { ButtonRounded } from '../libraries/Web-Legos/Layouts/Buttons/Buttons';
import NavbarMinimal from '../libraries/Web-Legos/Layouts/Navigation/Navbars';
import { Text } from '@nextui-org/react';

export default function HomepageV2({userCanEditText}) {

  console.log(userCanEditText)

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <section className="splash d-flex flex-column align-items-center justify-content-center">
        <NavbarMinimal sticky>
          <NavbarMinimal.Item href="/#home">
            Home
          </NavbarMinimal.Item>
          <NavbarMinimal.Item href="/#about">
            About
          </NavbarMinimal.Item>
          <NavbarMinimal.Item href="/#services">
            Services
          </NavbarMinimal.Item>
          <NavbarMinimal.Item href="/#contact">
            Contact
          </NavbarMinimal.Item>
        </NavbarMinimal>
        <hgroup style={{maxWidth: 700}} id="home">
          <h1 className="text-center">
            TALK<br/>
            ABOUT<br/>
            DREAMS
          </h1>
          <WLHeaderV2 editable={userCanEditText} firestoreId="header" align="center" color="white" />
          <WLTextV2 editable={userCanEditText} firestoreId="header-text" align="center" className="fw-sb" color={swanBlueGray} />
        </hgroup>
        <div className="wl-spacer-2" />
        <ButtonRounded color="#5738B3" size="lg">
          Speak With Me
        </ButtonRounded>
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
