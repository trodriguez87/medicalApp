import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModule } from './event/event.module';
import { DiagnoseModule } from './diagnose/diagnose.module';

const username = 'postgres';
const password = '123';

@Module({
  imports: [TypeOrmModule.forRoot(), EventModule, DiagnoseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
