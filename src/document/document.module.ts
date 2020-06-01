import { Module } from '@nestjs/common';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';
import { TypeDocument } from '../entities/typeDocument.entity';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  controllers: [DocumentController],
  providers: [DocumentService],
  imports: [
    TypeOrmModule.forFeature([TypeDocument])
  ],
  exports: [DocumentService]
})
export class DocumentModule {}

