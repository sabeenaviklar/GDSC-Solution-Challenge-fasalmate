// pages/farmPage.tsx

"use client"
import React from 'react';

interface FarmPage {
  id: number;
  name: string;
  image: string;
  location:string;
  details: string;
  Moredetails: string;
}

const farmsPage: FarmPage[] = [
  {
    id: 1,
    name: 'Shivam Farm ',
    image: '/farmMaha.jpeg',
    location:'NaviMumbai',
    details: 'Contact: https://shivamfarms.business.site/  Phone: 022-278-128-97',
    Moredetails: '',
  },
  {
    id: 2,
    name: 'Kaiche Farm ',
    image: '/KaicheFarm.jpeg',
    location: 'Nashik',
    details: 'Contact- Phone: 07947140564',
    Moredetails:'',
  },
  {
    id: 3,
    name: 'Divase Farm ',
    image: '/divasefarm.jpeg',
    location: 'Kolhapur',
    details: 'Contact- NA',
    Moredetails: '',
  },
  {
    id: 4,
    name: 'SK Biofloc Fish Farm  ',
    image: '/biofloc.jpeg',
    location: 'Satara',
    details: 'Contact- NA',
    Moredetails: '',
  },
  {
    id: 5,
    name: 'Vasu-Dev Farm  ',
    image: '/vasudev.jpeg',
    location: 'Latur',
    details: 'Contact- Phone: 09420065858',
    Moredetails:'https://www.justdial.com/Latur/Vasu-Dev-Niwas/9999P2382-2382-180810211249-E5H3_BZDET/photos',
  },
  // Add more farms as needed
];

const FarmPage: React.FC = () => {
    const backgroundImageStyle: React.CSSProperties = {
      backgroundImage: 'url("/bgFarm.jpeg")', // Replace with the actual path to your image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={backgroundImageStyle} className="container">
        <h2 className='bold-52'>Collaborate with Farmers!</h2>
        <div className="farm-container">
          {farmsPage.map((farm) => (
            <div key={farm.id} className="farm-card">
              <img src={farm.image} alt={farm.name} className="farm-image" />
              <h3>{farm.name}</h3>
              <h2 className="farm-location">{farm.location}</h2>
              <p className="farm-details">{farm.details}</p>
              <a href={farm.Moredetails} target="_blank" rel="noopener noreferrer" className="website-link">
              More details
            </a>
            </div>
          ))}
        </div>
        <style jsx>{`

        .container {
            background-color: #CDFADB;
            padding: 20px;
            min-height: 100vh; 
        }
          h3 {
            text-align: center;
            font-size: 30px;
            color: #333;
          }

          .farm-location {
          font-size: 1.2em;
          color: #555;
          margin-bottom: 15px;
          }
  
          .farm-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
  
          .farm-card {
            border: 1px solid #ddd;
            padding: 20px;
            margin: 20px;
            text-align: center;
            max-width: 600px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
  
          .farm-name {
            font-size: 1.5em;
            color: #333;
            margin-bottom: 10px;
          }

  
          .farm-details {
            margin-top: 10px;
            color: #555;
          }

          .website-link {
            display: block;
            margin-top: 10px;
            color: #4caf50;
            text-decoration: none;
            font-weight: bold;
          }

        `}</style>
      </div>
    );
  };
  
  export default FarmPage;


