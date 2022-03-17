import './index.css'

const BannerCardItem = props => {
  const {bannerCardDetails} = props
  const {headerText, description, className} = bannerCardDetails
  return (
    <li className={`${className}`}>
      <div className="content">
        <h1 className="heading"> {headerText} </h1>
        <p className="description"> {description} </p>
        <button className="button"> Show More </button>
      </div>
    </li>
  )
}

export default BannerCardItem
