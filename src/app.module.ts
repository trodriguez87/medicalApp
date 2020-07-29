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
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModule } from './event/event.module';
import { DiagnoseModule } from './diagnose/diagnose.module';
import { IPSModule } from './IPS/IPS.module';
import { DocumentModule } from './document/document.module';
import { MedicalEntityModule } from './medical-entity/medical-entity.module';

const username = 'postgres';
const password = '123';

@Module({
  imports: [TypeOrmModule.forRoot(), 
      EventModule, 
      DiagnoseModule,
      IPSModule,
      DocumentModule,
      MedicalEntityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
