import React from 'react'
import {GlyphSectionTwoItemsNoActions} from "../libraries/Web-Legos/Layouts/Sections/GlyphSection"
import {WLHeader, WLHeaderV2, WLLayoutHeader, WLLayoutText, WLTextV2} from "../libraries/Web-Legos/components/Text"

import bridge from "../assets/images/bridge.svg";
import flower from "../assets/images/leaf.png";
import { swanBlueGray, swanWhite } from '../libraries/Web-Legos/api/colors';
import { ButtonRounded } from '../libraries/Web-Legos/Layouts/Buttons/Buttons';
import NavbarMinimal from '../libraries/Web-Legos/Layouts/Navigation/Navbars';

export default function HomepageV2() {

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <section className="splash d-flex flex-column align-items-center justify-content-center">
        <NavbarMinimal sticky>
          <NavbarMinimal.Item href="/#home">
            Home
          </NavbarMinimal.Item>
          <NavbarMinimal.Item href="/#about">
            Who I Am
          </NavbarMinimal.Item>
          <NavbarMinimal.Item href="/#services">
            Services
          </NavbarMinimal.Item>
          <NavbarMinimal.Item href="/#contact">
            Contact
          </NavbarMinimal.Item>
        </NavbarMinimal>
        <hgroup style={{maxWidth: 700}}>
          <WLHeaderV2 align="center" color="white">Julia Dobbelaar</WLHeaderV2>
          <WLTextV2 align="center" className="fw-sb" color={swanBlueGray}>
            This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst. This is a place for you to talk about yourself as a dream analyst.
          </WLTextV2>
        </hgroup>
        <div className="wl-spacer-2" />
        <ButtonRounded color="#5738B3" size="lg">
          Speak With Me
        </ButtonRounded>
        <img src={bridge} alt="bridge" className="wl-section-bottom"/>
      </section>
      <section>
        <GlyphSectionTwoItemsNoActions
          style={{
            backgroundColor: swanWhite
          }}
        >
          <GlyphSectionTwoItemsNoActions.Glyph imageSource={flower}/>
          <GlyphSectionTwoItemsNoActions.Left>
            <WLLayoutHeader>Julia Dobbelaar</WLLayoutHeader>
            <WLLayoutText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda a totam repellat dolorum quidem ex accusantium non sunt aut facere, rem saepe minima deleniti suscipit laudantium eum harum ullam molestiae!
            </WLLayoutText>
          </GlyphSectionTwoItemsNoActions.Left>
          <GlyphSectionTwoItemsNoActions.Right>
            <WLLayoutHeader>My Goal</WLLayoutHeader>
            <WLLayoutText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda a totam repellat dolorum quidem ex accusantium non sunt aut facere, rem saepe minima deleniti suscipit laudantium eum harum ullam molestiae!
            </WLLayoutText>
          </GlyphSectionTwoItemsNoActions.Right>
        </GlyphSectionTwoItemsNoActions>
      </section>
    </div>
  )
}
