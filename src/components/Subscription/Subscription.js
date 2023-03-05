import './Subscription.css'

const Subscription = (props) => {
  return (
    <div className='card'>
      <h1 className='subscription-title'>{props.name}</h1>
      <img className='subscription-logo' alt={props.name} height="50px" width="50px" src={props.logo}></img>
      <div>{props.price}€</div>
    </div>
  )
}

export default Subscription
