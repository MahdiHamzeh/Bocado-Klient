import {
    Machine 
}
from "xstate"

export const authState = Machine({
    id: "app",
    initial: "signed-out",
    states: {
        "signed-out": {
            on: {
                SIGN_IN: "signed-in"
            }
        },
        "signed-in": {
            on: {
                SIGN_OUT: "signed-out"
            }
        }
    }
});