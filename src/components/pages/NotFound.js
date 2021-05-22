import React from 'react';
import { Link, withRouter } from 'react-router-dom';

/**
 * Page not found (404) component
 */
const NotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <h2>Document not found</h2>
    <p><Link to="/">Home</Link> | <Link to="/Signup">Signup </Link></p>
  </div>
);

export default withRouter(NotFound);