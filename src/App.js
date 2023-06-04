import React, { useState, useEffect } from "react";

function EmojiFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchEmojis() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
    }
    fetchEmojis();
  }, []);

  return (
    <div>
      <h1>Fetch Data</h1>
      <table border="1" style={{ textAlign: "center" }}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>

          <th>Street</th>
          <th>Suite</th>
          <th>City</th>
          <th>Zipcode</th>

          <th>Geo-Lat</th>
          <th>Geo-Lng</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        <tbody>
          {data.map((item, i) => (
            <tr key={item.id}>
              <td> {item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>

              <td>{item.address.street}</td>
              <td>{item.address.suite}</td>
              <td>{item.address.city}</td>
              <td>{item.address.zipcode}</td>

              <td>{item.address.geo.lat}</td>
              <td>{item.address.geo.lng}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmojiFetcher;
