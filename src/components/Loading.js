import React from 'react'

const Loading = () => {

  return (
    <section className="hero is-fullheight">
      <div className="hero-body has-text-centered is-vcentered">
        <div className="container">
          <figure>
            <p id="loading_letter" className="loading-message">Welcome to TFL Transport London</p>
            <img src="images/underground1.gif" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Loading
