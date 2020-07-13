export type RouterWrapProps = {
    path            : string;
    exact?          : boolean;
    component       : React.ElementType;
    layout          : React.ElementType;
    componentProps? : unknown;
}
