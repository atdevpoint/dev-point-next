import { Link } from 'react-router-dom';

function SignUpButton() {
  return (
    <div>
      <Link to="/sign_up" className="button is-primary"><strong>Sign up</strong></Link>
      <Link to="/login" className="button is-light">Log in</Link>
    </div>
  );
}

export default SignUpButton;
