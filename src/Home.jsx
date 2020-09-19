import React, { Component } from 'react';
import Navbar from './UtsProject/Index';
import MyOrder from './UtsProject/Orderan';
import Header from './UtsProject/Header';
import Category from './UtsProject/Category';
import Popular from './UtsProject/Populer';
import Modal from './UtsProject/Modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '0',
      popular: [],
      base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
      item: null,
      order: {},
    }
  }

  popularOnChange = (e) => {
    return fetch(`${this.state.base_url}populer?category_id=${e}`,
      {
        method: 'POST',
      })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          popular: responseJson.data
        })
      })
      .catch(error => 'error')
  }

  handlerModal = (item) => {
    this.setState({
      item: item,
    })
  }

  onOrderHandler = data => {
    this.setState({
      order: data
    });
    console.log();
  }

  render() {
    return (
      <div className="">
        <Navbar />
        <div className="container-fluid p-0">
          <div className="row p-2">
            <div className="col-8 p-2">
              <Header />
              <Category popular={this.popularOnChange} />
              <Popular popular={this.state.popular} onShowModal={this.handlerModal} />
            </div>
            <div className="col-4 bg-light sidenav pt-5">
              <MyOrder item={this.state.order} />
            </div>
          </div>
        </div>
        <Modal item={this.state.item} onOrderHandler={this.onOrderHandler} />
      </div>
    )
  }
}

export default App;