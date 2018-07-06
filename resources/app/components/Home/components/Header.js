import React from "react";


const Header = () =>
    (
        <div className="app-header">
            <div className="app-logout">
                <a href="/auth/logout">Logout</a>
            </div>
        </div>);


Header.propTypes = {

};


export default Header;