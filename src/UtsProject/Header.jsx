import React, { Component } from 'react';
import gambar1 from './img/perutkenyang.png'
import gambar2 from './img/images1.png'
import gambar3 from './img/diskon.png'

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div id="carouselExampleIndicators ml-2" class="carousel slide rounded-lg mx-5" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner rounded-lg">
                <div class="carousel-item active">
                    <img src={gambar1} class="d-block w-100" alt="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" />
                </div>
                <div class="carousel-item">
                    <img src={gambar2} class="d-block w-100" alt="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" />
                </div>
                <div class="carousel-item">
                    <img src={gambar3} class="d-block w-100" alt="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
  }
}

export default Header;