export const setURL = () =>{
    if (process.env.NODE_ENV === 'development'){
        return process.env.REACT_APP_DEVELOPMENT_API_URL;
    }
}
