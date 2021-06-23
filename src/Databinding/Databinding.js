import React, {Component} from 'react';

export default class Databinding extends Component {
  //Khai báo thuộc tính
  name = 'Ngoc';
  img = 'http://picsum.photos/200/200';
  render() {
    //Khai báo biến. hàm (Khai báo sẽ có từ khóa let var const và dc khai báo trog hàm và phương thức)
    let tenHocVien = 'ngoc';
    //phương thức tự xây dựng
    renderCard = () =>{
        let product = {
            id:1,
            name: 'iphone',
            price:1000,
            img: 'http://picsum.photos/200/200',
        }

        return <div className='card w-25'>
            <img src={product.img}></img>
            <div className='card-body'>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button className='btn btn-success'>Mua hàng</button>
            </div>
        </div>
    }
    return (
      <div className="container">
        <div id="content">{tenHocVien}</div>
        <div id="content">{this.name}</div>
        <div className="card w-25">
          <img src={this.img} alt="1"></img>
        </div>
        {this.renderCard()}
      </div>
    );
  }
}
