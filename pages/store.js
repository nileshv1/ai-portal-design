import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { userReducer } from "./feature/user/userSlice"

const rootReducer = combineReducers({
    users: userReducer,
})

function loadFromLocalStorage() {
    try {
        const serialisedState =
            typeof window !== 'undefined' && localStorage.getItem('persistantState')
        if (serialisedState === null) return undefined
        return JSON.parse(serialisedState)
    } catch (e) {
        console.warn(e)
        return undefined
    }
}

export default configureStore({
    reducer: rootReducer,
    preloadedState: loadFromLocalStorage(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: true
        })
})

// export const store = configureStore({
//     reducer: { flags: flagReducer },
// })

// export type AppDispatch = typeof configureStore.dispatch