import React from 'react'
import axios from 'axios'
import Loading from './Loading'

class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      lines: [],
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  showMenu(event) {
    event.preventDefault()

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu)
      })
    }
  }

  componentDidMount() {
    axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
      .then(res => {
        const lines = res.data
        this.setState({ lines })

        console.log('aqui', this.state.lines)
      })
  }

  render() {
    if (!this.state.lines) return <Loading />

    return (
      <main>
        <div className="main-content">
          <div className="title">
            <h1>TFL Transport</h1>
            <h1 >Welcome</h1>
          </div>

          <div className="top-buttons">
            <button>Live</button>
            <button>Weekend</button>
            <button>Planned</button>
          </div>
          <div className="alert-message">
            <span> 24 / 7 </span>
          </div>

          <div className="issues">
            <img src={'images/issues.png'} />
            <span> Issues </span>
          </div>

          <div className="all-content">
            {/* {this.mapData()} */}
            {this.state.lines.map(line => {
              if (line.lineStatuses[0].statusSeverity == 10) {
                return ''
              }
              return (
                <React.Fragment>
                  <div className="info">

                    <div className={`colors ${line.id}`} />
                    <div className="name_status">
                      {line.lineStatuses[0].statusSeverity == 10 ? (null) :
                        (<div>
                          <h2> {line.name} </h2>
                          <div className="button-action">
                            <button onClick={this.showMenu}>{line.lineStatuses[0].statusSeverityDescription}&nbsp;&nbsp;&nbsp;<img className="arrow_down" src="images/arrow_down.png" />
                            </button>
                          </div>
                          {this.state.showMenu ?
                            (<div className="reason" ref={(element) => {
                              this.dropdownMenu = element
                            }}>
                              <span> {line.lineStatuses[0].reason}</span>
                            </div>) : (null)
                          }
                        </div>)}
                    </div>
                    <div className="all-bells">
                      <img src={line.lineStatuses[0].statusSeverity == 10 ? (null) : 'images/not-ok1.png'} />
                    </div>
                  </div>
                </React.Fragment>
              )
            }
            )}
          </div>

          <div className="ok">
            <img src={'images/ok_1.png'} />
            <span> OK </span>
          </div>
          <div className="all-content">
            {/* {this.mapData()} */}
            {this.state.lines.map(line => {
              if (line.lineStatuses[0].statusSeverity != 10) {
                return ''
              }
              return (
                <React.Fragment>
                  <div className="info">
                    <div className={`colors ${line.id}`} />
                    <div className="name_status">
                      <h2> {line.name} </h2>
                    </div>
                    <div className="all-bells">
                      <img src={line.lineStatuses[0].statusSeverity == 10 ? 'images/ok_1.png' : 'images/not-ok1.png'} />
                    </div>
                  </div>
                </React.Fragment>
              )
            }
            )}
          </div>
        </div>
      </main>
    )
  }
}

export default Home
