import React from 'react';
import { Link } from "react-router-dom";

function ErrorComp() {
  return (
    <div className="error-handler">
      <h1> 404 ERROR</h1><br/>
      <h1> Page Not Found </h1><br/>
      <Link to="/home">Go Back</Link>
    </div>
  );
}
export default ErrorComp;