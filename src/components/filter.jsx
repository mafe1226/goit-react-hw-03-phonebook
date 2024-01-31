import React from 'react';

const Filter = ({ filter, handleTofind }) => {
  return (
    <div>
      <label style={{marginLeft:"10px",}}>
        Find contacts by name
        <input style={{marginLeft:"10px",}}
          type="text"
          name="filter"
          placeholder="To find"
          value={filter}
          onChange={handleTofind}
        />
      </label>
    </div>
  );
};

export default Filter;