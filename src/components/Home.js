import React from 'react'
import VideoCard from './VideoCard'
import '../App.css'

export default function Home () {

  return (
    <div>
      <h3>DISCOVER</h3>
      <div className="home-container">
        <VideoCard />
      </div>
    </div>
  )
}