import React from 'react'
import { connect } from 'react-redux';

export function WithAuth(ComponentToWrap) {

    function WithAuth(props) {
        if(!props.isAuth) {
            props.history.push('/log-in');
            return null;
        }
        return (
            <>
                <ComponentToWrap {...props}/>
            </>
        )
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.user.isAuth
        }
    }
    
    return connect(mapStateToProps)(WithAuth);
}

