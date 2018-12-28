import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './avatar.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', marginBottom: rhythm(2.5) }}>
        <img
          src={profilePic}
          alt={`Bobo Diallo`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          I am <strong>Bobo Diallo</strong> and I write about <em>software</em>{' '}
          and <em>craft</em> at human scale.<br />
          <a href="https://twitter.com/bobo_doumba">Follow me on Twitter</a>
        </p>
      </div>
    )
  }
}

export default Bio
