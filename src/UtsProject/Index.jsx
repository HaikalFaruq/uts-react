import React, { Component, Fragment } from 'react'

class Index extends Component {
    render() {
    return (
        <div className="row mb-4 bg-nav">
            <div className="col-8 d-flex">
                <img src="https://freeiconshop.com/wp-content/uploads/edd/menu-rounded-solid.png" height="20px" className="mt-3 mr-3"/> 
                <h4 className="mt-2 mr-4">MyKantin</h4>
                <div className="input-group mb-2 mr-sm-2 mt-2 bg-search">
                    <div className="input-group-prepend">
                    <div className="input-group-text ">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/search-1767866-1502119.png" height="20"/>
                    </div>
                    </div>
                    <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Cari Makan Bang ?"/>
                </div>
            </div>
            <div className="col-4 d-flex justify-content-end">
                <img src="https://img.icons8.com/pastel-glyph/2x/like--v2.png" height="30" className="icon-lope"/>
                <h6 className="badge badge-warning chat-notif">3</h6>
                <img src="https://econtrolling.jatengprov.go.id/themes/images/user.png" height="40" className="user-p"/>
            </div>
        </div>
    );
    }
}
export default Index