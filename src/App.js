import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from 'react';
import { Divider, Input } from 'antd';
import './App.css';

const { TextArea } = Input;

const App = () => (
  <div className="Topic-Body">
    <div className="Message-Container">
      <div className="MessageSubject-Content">
        <p>
          Hi, Wellcome to use this, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
          probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
      </div>
      <Divider plain>Chatting</Divider>
      
      <div className="MessageList-Content">
        <div className="MessageList Beautify-Scroll-Bar">
          <div className="Seller-Content">
            <div className="MessageContainer">
              <Divider orientation="left" plain>
                Seller
              </Divider>
              <p>
                hi, i am tester, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta?
              </p>
            </div>
          </div>

          <div className="Buyer-Content">
            <div className="MessageContainer">
              <Divider orientation="right" plain>
                Buyer
              </Divider>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
              </p>
            </div>
          </div>
          <div className="Buyer-Content">
            <div className="MessageContainer">
              <Divider orientation="right" plain>
                Buyer
              </Divider>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
              </p>
            </div>
          </div>
          <div className="Buyer-Content">
            <div className="MessageContainer">
              <Divider orientation="right" plain>
                Buyer
              </Divider>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="MessageBottom">
        <div className="ChatPlugin-Content"></div>
        <div className="ChatInput-Content">
          <TextArea placeholder="Please input, Ctrl+Enter send" allowClear bordered={false} onChange={onChange}/>
        </div>
      </div>
    </div>
  </div>
);

const onChange = e => {
  console.log(e);
};

export default App;
