import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import BadgeComponent from '@/components/BadgeComponent.vue';

describe('BadgeComponent', () => {
	it('should create', () => {
        const badge = mount(BadgeComponent);
        expect(badge).toBeTruthy();
    });

    it('should have default variant \'filled\'', () => {
        const badge = mount(BadgeComponent);
        expect(badge.props().variant).toBe('filled');
        expect(badge.classes().includes('badge--filled')).toBeTruthy();
    });
});
