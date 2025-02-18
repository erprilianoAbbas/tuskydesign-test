import { ANIMALS, getRandomItem, getRandomAnimal } from './animals';

import '@testing-library/jest-dom/extend-expect';

describe('getRandomItem', () => {
  it('should return an item from the array', () => {
    const items = [1, 2, 3, 4, 5];
    const item = getRandomItem(items);
    expect(items).toContain(item);
  });

  it('should return undefined if the array is empty', () => {
    const items: any[] = [];
    const item = getRandomItem(items);
    expect(item).toBeUndefined();
  });
});

describe('getRandomAnimal', () => {
  it('should return an animal from the ANIMALS array', () => {
    const animal = getRandomAnimal();
    expect(ANIMALS).toContainEqual(animal);
  });

  it('should return an object with name and sound properties', () => {
    const animal = getRandomAnimal();
    expect(animal).toHaveProperty('name');
    expect(animal).toHaveProperty('sound');
  });
});