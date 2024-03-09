import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//Dispatch communicates to redux
//Selector reads from redux

const PlantForm = () => {
  const dispatch = useDispatch();

  //Initial state is an OBJECT, with keys id and name
  let [newPlant, setPlant] = useState('');

  const handleNameChange = (event) => {
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setPlant({ name: event.target.value });
  };

  const addNewPlant = (event) => {
    event.preventDefault();
    dispatch({ type: 'POST_PLANTS', payload: newPlant });
    //updates the next plant to have a new id
    setPlant({});
  };
  return (
    <div>
      <h3>This is the form</h3>
      {/* <pre>{JSON.stringify(newPlant)}</pre> */}
      <form onSubmit={addNewPlant}>
        <input type="text" value={newPlant.name} onChange={handleNameChange} />
        <input type="submit" value="Add New Plant" />
      </form>
    </div>
  );
};

export default PlantForm;
