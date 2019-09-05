import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TransactionList from '../../components/TransactionList'
import ItemModal from '../../components/ItemModal'
import AccountModal from '../../components/AccountModal'


import Calculations from '../../components/Calculations';

import {Provider} from 'react-redux';
import store from '../../store';
import { Container} from 'reactstrap';


class Account  extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false }
    }
    render() { 
        return ( 
            <Provider store={store}>
        <div className="App">
            
            <Container>
              <h1>Financial Budgeting</h1>
              <Calculations />
              <div className="addAccount">
                <AccountModal/>
              </div>
              <div className="clearBoth">
                <TransactionList />
              </div>
              <div className="addButton">
                <ItemModal/>
              </div>
            </Container>
        </div>
      </Provider>
         );
    }
}
 
export default Account ;