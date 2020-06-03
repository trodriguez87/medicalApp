import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModule } from './event/event.module';
import { DiagnoseModule } from './diagnose/diagnose.module';
import { MedicalCenterModule } from './medical-center/medical-center.module';
import { DocumentModule } from './document/document.module';
import { MedicalEntityModule } from './medical-entity/medical-entity.module';

const username = 'postgres';
const password = '123';

@Module({
  imports: [TypeOrmModule.forRoot(), EventModule, DiagnoseModule, MedicalCenterModule, DocumentModule, MedicalEntityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
