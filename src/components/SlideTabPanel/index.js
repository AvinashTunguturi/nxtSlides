import './index.css'

const SlideTabPanel = props => {
  const {slide, slideNo, onClickSlideTab} = props
  const {id, heading, description} = slide

  const onClickSlide = () => {
    onClickSlideTab(id)
  }

  return (
    <li className="">
      <p>{slideNo}</p>
      <button type="button" className="" onClick={onClickSlide}>
        <div className="slide-tab">
          <h1 className="">{heading}</h1>
          <p>{description}</p>
        </div>
      </button>
    </li>
  )
}

export default SlideTabPanel
