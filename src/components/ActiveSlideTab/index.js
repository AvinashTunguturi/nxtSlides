import './index.css'

const ActiveSlideTab = props => {
  const {currentSlide} = props

  const {heading, description} = currentSlide

  return (
    <div className="active-slide-container">
      <h1 className="active-tab-heading">{heading}</h1>

      <p className="active-tab-description">{description}</p>
    </div>
  )
}

export default ActiveSlideTab
