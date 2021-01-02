export type AppPropsState = {
  countries   : string[];
  gates       : { [index: string]: number };
  flagsImages : { [index: string]: string };
  loading     : boolean;
  error       : string;
};
