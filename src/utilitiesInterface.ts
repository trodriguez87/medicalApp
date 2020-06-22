import { HttpException } from "@nestjs/common/exceptions";


 export class utilitiesInterface {

    constructor(){ }

    checkParameterExistence = async(value: any) =>{
        if(value === null || !value || value === undefined) {
            throw new HttpException({
                statusCode: 400,
                error: 'Incorrect paremeter(s).',
                message: value.parameterExistenceError
            }, 400);
        }
    }


 
}