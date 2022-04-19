import { UIState } from "./UIProvider";

//Es una funcion pura y debe trabajar solo con los argumentos que recibe, el reducer no puede ser asincrono debe resolverse
//SOLO CON ESOS ARGUMENTOS 

type UIActionype = 
 | {type: 'UI - Open Sidebar'}
 | {type: 'UI - Close Sidebar'}
 | {type: 'UI - Set isAddingEntry', payload: boolean }
 | {type: 'UI - Start Dragging'}
 | {type: 'UI - End Dragging'}

export const uiReducer = ( state: UIState, action: UIActionype): UIState => {
    
    switch (action.type) {
        case 'UI - Open Sidebar':
          return {
              ...state,
              sidemenuOpen: true,
          }
          case 'UI - Close Sidebar':
            return {
                ...state,
                sidemenuOpen: false,
            }
            case 'UI - Set isAddingEntry':
                return {
                    ...state,
                    isAddingEntry: action.payload
                }

            case 'UI - Start Dragging':
                return {
                    ...state,
                    isDragging: true

                }
            case 'UI - End Dragging':
                return {
                    ...state,
                    isDragging: false
    
                }

        default:
            return state
    }
}

