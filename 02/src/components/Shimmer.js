const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {new Array(15).fill(null).map((item, index) => (
        <div className="shimmer-card" key={index}></div>
      ))}
    </div>
  );
};

export default Shimmer;
