import React, { Link } from 'react-router';

class PageNotFound {
  render() {
    return (
      <div style={{
        padding: '20px'
      }}>
        <h1>Page Not Found.</h1>
        <p>Go to
          <Link to="/">Home Page</Link>
        </p>
      </div>
      );
  }
}

export default PageNotFound;
