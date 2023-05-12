import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import Header from '../Header'
import SlideTabPanel from '../SlideTabPanel'
import ActiveSlideTab from '../ActiveSlideTab'

import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NxtSlides extends Component {
  state = {
    currentSlidesList: initialSlidesList,
    currentSlide: initialSlidesList[0],
  }

  renderHeader = () => (
    <div className="nxt-slide-header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
        alt="nxt slides logo"
        className="nxt-slide-logo"
      />
      <h1 className="nxt-slider-website">Nxt Slides</h1>
    </div>
  )

  onClickNew = () => {
    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }

    this.setState(prevState => ({
      currentSlidesList: [...prevState.currentSlidesList, newSlide],
    }))
  }

  onClickSlideTab = id => {
    const {currentSlidesList} = this.state
    const slideSelected = currentSlidesList.filter(slide => slide.id === id)

    this.setState({
      currentSlide: slideSelected[0],
    })
  }

  renderNewSlideButton = () => (
    <button type="button" className="new-button" onClick={this.onClickNew}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
        alt="new plus icon"
        className="plus-icon"
      />
      New
    </button>
  )

  renderSlideTabPanel = () => {
    const {currentSlidesList} = this.state

    return (
      <>
        <ul className="slide-tab-panel-container">
          {currentSlidesList.map((slide, index) => (
            <SlideTabPanel
              key={slide.id}
              slideNo={index + 1}
              slide={slide}
              onClickSlideTab={this.onClickSlideTab}
            />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {currentSlide} = this.state
    return (
      <div className="app-container">
        <Header />
        {/* this.renderHeader() */}
        {this.renderNewSlideButton()}
        <div className="slide-container">
          {this.renderSlideTabPanel()}
          <ActiveSlideTab currentSlide={currentSlide} />
        </div>
      </div>
    )
  }
}

export default NxtSlides
