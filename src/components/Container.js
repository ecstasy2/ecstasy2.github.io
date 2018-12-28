import React, { Component } from 'react'

import objectAssign from 'object-assign'

class Container extends Component {
  render() {
    const { children, style } = this.props

    const defaultStyles = {
      maxWidth: '960px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }

    const styles = objectAssign(defaultStyles, style)
    const props = objectAssign({}, this.props)

    return (
      <div {...props} style={styles}>
        {children}
        <span style={{ display: 'block', clear: 'both' }}> </span>
      </div>
    )
  }
}

export default Container
