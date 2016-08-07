import React from 'react';

const CountriesList = ({ countries }) => (
  <div>
    <table>
      {countries.map((country) => (
        <tr key={country.id}>
          <td>
            {country.name}
          </td>
          <td>
            Gold:
            <input type="number" />
          </td>
          <td>
            Silver:
            <input type="number" />
          </td>
          <td>
            Bronze:
            <input type="number" />
          </td>
        </tr>
      ))}
    </table>
  </div>
);

export default CountriesList;
