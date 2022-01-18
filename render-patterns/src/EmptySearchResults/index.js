import React from 'react';

function EmptySearchResults(props) {
  return <p>The todo you are searching for does not exist '{props.message}'</p>;
}

export { EmptySearchResults };
