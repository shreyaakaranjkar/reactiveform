import { AbstractControl } from "@angular/forms";

export class NoSpaceValidator{
    public static noSpace(control : AbstractControl){
        let val = control.value as string;

        if(!val){
            return null;
        }
        if(val.includes(" ")){
            return {
                noSpaceErr : 'Space Not Allowed!'
            }
        }
        else{
            return null;
        }
    }
}