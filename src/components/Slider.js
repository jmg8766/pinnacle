import React from 'react'

class Slider extends React.Component {

  state = { slide: 0 }

  slideRight = () => {
    this.setState(prevState => ({
      slide: prevState.slide + 1
    }))
  }

  slideLeft = () => {
    this.setState(prevState => ({
      slide: prevState.slide - 1
    }))
  }

  render() {
    return(
      <section>
      </section>
    )
  }
}

export default Slider
