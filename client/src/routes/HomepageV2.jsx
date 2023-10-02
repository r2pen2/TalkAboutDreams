import React from 'react'
import {HeaderThreeLevels} from "../libraries/Web-Legos/Layouts/Headers/Headers"
import {GlyphSectionTwoItemsNoActions} from "../libraries/Web-Legos/Layouts/Sections/GlyphSection"
import {WLLayoutHeader, WLLayoutText} from "../libraries/Web-Legos/components/Text"

import bridge from "../assets/images/bridge.svg";
import leaf from "../assets/images/leaf.png";

export default function HomepageV2() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100">
      <section className="splash d-flex flex-column align-items-center justify-content-center">
        <HeaderThreeLevels>
          <HeaderThreeLevels.Title color="white">
            <WLLayoutHeader>Julia Dobbelaar</WLLayoutHeader>
          </HeaderThreeLevels.Title>
          <HeaderThreeLevels.Body color="#2B3C60">
            <WLLayoutText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae sequi eum, suscipit delectus expedita ad itaque nulla nam blanditiis velit, quasi deleniti quae fugit enim accusantium cumque totam nihil!
            </WLLayoutText>
          </HeaderThreeLevels.Body>
        </HeaderThreeLevels>
        <img src={bridge} style={{width: '100vw', position: "absolute", bottom: 0, left: 0}} alt="bridge" />
      </section>
      <GlyphSectionTwoItemsNoActions>
        <GlyphSectionTwoItemsNoActions.Left>
          <WLLayoutHeader>
            Julia Dobbelaar
          </WLLayoutHeader>
          <WLLayoutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nesciunt, aut debitis facere sint sit expedita blanditiis cumque fuga sunt quam aspernatur dicta ipsam vitae doloremque maiores voluptate praesentium? Eius?
          </WLLayoutText>
        </GlyphSectionTwoItemsNoActions.Left>
        <GlyphSectionTwoItemsNoActions.Right>
          <WLLayoutHeader>
            My Goal
          </WLLayoutHeader>
          <WLLayoutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nesciunt, aut debitis facere sint sit expedita blanditiis cumque fuga sunt quam aspernatur dicta ipsam vitae doloremque maiores voluptate praesentium? Eius?
          </WLLayoutText>
        </GlyphSectionTwoItemsNoActions.Right>
        <GlyphSectionTwoItemsNoActions.Glyph imageSource={leaf}/>
      </GlyphSectionTwoItemsNoActions>
    </div>
  )
}
