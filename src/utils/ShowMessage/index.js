import { showMessage as ShowToast } from "react-native-flash-message";
 
 
export const ShowMessage = (message,type,icon) => {
        ShowToast({
                message,
                type: type === "info" ? 'success' : 'danger',
                backgroundColor: type === "info" ? 'green' : 'red',
                duration: 5000,
                icon: icon
            });
    }