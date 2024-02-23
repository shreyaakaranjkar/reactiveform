import { AbstractControl, ValidationErrors } from "@angular/forms";

export class EmpIdValidator{
    public static isEmpIdValid(control : AbstractControl) : ValidationErrors | null{
       

        // if(isValid){
        //     return null
        // }
        // else{
        //     return {
        //         invalidEmp : 'Emp Id is not valid'
        //     }
        // }
        let val = control.value as string;

        if(val){

            let regexp = /^[E]\d{3}$/i;
            let isValid = regexp.test(val);
        return isValid ? null : {invalidmsg :'Emp Id is invalid'}

        }
        else{
            return null;
        }
    }
}