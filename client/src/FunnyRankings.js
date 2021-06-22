import React, { useState, useEffect } from "react";

const callBackendAPI = async () => {
  // Call backend for route(s) you set up and handle any business logic here
  const response = await fetch('/users');
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};

function FunnyRankings() {
  // Implement the component for the funny rankings of sales reps

  // The state to maintain data from a response from the backend
  const [data, setData] = useState([]);
  const [ rank, setRank ] = useState('idle');

  // This is called once when the component is mounted in the DOM to fetch
  // the data from the backend and set the state to the response
  useEffect(() => {
    callBackendAPI()
      .then((res) => {
        const data = res;

        if (rank === 'asc') {
          data.sort((a, b) => {
            if (a.ranking < b.ranking) return 1;
            return -1;
          })
        } else if (rank === 'desc') {
          data.sort((a, b) => {
            if (a.ranking > b.ranking) return 1;
            return -1;
          })
        }

        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const userData = [...data];

    if (rank === 'asc') {
      userData.sort((a, b) => {
        if (a.ranking < b.ranking) return 1;
        return -1;
      })
    } else if (rank === 'desc') {
      userData.sort((a, b) => {
        if (a.ranking > b.ranking) return 1;
        return -1;
      })
    }

    setData(userData);
  }, [rank])

  const onChangeRanking = () => {
    if (rank === 'idle') {
      setRank('desc');
    } else if (rank === 'desc') {
      setRank('asc');
    } else {
      setRank('desc');
    }
  }

  return (
    <div className="ranking-container">
      <table id="users">
        <thead>
          <tr>
            <td>No</td>
            <th>Name</th>
            <th>Number of conversations</th>
            <th id="ranking">
              <button onClick={onChangeRanking}>Ranking (Click to Sort)</button>
            </th>
          </tr>
        </thead>

        <tbody>
          { data.map((user, index) => (
            <tr key={user.user}>
              <td>{index + 1}</td>
              <td>{user.user}</td>
              <td>{user.conversations.length}</td>
              <td>{user.ranking}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  )
}

export default FunnyRankings;
