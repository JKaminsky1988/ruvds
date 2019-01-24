import React, {Component} from 'react'

class Header extends Component {
  render() {

  const date = new Date()
  const time = date.getHours()
  let timeOfDay; 
    return(
           <header>
              <h1>
                Good {time < 12 ? `morning` : ((time >= 12 || time < 17) ? `afternoon` : `evening`)}!
              </h1>
                <p>What are you going to do today?</p>
           </header>
           )
  }
}
export default Header;