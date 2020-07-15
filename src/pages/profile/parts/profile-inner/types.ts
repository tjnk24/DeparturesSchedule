export type ProfileInnerProps = {
    componentProps : {
        displayName : string;
        email       : string;
    };
};

export type updateProfileTypes = {
    username       : string;
    email          : string;
    password       : string | null;
    repeatPassword : string | null;
}
