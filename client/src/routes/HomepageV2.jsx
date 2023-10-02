import React from 'react'
import {GlyphSectionTwoItemsNoActions} from "../libraries/Web-Legos/Layouts/Sections/GlyphSection"
import {WLHeader, WLHeaderV2, WLLayoutHeader, WLLayoutText, WLTextV2} from "../libraries/Web-Legos/components/Text"

import bridge from "../assets/images/bridge.svg";
import flower from "../assets/images/leaf.png";
import { swanWhite } from '../libraries/Web-Legos/api/colors';

export default function HomepageV2() {

  const Bio = () => (
    <article className="d-flex flex-column align-items-center justify-content-center">

    </article>
  )

  const Goal = () => (
    <article className="d-flex flex-column align-items-center justify-content-center">

    </article>
  )

  const FlowerGlyph = () => <img src={flower} alt="flower" />

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <section className="splash d-flex flex-column align-items-center justify-content-center">
        <hgroup style={{maxWidth: 650}}>
          <WLHeaderV2 align="center" color="white">Julia Dobbelaar</WLHeaderV2>
          <WLTextV2 align="center" className="fw-sb" color="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae sequi eum, suscipit delectus expedita ad itaque nulla nam blanditiis velit, quasi deleniti quae fugit enim accusantium cumque totam nihil!
          </WLTextV2>
        </hgroup>
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
