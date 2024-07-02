import React from 'react'
import Herobody from "../app/Components/HeroSection/Herobody"
import Aboutus from './Components/AboutUs/Aboutus'
import Workstats from './Components/WorkStat/Workstats'
import ServiceSection from './Components/Service/ServiceSection'
import CustExp from './Components/CustomerExperience/CustExp'
import QuerySection from './Components/Query/QuerySection'
import Portfolio from './Components/Portfolio/Portfolio'
import FeedbackSection from './Components/Feedback/FeedbackSection'
import NewsSection from './Components/News/NewsSection'
import NewsletterSection from './Components/Newsletter/NewsletterSection'

const home = () => {
  return (
    <div>
      <Herobody/>
      <Aboutus/>
      <Workstats/>
      <ServiceSection/>
      <CustExp/>
      <QuerySection/>
      <Portfolio/>
      <FeedbackSection/>
      <NewsSection/>
      <NewsletterSection/>
    </div>
  )
}

export default home
