import React from 'react';
import PlantForm from '../PlantForm/PlantForm.jsx';
import PlantList from '../PlantList/PlantList.jsx';

function Garden() {
  return(
    <div>
      <h2>This is the garden!</h2>
      {/* Redux State isn't needed in the garden, it is just a parent component */}
      {/* Thanks to redux, there is no need to pass along props! */}
      <PlantForm />
      <PlantList />
    </div>
  )
}

export default Garden;
