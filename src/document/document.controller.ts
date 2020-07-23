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

import { Controller,Body, Param, Get, Delete, Post, Put, HttpException}  from '@nestjs/common';
import { Utilities} from '../Utilities';
import { DocumentService} from './document.service';
import { TypeDocument} from '../entities/typeDocument.entity';

@Controller('document')
export class DocumentController {
    constructor(private readonly documentServices:DocumentService){}


    @Get()
    async getAll(): Promise<TypeDocument[]>{
        return this.documentServices.findAll();
    }

    @Get(':idDocument')
    async getOne(@Param('idDocument') idDocument: string): Promise<TypeDocument>{
        return this.documentServices.findOne(idDocument);
    }

    @Post()
    async create (@Body() documentData: TypeDocument): Promise<TypeDocument>{
        Utilities.checkParameterExistence(documentData.abbreviation);
        Utilities.checkParameterExistence(documentData.name);
        documentData.isActive = true;
        return this.documentServices.save(documentData);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() documentData: TypeDocument): Promise<TypeDocument>{
        const document: TypeDocument = await this.documentServices.findOne(id);
        documentData.id = document.id;
        Utilities.checkParameterExistence(documentData.abbreviation);
        Utilities.checkParameterExistence(documentData.name);
        Utilities.checkParameterExistence(documentData.isActive);
        return this.documentServices.save(documentData);
    }

    @Delete('id:')
    async delete(@Param('id') id: string): Promise<TypeDocument>{
        const document: TypeDocument = await this.documentServices.findOne(id);
        document.isActive = false;
       return this.documentServices.save(document);
    }
}