import Banner from '@/components/home/banner/Banner'
import { CaseStudies } from '@/components/home/caseStudies/CaseStudies'
import ChooseUs from '@/components/home/chooseUs/ChooseUs'
import Contact from '@/components/home/contact/Contact'
import Countries from '@/components/home/countries/Countries'
import Industries from '@/components/home/industries/Industries'
import Pricing from '@/components/home/pricing/Pricing'
import Services from '@/components/home/services/Services'
import Testimonials from '@/components/home/testimonials/Testimonials'
import Video from '@/components/home/video/Video'
import React from 'react'

const page = () => {
  return (
    <div className='page'>
      <Banner/>
      <Video/>
      <Services/>
      <Countries/>
      <Industries/>
      <CaseStudies/>
      <ChooseUs/>
      <Testimonials/>
      <Pricing/>
      <Contact/>
    </div>
  )
}

export default page