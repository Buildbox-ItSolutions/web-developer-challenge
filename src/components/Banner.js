import React from 'react'
import BannerItem from './BannerItem'

const item = {title: 'buildbox', subtitle: 'WEB CHALLENGE'}


class Banner extends React.Component {
    render() {
        return <div className="header-div">
                    <BannerItem {...item} />
            </div>
    
    }
}
export default Banner