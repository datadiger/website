import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <p className='text-center' style={{ bottom: 0, color: 'black', width: '100%', position: 'fixed', display: 'block', zIndex: 100 }}>&copy; {new Date().getUTCFullYear()}</p>
        )
    }
}

export default Footer;
