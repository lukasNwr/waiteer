import React, { useState, useEffect } from 'react';

const MenuItem = ({ itemName, active }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(itemName));
  }, [itemName]);

  const handleClick = (event) => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <li>
        <a
          href={`#${itemName}`}
          onClick={handleClick}
          aria-label={`Scroll to ${itemName}`}
          className={`text-lg ${
            active == true ? 'text-waiteerPink' : 'text-gray-400'
          }`}
        >
          {itemName}
        </a>
      </li>
    </>
  );
};

export default MenuItem;
