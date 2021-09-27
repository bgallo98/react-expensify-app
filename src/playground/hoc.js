//Higher order component (HOC) - a component (HOC) that renders another component


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated ? <p>please log in to see info</p> : <WrappedComponent {...props} />}
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);
const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="there are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="there are the details" />, document.getElementById('app'));
