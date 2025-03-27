import { describe, expect, expectTypeOf, it } from 'vitest';
import getImageData from '@/store/data/imageText';
import type { IImageData } from '@/store/interfaces/ImageData';

describe('imageText', () => {
    it('should get image data', () => {
        const { imageText } = getImageData();
        expect(imageText).toBeTruthy();
        expectTypeOf(imageText).toEqualTypeOf<IImageData[]>();
    });

    it('should get image alt function', () => {
        const { getImageAlt } = getImageData();
        expect(getImageAlt).toBeTruthy();
    });

    it('should return correct alt text with correct object name', () => {
        const { getImageAlt } = getImageData();
        const val = getImageAlt('ccs-screenshot.PNG');
        expect(val).toBe('A terminal displaying the resuling text.');
    });

    it('should return blank alt text with invalid object name', () => {
        const { getImageAlt } = getImageData();
        const val = getImageAlt('invalid-image');
        expect(val).toBe('');
    });
});
