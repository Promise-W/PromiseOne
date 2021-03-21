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
import WillJoinTest from './components/JoinTest/index';
import InputOrderNumber from './components/JoinTest/InputOrderNumber';
import CheckOrderFail from './components/JoinTest/CheckOrderFail';
import CheckOrderSuccess from './components/JoinTest/CheckOrderSuccess';
import FinishTest from './components/JoinTest/FinishTest';

const { TextArea } = Input;

const SellerContent = ({children}) => {
  return (
    <div className="Seller-Content">
      <div className="MessageContainer">
        <Divider orientation="left" plain>
          Seller
        </Divider>
        <div className={'Message-Content'}>
          {children}
        </div>
      </div>
    </div>
  )
}

const BuyerContent = ({children}) => {
  return (
    <div className="Buyer-Content">
      <div className="MessageContainer">
        <Divider orientation="right" plain>
          Buyer
        </Divider>
        <div className={'Message-Content'}>
          {children}
        </div>
      </div>
    </div>
  )
}

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      messageItems: [
        {
          role: 'seller',
          content: 'Hi, Wellcome to use this, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista\n' +
            '              probare, quae sunt a te dicta? Refert tamen, quo modo.'
        },
        {
          role: 'buyer',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista\n' +
            'probare, quae sunt a te dicta? Refert tamen, quo modo.'
        },
        {
          role: 'buyer',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista\n' +
            'probare, quae sunt a te dicta? Refert tamen, quo modo.'
        },
        {
          role: 'seller',
          content: <WillJoinTest handleAgreeTest={this.handleAgreeTest} handleRejectTest={this.handleRejectTest} />
        },
      ]
    }
  }

  handleAgreeTest = () => {
    this.setState({
      messageItems: [...this.state.messageItems, {
        role: 'seller',
        content: <InputOrderNumber handleConfirmOrderNum={this.handleConfirmOrderNum} />
      }]
    })
  }

  handleRejectTest = () => {

  }

  handleConfirmOrderNum = (orderNumber) => {
    if (orderNumber === 'success') {
      this.setState({
        messageItems: [...this.state.messageItems, {
          role: 'seller',
          content: <CheckOrderSuccess handleConfirmAccount={this.handleConfirmAccount} />
        }]
      })
    } else {
      this.setState({
        messageItems: [...this.state.messageItems, {
          role: 'seller',
          content: <CheckOrderFail handleConfirmOrderNum={this.handleConfirmOrderNum} />
        }]
      })
    }
  }

  handleConfirmAccount = () => {
    this.setState({
      messageItems: [...this.state.messageItems, {
        role: 'seller',
        content: <FinishTest />
      }]
    })
  }

  render() {
    const { messageItems } = this.state;

    return (
      <div className="Topic-Body">
        <div className="Message-Container">
          <div className="MessageSubject-Content">
            <div className={'Message-Content'}>
              Hi, Wellcome to use this, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
              probare, quae sunt a te dicta? Refert tamen, quo modo.
            </div>
          </div>
          <Divider plain>Chatting</Divider>

          <div className="MessageList-Content">
            <div className="MessageList Beautify-Scroll-Bar">
              {messageItems.map((messageItem, index) => {
                return messageItem.role === 'seller' ? (
                  <SellerContent key={`content-${index}`}>
                    {messageItem.content}
                  </SellerContent>
                ) : (
                  <BuyerContent key={`content-${index}`}>
                    {messageItem.content}
                  </BuyerContent>
                )
              })}
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
    )
  }
}

const onChange = e => {
  console.log(e);
};

export default App;
