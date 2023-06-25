import { error } from "console";

export const createEror =(status, mesage)=>{
	const error = new Error();
	error.status= status
	error.mesage= mesage
	return error
}