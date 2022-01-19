import React from 'react';
import { useStorageListener } from './useStorageListener';
import "./ChangeAlert.css";

function ChangeAlert({synchronizeItems}) {
  const { storageChanged, synchronize } = useStorageListener(synchronizeItems);

  if(storageChanged) {
    return (
      <div className='ChangeAlertBackground'>
        <div className='ChangeAlertContent'>
          <h2>You have new changes on your local storage.</h2>
          <h4>Would you like to load these changes?</h4>
          <button onClick={()=> synchronize()}>Load changes</button>
        </div>
      </div>
    )
  }
  else {
    return null;
  }
  

}

export { ChangeAlert };
