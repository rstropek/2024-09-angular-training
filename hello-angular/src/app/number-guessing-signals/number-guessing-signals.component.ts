import { Component, computed, ElementRef, model, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-guessing-signals',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './number-guessing-signals.component.html',
  styleUrl: './number-guessing-signals.component.css',
})
export class NumberGuessingSignalsComponent {
  numberOfGuesses = signal(0);
  userGuess = model<number | undefined>(undefined);
  randomNumber = signal(NumberGuessingSignalsComponent.getRandomNumber());
  feedback = signal('');
  guesses = signal<{ guess: string; feedback: '⬆️' | '⬇️' | '👍' }[]>([]);
  userGuessInput = viewChild.required<ElementRef<HTMLInputElement>>('userGuessInput');

  static getRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  found = computed(() =>
    this.guesses().length > 0 && this.guesses()[this.guesses().length - 1].feedback === '👍');

  onGuess() {
    this.numberOfGuesses.update((n) => n + 1);

    let feedbackShort: '⬆️' | '⬇️' | '👍';
    if (this.userGuess() === this.randomNumber()) {
      this.feedback.set('Congratulations! You guessed the number!');
      feedbackShort = '👍';
    } else if (this.userGuess()! > this.randomNumber()) {
      this.feedback.set('Too high!');
      feedbackShort = '⬆️';
    } else {
      this.feedback.set('Too low!');
      feedbackShort = '⬇️';
    }

    this.guesses.update((g) => [
      ...g,
      {
        guess: this.userGuess()!.toString(),
        feedback: feedbackShort,
      },
    ]);

    const element = this.userGuessInput().nativeElement;
    element.select();
    element.focus();
  }

  onRestart() {
    this.randomNumber.set(NumberGuessingSignalsComponent.getRandomNumber());
    this.feedback.set('');
    this.userGuess.set(undefined);
    this.guesses.set([]);
  }
}
