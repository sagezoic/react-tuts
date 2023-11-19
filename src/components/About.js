import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
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
