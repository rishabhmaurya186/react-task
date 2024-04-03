import React, { useState, useEffect, useRef } from 'react';
import DivisionHeader from '../../MyComponents/DivisionHeader';
import { NavLink } from 'react-router-dom';
import CustomButton from '../../MyComponents/CustomButton';

import ListedWarehouseTable from './ListedWarehouseTable';

function ListedWarehouse() {
  const searchInputRef = useRef('')
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // Load search history from localStorage on component mount
  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  // Update search history in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  // Update suggestions whenever searchQuery changes
  useEffect(() => {
    // Filter search history based on the search query
    const filteredSuggestions = searchHistory.filter(item =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  }, [searchQuery, searchHistory]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== '') {
      // Add the new search query to the search history
      setSearchHistory([searchQuery, ...searchHistory.filter(item => item !== searchQuery)]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    searchInputRef.current.value = suggestion
  };

  // Render suggestions
  const renderSuggestions = () => {
    return (
      <div className='ml-3 mt-3'>
        {suggestions.map((item, index) => (
          <div key={index}>
            <button onClick={() => handleSuggestionClick(item)}>{item}</button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='lg:mx-10'>
      <DivisionHeader text={'Sites'} />
      <div className="flex justify-between  py-5 border-b-[1px] border-gray-300">
        <div>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
              type="text"
              placeholder="Search by index"
              className='w-[93vw] md:w-[400px]'
              ref={searchInputRef}
              style={{
                padding: '8px 50px 8px 10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                height: '50px',
                boxSizing: 'border-box',
                fontSize: '16px',
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'gray' }}
              onClick={handleSearchSubmit}
            ></i>
          </div>
          {isFocused && renderSuggestions()}
        </div>
      </div>
      <ListedWarehouseTable searchQuery={searchQuery} />
    </div>
  );
}

export default ListedWarehouse;
