import React from 'react'
import './bodysection.css'
import TopSection from '../TopSectionDashboard/TopSection'
import Listing from '../ListingSectionDashboard/ListingSection'
const BodySection = () => {
  return (
    <div className='mainContent'>
        <TopSection/>

        <div className="bottom flex">
            <Listing />
        </div>
    </div>
  )
}

export default BodySection