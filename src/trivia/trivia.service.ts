import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TriviaService {
    private readonly apiUrl = 'https://opentdb.com/api.php';

    async fetchTriviaQuestions(amount = 10, category = 9, difficulty = 'easy', type = 'multiple') {
        try {
            const response = await axios.get(this.apiUrl, {
                params: { amount, category, difficulty, type },
            });

            if (response.data.response_code !== 0) {
                throw new HttpException('Error fetching trivia questions', HttpStatus.BAD_REQUEST);
            }

            return response.data.results;
        } catch (error) {
            throw new HttpException(
                `Failed to fetch trivia questions: ${error.message}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
