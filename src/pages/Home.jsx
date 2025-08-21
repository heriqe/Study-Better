import React from 'react'
import Hero from '../components/Hero.jsx'
import Stats from '../components/Stats.jsx'
import Subjects from '../components/Subjects.jsx'
import Tests from '../components/Tests.jsx'
import StudyPlan from '../components/StudyPlan.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTA from '../components/CTA.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Subjects />
      <Tests />
      <StudyPlan />
      <Testimonials />
      <CTA />
    </>
  )
}
