import { Component } from "react";
import { useParams } from "react-router-dom";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { animal, breed, city, state, description, name } = this.state;

    return (
      <div>
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} — {breed} — {city} — {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
