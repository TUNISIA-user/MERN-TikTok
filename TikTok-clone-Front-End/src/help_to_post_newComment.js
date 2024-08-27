// this file help you for new idea forbfetch ur
//data from ur Data Bases 

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [store, Setstore] = useState([]); // Array to hold comments
  const [AddNewCommnt, setAddNewCommnt] = useState(''); // State to hold the new comment input

  // Function to fetch comments from the backend
  const storeData = async () => {
    try {
      // Mocked Axios request to get comments
      const Data = await axios.get('https://jsonplaceholder.typicode.com/comments');
      
      // Flattening and extracting comments (for demonstration)
      const DaRes = Data.data.slice(0, 5); // Getting first 5 comments as an example

      // Updating the state with fetched comments
      Setstore((prev) => [...prev, ...DaRes]); 
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch comments when the component mounts
  useEffect(() => {
    storeData();
  }, []);

  // Function to add a new comment
  const Post_Commnt = async () => {
    try {
      // Mocking a post request for the new comment
      await axios.post('https://jsonplaceholder.typicode.com/comments', {
        body: AddNewCommnt, // Sending the new comment as the body
      });

      // Adding the new comment to the existing list of comments
      Setstore((prev) => [...prev, { body: AddNewCommnt }]);

      // Clearing the input field after submission
      setAddNewCommnt('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Section to add a new comment */}
      <input
        type="text"
        value={AddNewCommnt}
        onChange={(e) => setAddNewCommnt(e.target.value)} // Updating the new comment value
      />
      <button onClick={Post_Commnt}>Add new comment</button>

      {/* Section to display all comments */}
      <div className="Section_cm">
        {store.map((comment, index) => (
          <h2 key={index}>{comment.body}</h2> // Displaying each comment
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
