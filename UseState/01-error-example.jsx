let count = 0;

const handleInc = () => {
  count = count + 1;
  console.log(count);
  return count;
};

const ErrorExample = () => {

  const
  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleInc}>Add</button>
    </>
  );
};

export default ErrorExample;
