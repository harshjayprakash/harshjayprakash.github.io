import { describe, it, expect, expectTypeOf } from 'vitest';
import getFooterLinks from '@/store/data/footerLinks';
import type { ILink } from '@/store/interfaces/Link';

describe('footerLinks', () => {
    it('should get footer links', () => {
        const { footerLinks } = getFooterLinks();
        expect(footerLinks).toBeTruthy();
        expectTypeOf(footerLinks).toEqualTypeOf<ILink[]>();
    });
});
