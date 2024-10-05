import { TestBed } from '@angular/core/testing';
import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should return 0 for for empty string', () => {
    const result = service.add('');
    expect(result).toBe(0);
  });

  it('should return the sum of two numbers separated by a comma', () => {
    const result = service.add('1,2');
    expect(result).toBe(3);
  });

});
