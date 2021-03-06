/*
  This file is part of medicalApp.

    medicalApp is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    medicalApp is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Foobar.  If not, see <https://www.gnu.org/licenses/>.  
*/
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