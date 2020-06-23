import { HttpException } from "@nestjs/common/exceptions";


 export class Utilities {

    static parameterExistenceError = 'Some mandatory parameter(s) is/are missing';

    static checkParameterExistence (value: any) {

        if(value === null || !value || value === undefined) {
            throw new HttpException({
                statusCode: 400,
                error: 'Incorrect paremeter(s).',
                message: this.parameterExistenceError
            }, 400);
        }
    }


 
}