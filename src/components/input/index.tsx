import React from "react";

import TextField, {
    StandardTextFieldProps,
    FilledTextFieldProps,
    OutlinedTextFieldProps,
    TextFieldProps
} 
from "@material-ui/core/TextField";

import t from "tcomb-validation";



type ValidationFn = (text: string) => void;

interface PropsCommon {
    validation: ValidationFn | Array<ValidationFn>;
}

interface PropsStandardTextField extends Omit<StandardTextFieldProps, "helperText" | "error">, PropsCommon {}

interface PropsFilledTextField extends Omit<FilledTextFieldProps, "helperText" | "error">, PropsCommon {}

interface PropsOutlinedTextField extends Omit<OutlinedTextFieldProps, "helperText" | "error">, PropsCommon {}

type Props = (
    PropsStandardTextField 
    | PropsFilledTextField 
    | PropsOutlinedTextField
);

const Input: React.FC<Props> = props => {

    const [hasError, setHasError] = React.useState<boolean>(false);

    const [errorMessage, setErrorMessage] = React.useState<string>("");

    const onChaneHandler = (
        event: React.ChangeEvent<
            HTMLTextAreaElement
            | HTMLInputElement
        >
    ) => {
        let errorResult: boolean = false;

        try {
            const isFunction = t.is(props.validation, t.Function);

            const isArrayOfFunction = t.is(props.validation, t.list(t.Function))

            if (isFunction) {
                
                (props.validation as ValidationFn)(event.target.value);
            }
            else if (isArrayOfFunction) {
                
                for (const validatorFn of (props.validation as Array<ValidationFn>)) {
                    
                    validatorFn(event.target.value);
                }
            }
        }
        catch(error) {
            errorResult = true;

            setErrorMessage(error.message as string);
        }

        setHasError(errorResult);

        props.onChange && props.onChange(event);
    };

    type TextFieldPropsType = (
        typeof props & { 
            onChange: typeof onChaneHandler;
            helperText: TextFieldProps["helperText"];
            error: TextFieldProps["error"];
        }
    );

    const textFieldProps = {
        ...props,
        onChange: onChaneHandler
    } as TextFieldPropsType & Props;

    if (hasError) {
        textFieldProps.helperText = errorMessage;
        textFieldProps.error = true;
    }
    else {
        textFieldProps.helperText = undefined;
        textFieldProps.error = false;
    }

    delete textFieldProps.validation;

    return (
        <TextField {...textFieldProps}/>
    );
}

export default Input;