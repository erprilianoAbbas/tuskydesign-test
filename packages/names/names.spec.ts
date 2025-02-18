import { NAMES, getRandomItem, getRandomName } from './names';

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

describe('getRandomName', () => {
  it('should return a name from the NAMES array', () => {
    const name = getRandomName();
    expect(NAMES).toContain(name);
  });
});