import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StringCalculatorService } from './services/string-calculator.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'string-calculator';
  inputString: string = '';
  result: string = '';

  constructor(private stringCalculatorService: StringCalculatorService) { }

  calculate() {
    try {
      const sum = this.stringCalculatorService.add(this.inputString);
      this.result = `Result: ${sum}`;
    } catch (error: any) {
      this.result = error.message;
    }
  }
}
