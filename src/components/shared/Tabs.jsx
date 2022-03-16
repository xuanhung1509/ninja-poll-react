function Tabs({ items, activeItem, handleTabChange }) {
  const handleClick = (item) => {
    handleTabChange(item);
  };
  return (
    <ul className='tabs'>
      {items.map((item) => {
        return (
          <li
            className={`${item === activeItem && 'active'}`}
            onClick={() => handleClick(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default Tabs;
