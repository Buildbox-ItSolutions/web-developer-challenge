import React from 'react'

class BannerItem extends React.Component {
    render() {
        return <div>
            <div className="header-buildbox">
                <p className="banner-top-p">{this.props.title}</p>
                <p className="banner-bottom-p">{this.props.subtitle}</p>
            </div>    
           
        </div>
    }
}
export default BannerItem