import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Rocket extends Component {
  render() {
    return (
      <div>
        <h1>Rocket</h1>
        <Link to="/" className="btn btn-secondary">
          Back
        </Link>
      </div>
    );
  }
}

export default Rocket;
