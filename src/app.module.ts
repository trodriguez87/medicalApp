import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModule } from './event/event.module';

const username = 'postgres';
const password = '123';

@Module({
  imports: [TypeOrmModule.forRoot(), EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
