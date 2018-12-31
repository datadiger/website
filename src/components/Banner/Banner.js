import React, { Component } from 'react'
import Footer from '../Footer/Footer';
import twitter from '../../images/tw.png'
import twitter_1 from '../../images/tw_1.png'
import facebook from '../../images/fb.png'
import facebook_1 from '../../images/fb_1.png'
import instagram from '../../images/ig.png'
import instagram_1 from '../../images/ig_1.png'
import icon from '../../images/icon.png'
import './Banner.css';

class Banner extends Component {
    constructor() {
        super();

        this.state = {
            twitterSource: twitter,
            facebookSource: facebook,
            instagramSource: instagram
        }
    }

    onTwitterMouseOver = () => {
        this.setState({ twitterSource: twitter_1 })
    }

    onTwitterMouseOut = () => {
        this.setState({ twitterSource: twitter })
    }

    onFacebookMouseOver = () => {
        this.setState({ facebookSource: facebook_1 })
    }

    onFacebookMouseOut = () => {
        this.setState({ facebookSource: facebook })
    }

    onInstagramMouseOver = () => {
        this.setState({ instagramSource: instagram_1 })
    }

    onInstagramMouseOut = () => {
        this.setState({ instagramSource: instagram })
    }

    render() {
        return (
            <div className='bgImg'>
                <div className='centered text-center align-items-center justify-content-center'>
                    <img src={icon} className='' alt="twitter" style={{ width: '100px', height: '100px' }} />
                    <h1 className='brandName' style={{ color: 'black' }}>Data Diger Group</h1>
                    <p style={{ color: 'black' }} >Building cross-platform intelligent applications.</p>
                    <div className='pt-5'>
                        <a href="https://twitter.com/DataDiger" target="_blank" rel="noopener noreferrer">
                            <img src={this.state.twitterSource} className='social mx-1' alt="twitter" onMouseOver={this.onTwitterMouseOver} onMouseOut={this.onTwitterMouseOut} />
                        </a>
                        <a href="https://www.facebook.com/groups/datadiger/" target="_blank" rel="noopener noreferrer">
                            <img src={this.state.facebookSource} className='social mx-1' alt="facebook" onMouseOver={this.onFacebookMouseOver} onMouseOut={this.onFacebookMouseOut} />
                        </a>
                        <a href="https://instagram.com/datadiger" target="_blank" rel="noopener noreferrer">
                            <img src={this.state.instagramSource} className='social mx-1' alt="instagram" onMouseOver={this.onInstagramMouseOver} onMouseOut={this.onInstagramMouseOut} />
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Banner;