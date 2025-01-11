import { Module } from '@nestjs/common';
import { TriviaController } from './trivia/trivia.controller';
import { TriviaService } from './trivia/trivia.service';

@Module({
  imports: [],
  controllers: [TriviaController],
  providers: [TriviaService],
})
export class AppModule { }
