import { myFunction } from './sample';

describe('myFunction', () => {
  it('should return true', () => {
    // Arrage & Act & Assert
    expect(myFunction(undefined)).toBeTruthy();
  });
});
