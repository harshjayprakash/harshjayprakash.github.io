import { describe, expect, it } from 'vitest';
import useMobileDetector from '@/composables/useMobileDetector';

describe('useMobileDetector', () => {
    it('should get is mobile flag', () => {
        const { isMobile } = useMobileDetector();
        expect(isMobile).toBeTruthy();
    });

    it('should get window width', () => {
        const { windowWidth } = useMobileDetector();
        expect(windowWidth).toBeTruthy();
    });

    it('should be mobile mode 768 pixels or less', () => {
        const { isMobile, windowWidth } = useMobileDetector();
        if (windowWidth.value < 768) {
            expect(isMobile.value).toBe(true);
        }
        else {
            expect(isMobile.value).toBe(false);
        }
    });
});
