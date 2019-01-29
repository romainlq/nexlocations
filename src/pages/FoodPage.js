import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import Map from '../components/Map/Map';

const RESTOS = [
  {
    clientName: 'Carrefour',
    latitude: 48.88793,
    longitude: 2.263463,
    projects: [
      {
        id: 1,
        projectName: 'Project 1',
        consultants: [
          {
            id: 1,
            name: 'John Doe'
          },
          {
            id: 2,
            name: 'Martin dupont'
          },
          {
            id: 3,
            name: 'Pif paf pouf bim'
          }
        ]
      },
      {
        id: 2,
        projectName: 'Project 2',
        consultants: [
          {
            id: 1,
            name: 'Batman'
          },
          {
            id: 2,
            name: 'Spiderman'
          },
          {
            id: 3,
            name: 'Elon Musk'
          }
        ]
      }
    ]
  },
  { clientName: 'Renault', latitude: 48.833269, longitude: 2.238756 },
  { clientName: 'PSA', latitude: 48.802525, longitude: 2.338276 },
  { clientName: 'Bouygues', latitude: 48.858574, longitude: 2.436423 }
];

const MapPage = () => {
  return (
    <div>
      <HeaderContainer />
      <Map data={RESTOS} food={true} />
    </div>
  );
};

export default MapPage;
