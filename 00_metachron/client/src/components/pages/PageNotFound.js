import React from "react";
// import { Link } from "react-router-dom";

function PageNotFound() {

    function handleNotFoundClick() {
        window.location.href = "/";
    }

    return (
        <div className="wrapper__notfound">
            <div className="notfound">
                <div className="notfound__main__heading">
                    <h1>
                        Oops
                        <span className="accent">
                            !
                        </span>
                    </h1>
                </div>
                <div className="notfound__sub__heading">
                    <h2>
                        <span className="accent">
                            ...
                        </span>
                            when there was no time
                        <span className="accent">
                            .
                        </span>
                    </h2>
                </div>
                <div className="notfound__404">
                    <h3>404 - Page not found</h3>
                </div>
                <div className="notfound__txt">
                    <p>
                        Once chuck norris and time had race...
                        <br />
                        Result: The time is still running.
                    </p>
                </div>
                <button className="notfound__btn" name="notfound" onClick={handleNotFoundClick}>
                    Get back Home
                </button>
            </div>
        </div>
    );
}

export default PageNotFound;





            // <p>
            //     The page you are looking for might have been
            //     removed had its name changed or
            //     is temporarily unavailable.
            // </p>
            // <Link to="/">
            //     Go To Homepage
            // </Link>