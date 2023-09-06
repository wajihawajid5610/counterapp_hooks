const counterReducer = (state, action) => {
    switch (action){
        case 'Increment':
            return state + 1
        case 'Decrement':
            if (state !== 0)
              return state -1 
            else
                alert('not be less than zero')
                return state = 0
                
        default:
             throw new Error();
    }
}
export default counterReducer;