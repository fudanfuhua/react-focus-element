import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * A React component for the contenteditable element to fix focus bug(iphone,mac,chrome,safari).
 * @module FocusElement
 */
class FocusElement extends Component {
  constructor(props) {
    super(props)
  }

  handle(event) {
    let userSelection
    if (window.getSelection) {
      userSelection = window.getSelection()
    } else if (document.selection) {
      userSelection = document.selection.createRange()
    }
    let content = event.target.firstChild
    if (content) {
      let range = document.createRange()
      range.selectNode(content)
      range.setStart(content, content.length)
      range.setEnd(content, content.length)
      userSelection.removeAllRanges()
      userSelection.addRange(range)
      userSelection.extend(content, content.length)
      userSelection.collapseToEnd()
    } else {
      event.target.focus()
    }
  }

  render() {
    let self = this
    setTimeout(() => {
      self.refs.focus.setAttribute('contenteditable', 'plaintext-only')
    }, 0)
    return <div {...this.props} ref="focus" onClick={this.handle.bind(this)} />
  }
}

export default FocusElement
