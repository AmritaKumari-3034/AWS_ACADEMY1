// YourMainComponent.js
import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown'; // Assuming you have a Dropdown component
import DropdownItem from './DropdownItem'; // Import the newly created DropdownItem component
import { NavLink } from 'react-router-dom';

const Main = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Your logic when the selected item changes
  }, [selectedItem]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Define your domains and their respective paths
  const domains = [
    { title: 'Data Science and Business Analytics', path: '/datascience' },
    { title: 'Cloud Computing', path: '/cloudcomputing' },
    { title: 'Cyber Security', path: '/cybersecurity' },
    // Add more domains as needed
  ];

  return (
    <div>
      {/* ... your existing code ... */}
      <Dropdown label="Courses " className="relative ml-24 w-1/3 font-bold ">
        <Dropdown.Header>
          <span className="block text-sm font-bold text-gray-900 font-serif text-center ">Browse by Domains</span>
        </Dropdown.Header>

        <div className="origin-top-left absolute left-1 mt-2 w-full rounded-md shadow-lg bg-white ring-1 font-medium ring-opacity-5 ring-black">
          {domains.map((domain) => (
            <Dropdown.Item
              key={domain.title}
              onMouseEnter={() => handleItemClick(domain.title)}
              onMouseLeave={() => handleItemClick(null)}
              className="group hover:bg-cyan-950 relative"
            >
              {domain.title}
              {selectedItem === domain.title && (
                <DropdownItem title={`Career start with ${domain.title}`} path={domain.path} />
              )}
            </Dropdown.Item>
          ))}

          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </div>
      </Dropdown>
    </div>
  );
};

export default Main;
