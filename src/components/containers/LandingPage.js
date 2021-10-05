import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="bg-code">
      <div className="">
        <div className="">
          <div className="p-12 bd-filter text-white">
            <p className="p-8 text-6xl text-center font-medium">
              Welcome to DevPoint
            </p>
            <div className="my-8 text-2xl text-center">
              <p className="my-3 p-2">
                Our experienced developers specialize in latest frameworks and technologies,
                and have a track record of successful project deliveries across multiple
                domains in the software industry
              </p>
              <p className="my-3 p-2">
                Our platform allows you to meet our developers individually for a
                free online consultation and build rapport for future collaboration
              </p>
            </div>
          </div>
          <div className="my-20 flex justify-center space-x-4 items-center my-6 mx-5">
            <div className="text-center flex is-justify-center items-center">
              <Link to="/sign_up" className="btn btn-success btn-lg">Sign Up Now</Link>
            </div>
            <div className="text-center flex is-justify-center items-center">
              <p className="px-4 text-white font-bold">or</p>
            </div>
            <div className="text-center flex is-justify-center items-center">
              <Link to="/login" className="btn btn-secondary font-bold">Log into your account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
