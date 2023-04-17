import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'


function App() {

  const [Data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users'
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Table striped bordered>
        <thead style={{background: "darkblue", color: "white"}}>
          <tr>
            <th>Name</th>
            <th>Username </th>
            <th>Email</th>
            <th>City</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Compamy</th>
          </tr>
        </thead>
        <tbody>
          {
            Data.map((data, index) => {
              return(
                <tr key={index}>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.address.city}</td>
                <td>{data.phone}</td>
                <td>{data.website}</td>
                <td>{data.company.name}</td>
              </tr>
              );
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
