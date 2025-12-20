export interface ApiResponse <T> {
    isSucces:boolean;
    message:string;
    data:T;
}