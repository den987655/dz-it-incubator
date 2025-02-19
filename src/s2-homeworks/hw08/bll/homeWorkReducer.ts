import {UserType} from '../HW8'

const initialState: UserType[] = []

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[] = initialState, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name > b.name ? 1 : -1) // need to fix
            }
            else if (action.payload === 'down') {
                return [...state].sort((a, b) => a.name < b.name ? 1 : -1) // need to fix
            }
            return state
        }
        case 'check': {
            if (action.payload >= 18) {
                return [...state].filter(el => el.age >= 18) // need to fix
            }
            return state
        }
        default:
            return state
    }
}
