import { describe, it, expect } from 'vitest';
import router from '@/router';

describe('router', () => {
    it('should create', () => {
        expect(router).toBeTruthy();
    });

    it('should have routes', () => {
        expect(router.getRoutes()).toBeTruthy();
    });
});
