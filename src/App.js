import SubscriptionList from "./components/Subscription/SubscriptionList"

function App() {

  const subscriptions = [
    { id: Math.random(), name: "Canal+", price: 20, logo: "" },
    { id: Math.random(), name: "Spotify", price: 12.99, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" },
    { id: Math.random(), name: "Netflix", price: 19.99, logo: "https://static.vecteezy.com/system/resources/previews/006/874/233/original/netflix-logo-icon-on-white-background-free-vector.jpg" },
    { id: Math.random(), name: "Dashlane", price: 8.99, logo: "https://d38muu3h4xeqr1.cloudfront.net/website/static/DG-8146/images/icon_og_400x400.png" }
  ]

  return (
    <div>
      <SubscriptionList subscriptions={subscriptions}/>
    </div>
  )
}

export default App
