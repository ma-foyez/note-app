import { showMessage } from 'react-native-flash-message';

export const FlashMessage = (message = "Data submit successfully!", type = "success") => {
    return showMessage({
        message: message,
        type: type
    })
}