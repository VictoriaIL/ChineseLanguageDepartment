/* global ymaps */
import React, { useEffect, useRef, useState } from 'react';

import './Map.scss';

import getCoordinatesFromAddress from './Map.utils';

const Map = ({ address }) => {
  const mapContainerRef = useRef(null);
  const [lat, setLatitude] = useState(0);
  const [long, setLongitude] = useState(0);

  useEffect(() => {
    getCoordinatesFromAddress(address).then((data) => {
      if (data) {
        const [longitude, latitude] = data.split(' ');
        setLatitude(parseFloat(latitude));
        setLongitude(parseFloat(longitude));
      }
    });
  }, [address]);

  useEffect(() => {
    if (lat !== 0 && long !== 0) {
      const map = new ymaps.Map(mapContainerRef.current, {
        center: [lat, long],
        zoom: 15,
      });

      const marker = new ymaps.Placemark([lat, long]);
      map.geoObjects.add(marker);

      return () => map.destroy();
    }
  }, [lat, long]);

  return <div className="Map" ref={mapContainerRef} />;
}

export default Map;
