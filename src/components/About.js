import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedInUser: 
          <UserContext.Consumer>
            {({loggedInUser})=>(<h1 className="text-xl font-bold">{loggedInUser}</h1>)}
          </UserContext.Consumer>
        </div>
        <h2>This is about us page.</h2>
        <User name="Rakesh Pandey (function)" place="Pune (function)" />
        <UserClass name="First" place="Pune (class)" />
        <UserClass name="Second" place="Pune (class)" />
      </div>
    );
  }
}

// const About = ()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is about us page.</h2>
//             <User name='Rakesh Pandey (function)' place='Pune (function)' />
//             <UserClass name='First' place='Pune (class)' />
//             <UserClass name='Second' place='Pune (class)' />
//         </div>
//     );
// };

export default About;
