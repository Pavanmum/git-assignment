function useDebounce(cd, delay=500) {
    let timerid;

    return (...arg) =>{
        clearTimeout(timerid);
        timerid = setTimeout(() => {
            cd(...arg);
        },delay)
    }
   
} 
export default useDebounce;