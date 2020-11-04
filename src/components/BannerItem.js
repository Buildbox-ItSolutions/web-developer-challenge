import React from 'react'

class BannerItem extends React.Component {
    render() {
        return <div>
            <React.Fragment>
                <p className="banner-top-p">{this.props.title}</p>
                <p className="banner-bottom-p">{this.props.subtitle}</p>
            </React.Fragment>    
           
        </div>
    }
}
export default BannerItem