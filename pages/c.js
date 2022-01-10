import chatlistusr from "../components/chatlist";
import React, { useState, useEffect } from 'react';

export default function FirstPost() {
  const [load, setLoad] = useState(true);
  const [getres, setGetres] = useState(0);
  const [postres, setPostres] = useState(0);

  useEffect(() => {
      fetch('/api/q?v=1ppppopopopopo') //get test
      .then(getres => getres.json())
      .then(getres => setGetres(getres))

      fetch('/api/u?v=pipipipipipipip', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: 42}) // body data type must match "Content-Type" header
      }) //get test
      .then(postres => postres.json())
      .then(postres => setPostres(postres))
  }, [load]);

  return (
    <div className="ChatDaddy">
      <div className="ChatLeftSection">
        <div className="ChatLeftSectionInputContainer">
          <input placeholder="John Doe" className="ChatLeftSectionInput" type="text" />
        </div>
        {(getres !== undefined) ? <div>{getres.v}</div> : <h1>Loading...</h1>}
        {(postres !== undefined) ? <div>{postres.a}</div> : <h1>Loading...</h1>}
      </div>
      <div className="ChatRightSection">
        <h1>name</h1>
        <h1>chat</h1>
        <h1>input</h1>
        { }
      </div>
    </div>
  );
}
