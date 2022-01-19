import React from "react";

function useStorageListener(synchronizeItems){
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) =>{
        if(change.key === "TODOS_V1"){
            setStorageChange(true);
        }
    });

    const synchronize = () => {
        synchronizeItems();
        setStorageChange(false);
    }

    return {
        storageChanged: storageChange,
        synchronize
    }
}

export { useStorageListener };