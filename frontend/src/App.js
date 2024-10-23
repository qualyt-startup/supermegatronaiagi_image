import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/your-endpoint')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>My Data</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li> // Adjust this line based on your data structure
                ))}
            </ul>
        </div>
    );
}

export default App;
