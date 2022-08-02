
import React, { useState, useEffect } from 'react';
import '../src/tabledata.css';
 
function TableData() {
    const [data, getData] = useState([])
    const URL = 'https://jsonplaceholder.typicode.com/photos';
 
    useEffect(() => {
        fetchData()
    }, [])
 
 
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                console.log(response);
                getData(response);
            })
 
    }
    let x = data[0];
 
    return (
        <>
            <h1>display JSON data to table in React JS</h1>
            <div>
            
              <img src={x.url} />
            </div>
            <tbody>
                <tr>
                    <th>Album Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>URL</th>
                    <th>ThumbNailUrl</th>
                    
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.albumId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.url}</td>
                        <td>{item.thumbnailUrl}</td>
                    </tr>
                ))}
            </tbody>
 
        </>
    );
}
 
export default TableData;