import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
