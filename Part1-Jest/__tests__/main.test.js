const path = require('../assets/scripts/main');

describe('Volume_Icon_Path', () => {
    test('Volume = 68', () => {
        expect(path(68)).toBe('./assets/media/icons/volume-level-3.svg');
    });
    test('Volume = 45,', () => {
        expect(path(45)).toBe('./assets/media/icons/volume-level-2.svg');
    });
    
    test('Volume = 15', () => {
        expect(path(15)).toBe('./assets/media/icons/volume-level-1.svg');
    });
    test('Volume = 1', () => {
        expect(path(1)).toBe('./assets/media/icons/volume-level-1.svg');
    });
    test('Volume = 0', () => {
        expect(path(0)).toBe('./assets/media/icons/volume-level-0.svg');
    });
  });