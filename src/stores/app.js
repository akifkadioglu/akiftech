import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
    state: () => {
        return {
            snackbar: false,
            snackbarText: "",
        }
    },
    actions: {
        getSnackbar(text) {
            this.snackbarText = text

            this.snackbar = true
            setTimeout(() => {
                this.snackbar = false
            }, 2000);
        }
    }
}
)