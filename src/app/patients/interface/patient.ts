import  Docs  from "./docs";

export interface Patient{
    docs: Docs[],
    total: number,
    limit: number,
    page: number,
    pages: number
   
}