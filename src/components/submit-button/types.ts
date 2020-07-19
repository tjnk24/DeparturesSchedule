type SubmitButtonProps = {
    style?     : { [key: string]: string | number };
    customCss? : () => string;
    disabled   : boolean;
    innerText  : string;
}

export default SubmitButtonProps;
