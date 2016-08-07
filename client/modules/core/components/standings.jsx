import React from 'react';

const Standings = ({ people } ) => (
  <div>
    <h1>Standings</h1>
    <table>
      <thead>
        <tr>
          <th>Person</th>
          <th>Gold</th>
          <th>Silver</th>
          <th>Bronze</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => ( 
          <tr key={person._id}>
            <td>
              {person.name}
            </td>
            <td>
              {person.gold}
            </td>
            <td>
              {person.silver}
            </td>
            <td>
              {person.bronze}
            </td>
            <td>
              {person.points}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Standings;
