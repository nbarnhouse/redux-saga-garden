import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PlantList() {
  const dispatch = useDispatch();

  const reduxState = useSelector((store) => store.plantList);

  useEffect(() => {
    // dispatch an action to request the plantList from the API
    dispatch({ type: 'GET_PLANTS' });
  }, []);

  return (
    <div>
      <h3>This is the plant list</h3>
      {/* <pre>{JSON.stringify(reduxState)}</pre> */}
      <ul>
        {reduxState.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlantList;
