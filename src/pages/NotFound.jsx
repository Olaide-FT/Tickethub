import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container">
      <div className="empty-state">
        <h1>404</h1>
        <p>This page does not exist.</p>

        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;