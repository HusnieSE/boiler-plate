import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

// const RootComponent = class extends Component {
//   componentDidMount() {
//     console.log(this.props);
//   }

//   render() {
//     return (
//       <div>
//         {console.log(this.props)}
//         <header className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//               Edit <code>src/App.js</code> and save to reloads.
//             </p>
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn React
//             </a>
//             <a className="App-link" href="/test">
//               Test
//             </a>
//           </header>
//         </header>
//       </div>
//     );
//   }
// };

// export default RootComponent;

export default () => (
  <div>
    <header className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloads.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a className="App-link" href="/test">
          Test
        </a>
      </header>
    </header>
  </div>
);
