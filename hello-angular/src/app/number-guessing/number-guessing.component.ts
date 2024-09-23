import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-guessing',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './number-guessing.component.html',
  styleUrl: './number-guessing.component.css',
})
export class NumberGuessingComponent {
  userGuess: number | undefined;
  randomNumber = NumberGuessingComponent.getRandomNumber();
  feedback = '';
  guesses: { guess: string; feedback: '⬆️' | '⬇️' | '👍' }[] = [];

  @ViewChild('userGuessInput') userGuessInput!: ElementRef<HTMLInputElement>;

  static getRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  get found(): boolean {
    return this.guesses.length > 0 && this.guesses[this.guesses.length - 1].feedback === '👍';
  }

  onGuess() {
    let feedbackShort: '⬆️' | '⬇️' | '👍';
    if (this.userGuess === this.randomNumber) {
      this.feedback = 'Congratulations! You guessed the number!';
      feedbackShort = '👍';
    } else if (this.userGuess! > this.randomNumber) {
      this.feedback = 'Too high!';
      feedbackShort = '⬆️';
    } else {
      this.feedback = 'Too low!';
      feedbackShort = '⬇️';
    }

    this.guesses.push({
      guess: this.userGuess!.toString(),
      feedback: feedbackShort,
    });

    const element = this.userGuessInput.nativeElement;
    element.select();
    element.focus();
  }

  onRestart() {
    this.randomNumber = NumberGuessingComponent.getRandomNumber();
    this.feedback = '';
    delete this.userGuess;
    this.guesses = [];
  }
}
