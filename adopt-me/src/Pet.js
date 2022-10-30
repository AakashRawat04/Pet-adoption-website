const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.animal}</h1>
      <h1>{props.breed}</h1>
    </div>
  );
};

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };

export default Pet;
