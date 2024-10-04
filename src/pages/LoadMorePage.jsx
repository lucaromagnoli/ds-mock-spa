
import React, { useState } from 'react';

const YourComponent = () => {
  // Your initial data
  const initialData = [
    // ... your data array
  ];

  // State to manage displayed data and load more button
  const [displayedData, setDisplayedData] = useState(initialData);
  const [visibleItemCount, setVisibleItemCount] = useState(5); // Change this as needed

  // Handler for the "Load More" button
  const handleLoadMore = () => {
    // Increase the visible item count (you can adjust this logic based on your requirements)
    setVisibleItemCount(prevCount => prevCount + 5);

    // Update displayedData with additional items
    setDisplayedData(initialData.slice(0, visibleItemCount + 5));
  };

  return (
    <div>
      {displayedData.map((item, index) => (
        // Render your data items here
        <div key={index}>{item}</div>
      ))}
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default YourComponent;