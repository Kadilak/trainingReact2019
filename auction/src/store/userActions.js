export const LOG_IN_USER= 'LOG_IN_USER';
export const LOG_OUT_USER = 'LOG_OUT_USER';

export const logInUser = (credentials) => dispatch => {
    console.log("my credentials",credentials);
    //simulate 1,5sec delay
    setTimeout(() => {
        console.log('test');
        Promise.resolve(true)
        .then(() => {
            dispatch({type: LOG_IN_USER})
        })
    },1500)
    
}
export const logOutUser = () => ({type: LOG_OUT_USER})