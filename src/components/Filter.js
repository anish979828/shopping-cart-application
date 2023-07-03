const Filter = (props) => {
  return (
    <>
      <div className="filter">
        <h2>Sizes:</h2>
        {['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'].map((size) => {
          return <button onClick={props.handleFilter}>{size}</button>;
        })}
      </div>
    </>
  );
};

export default Filter;
