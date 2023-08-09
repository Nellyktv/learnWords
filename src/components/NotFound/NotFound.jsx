import {Link} from "react-router-dom";
import notFoundCat from './NotFoundCat.png';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="container_notfound">  
      <h1 className="title_notfound">404</h1>   
      <p>Page not found</p>
      <img src={notFoundCat} alt="404Cat"/>
      <div>
          <Link to = "/"> Go to the homepage</Link>
      </div>
      
    </div>

  )
}