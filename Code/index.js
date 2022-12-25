//Reducer

const BUY_CAKE = "BUY_CAKE"

function buyCake(){
    return {
        type: BUY_CAKE,
        info:"First redux action"
    }
}

//(previousState, action) => newState()

const intitalState = {
    numOfCakes: 10
}

const reducer = (state=intitalState,action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state;
    }
}