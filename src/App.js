import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCode, setSelectedCode] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/prices');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCode) {
      const filtered = data.filter(item => item.code === selectedCode)
        .map(item => ({
          price: parseInt(item.priceInt.replace('₹', '').replace(',', '')),
          time: new Date(item.time).toLocaleDateString()
        }));
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [selectedCode, data]);

  const uniqueProducts = Array.from(new Set(data.map(item => item.code))).map(code => {
    return data.find(item => item.code === code);
  });

  const handleDropdownChange = (event) => {
    setSelectedCode(event.target.value);
  };

  const handleMouseEnter = (data, index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="App">
      <h1>Price Tracker</h1>
      <select onChange={handleDropdownChange} value={selectedCode}>
        <option value="">Select a product</option>
        {uniqueProducts.map(item => (
          <option key={item.code} value={item.code}>{item.title}</option>
        ))}
      </select>
      {selectedCode && filteredData.length > 0 && (
        <LineChart width={1000} height={500} data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#8884d8" 
            activeDot={{ r: 8 }} 
            dot={{ r: 5, strokeWidth: 2, fill: '#8884d8', stroke: '#8884d8' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </LineChart>
      )}
      {selectedCode && filteredData.length > 0 && activeIndex !== null && (
        <div>
          <p>{`Price: ₹${filteredData[activeIndex].price}, Date: ${filteredData[activeIndex].time}`}</p>
        </div>
      )}
      {selectedCode && filteredData.length === 0 && (
        <p>No data available for this product.</p>
      )}
    </div>
  );
}

export default App;
