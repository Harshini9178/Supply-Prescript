import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to SupplyPrescript</h1>
      <p>
        A closed-loop prescriptive analytics dashboard for smarter supply
        chain decisions.
      </p>
      <div className="hero-status">
        <span className="status-dot"></span>
        React environment ready — dashboard build starts Day 3
      </div>
    </section>
  )
}

export default Hero
