import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
    state: () => {
        return {
            snackbar: false,
            snackbarText: "",
        }
    },
    actions: {
        getSnackbar(text, time = 2000) {
            this.snackbarText = text

            this.snackbar = true
            setTimeout(() => {
                this.snackbar = false
            }, time);
        }
    }
}
)