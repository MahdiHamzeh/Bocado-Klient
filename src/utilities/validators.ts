import validator from "validator";

const isUsername = (username: string) => {
    if (username && username.length < 2) {

        throw new Error("Username must contain at least 2 characters or more");
    }

    const isValid = /^(\w|\.|-)+$/.test(username);
    
    if (username && !isValid) {
        
        throw new Error("Username must only  contain letters numbers dashes underscores and dots");
    }
} 

const isPassword = (password: string) => {
    
    const hasUppercase = /[A-Z]/.test(password);

    const hasNumbers = /\d/.test(password);

    const hasSpecialChars = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

    const isSpecial = (
        hasUppercase
        && hasNumbers
        && hasSpecialChars
    );

    if (!isSpecial && password) {
        throw new Error("Password must contain numbers, one uppercase letter and special characters (e.g * ! = ? #)");
    }
}

const isName = (label: string) => (name: string) => {

    const isAlphabetWhiteSpace = /^[a-z ]+$/i;

    const isAlphabet = /[a-z]/i;

    const isValid = isAlphabetWhiteSpace.test(name) && isAlphabet.test(name);

    if (!isValid && name) {
        throw new Error(`${label} can only contain alphabetical letters and space`);
    }
}

const isEmail = (email: string) => {
    
    const isEmail = validator.isEmail(email);

    if (email && !isEmail) {

        throw new Error("Invalid email formatt");
    }
}

export default {
    isUsername,
    isPassword,
    isName,
    isEmail
}