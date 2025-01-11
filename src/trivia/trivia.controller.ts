import { Controller, Get, Query } from '@nestjs/common';
import { TriviaService } from './trivia.service';

@Controller('trivia')
export class TriviaController {
    constructor(private readonly triviaService: TriviaService) { }

    @Get()
    async getTrivia(
        @Query('amount') amount: number,
        @Query('category') category: number,
        @Query('difficulty') difficulty: string,
        @Query('type') type: string,
    ) {
        const questions = await this.triviaService.fetchTriviaQuestions(
            amount || 10, // Default to 10 questions
            category || 9, // Default to "General Knowledge"
            difficulty || 'easy', // Default to "easy" difficulty
            type || 'multiple', // Default to "multiple-choice"
        );
        return questions;
    }
}
