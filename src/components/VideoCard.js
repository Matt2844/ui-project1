import React from 'react'
import './VideoCard.css'
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


export default function VideoCard () {

  const backgroundImages = [
    {
      id: 1,
      image: './images/ui-fitness.jpeg',
      popularity: 'Popular',
      time: '22 min',
      name: 'Stair Climbs',
    },
    {
      id: 2,
      image: './images/ui-fitness.jpeg',
      popularity: 'Trending',
      time: '18 min',
      name: 'Something',
    }
  ]

  return (

    <div>
      {backgroundImages.map(background => (
        <div className="video-card-container"
          style={{
            backgroundImage: `url(${background.image})`,
            backgroundSize: 'cover',
          }}>
          <div className="popularity">
            <i className="popularity-icon"><FavoriteBorderIcon /></i>
            <p>{background.popularity}</p>
          </div>
          <div className="info-section">
            <p>{background.time}</p>
            <p>{background.name}</p>
          </div>
          <div className="start-button-container">
            <Button variant="contained" color="primary" size="small">Start</Button>
          </div>
        </div>
      ))}
    </div>
  )
}