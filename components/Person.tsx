// pages/peoplePage.tsx

'use client' // 👈 use it here
 
import { useState } from 'react'

const peopleData = [
  
    {
      id: 1,
      name: 'Ameer Nisha',
      photo: '/person.jpeg',
      details: 'Email: Ameernisha@gmail.com | Phone: 9820955358 | Location: Mumbai, Maharashtra',
    },

    {
        id: 2,
        name: 'Sabina',
        photo: '/person.jpeg',
        details: 'Email: sabina@gmail.com | Phone: 8169585862 | Location: Mumbai, Maharashtra',
      },

      {
        id: 3,
        name: 'Aniket Roy',
        photo: '/person.jpeg',
        details: 'Email: aniket@gmail.com | Location: kolkata',
      },
      {
        id: 4,
        name: 'Sanjana ',
        photo: '/person.jpeg',
        details: 'Email: sanjana@gmail.com | Location: Mumbai',
      },
    // Add more people as needed
  ];
  
  const PeoplePage: React.FC = () => {
    const [selectedPerson, setSelectedPerson] = useState<number | null>(null);
  
    const handleGetInTouch = (personId: number) => {
      setSelectedPerson(personId);
    };
  
    const clearSelectedPerson = () => {
      setSelectedPerson(null);
    };
  
    const pageStyle: React.CSSProperties = {
      padding: '20px',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      flexDirection: 'row', // set flexDirection to row
      flexWrap: 'wrap', // allow items to wrap to the next row
      justifyContent: 'center', // center the cards horizontally
      alignItems: 'center',
      color: '#333',
    };

    const h2: React.CSSProperties = {
        textAlign: 'center',
        marginBottom: '20px', // Add margin to the bottom of h2
      };
  
    const personCardStyle: React.CSSProperties = {
      border: '1px solid #ddd',
      padding: '20px',
      margin: '20px',
      textAlign: 'center',
      maxWidth: '300px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };
  
    const personImageStyle: React.CSSProperties = {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '50%',
    };
  
    const detailsStyle: React.CSSProperties = {
      marginTop: '10px',
      color: '#555',
    };
  
    const buttonStyle: React.CSSProperties = {
      backgroundColor: '#4caf50',
      color: '#fff',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1em',
      marginTop: '10px',
    };
  
    return (
      <div style={pageStyle}>
<h2 style={h2} className='bold-52 '>Collaborate with Trustworthy Individuals </h2>

        {peopleData.map((person) => (
          <div key={person.id} style={personCardStyle}>
            <img src={person.photo} alt={person.name} style={personImageStyle} />
            <h2>{person.name}</h2>
            {selectedPerson === person.id ? (
              <div>
                <p style={detailsStyle}>{person.details}</p>
                <button onClick={clearSelectedPerson} style={buttonStyle}>
                  Close Details
                </button>
              </div>
            ) : (
              <button onClick={() => handleGetInTouch(person.id)} style={buttonStyle}>
                Get In Touch
              </button>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default PeoplePage;