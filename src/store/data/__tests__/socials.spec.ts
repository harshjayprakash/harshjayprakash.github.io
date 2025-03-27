import { describe, expect, expectTypeOf, it } from 'vitest';
import getSocialsData from '@/store/data/socials';
import type { ISocial } from '@/store/interfaces/Social';

describe('socials', () => {
    it('should get social list', () => {
        const { socials } = getSocialsData();
        expect(socials).toBeTruthy();
        expectTypeOf(socials).toEqualTypeOf<ISocial[]>();
    });
});
