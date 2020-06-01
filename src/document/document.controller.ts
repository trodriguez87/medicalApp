import { Controller,Body, Param, Get, Delete, Post, Put, HttpException}  from '@nestjs/common';
import { DocumentService} from './document.service';
import { TypeDocument} from '../entities/typeDocument.entity';

@Controller('document')
export class DocumentController {
    constructor(private readonly documentServices:DocumentService){

    }

    @Get()
    async getAll(): Promise<TypeDocument[]>{
        return this.documentServices.findAll();
    }

    @Get(':idDocument')
    async getOne(@Param('idDocument') idDocument: string): Promise<TypeDocument>{
        return this.documentServices.findOne(idDocument);
    }

    @Post()
    async create (@Body() documentData: TypeDocument): Promise<any>{
        return this.documentServices.create(documentData);
    }

    @Put()
    async update( @Body() documentData: TypeDocument): Promise<any>{
        if(this.getOne(documentData.id)){
            return this.documentServices.update(documentData);
        }
    }

    @Delete()
    async delete(@Body() documentData: TypeDocument): Promise<any>{
        if(this.documentServices.findOne(documentData.id)){
            documentData.isActive = false;
            return this.documentServices.notActive(documentData);
        }
        
    }
}