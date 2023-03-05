import Subscription from "./Subscription"

const SubscriptionList = (props) => {
  return (
    <div>
      {
        props.subscriptions.map(subscription =>
          <Subscription key={subscription.id} name={subscription.name} price={subscription.price} logo={subscription.logo} />)
      }
    </div>
  )
}

export default SubscriptionList
