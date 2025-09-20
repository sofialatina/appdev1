const App = () => {
  const products = [
    { title: 'Potato', isFruit: false, id: 1 },
    { title: 'Radish', isFruit: false, id: 2 },
    { title: 'Mango', isFruit: true, id: 3 },
  ];

  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
};

export default App;