import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import NavigationComponent from './NavigationComponent'
import ContentComponent from './ContentComponent'
import FooterComponent from './FooterComponent'



export default class HomeComponent extends Component {
    render() {
        return (
            <div className='container-fluid h-100'>
                <div className='row'>
                    <div className='col-12'>
                        <HeaderComponent></HeaderComponent>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <NavigationComponent></NavigationComponent>
                    </div>
                    <div className='col-6'>
                        <NavigationComponent></NavigationComponent>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <FooterComponent></FooterComponent>
                    </div>
                </div>
            </div>
        )
    }
}
