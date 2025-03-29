import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import MainComponent from '@/MainComponent.vue';

describe('MainComponent', () => {
    it('should create', () => {
        const wrapper = shallowMount(MainComponent);
        expect(wrapper).toBeTruthy();
    });

    it('should have header component', () => {
        const wrapper = shallowMount(MainComponent);
        const header = wrapper.findComponent({ name: 'HeaderComponent' });
        expect(header).toBeTruthy();
    });

    it('should have footer component', () => {
        const wrapper = shallowMount(MainComponent);
        const footer = wrapper.findComponent({ name: 'FooterComponent' });
        expect(footer).toBeTruthy();
    });

    it('should have surface component', () => {
        const wrapper = shallowMount(MainComponent);
        const surface = wrapper.findComponent({ name: 'SurfaceComponent' });
        expect(surface).toBeTruthy();
    });

    it('should have router view component', () => {
        const wrapper = shallowMount(MainComponent);
        const routerView = wrapper.findComponent({ name: 'RouterView' });
        expect(routerView).toBeTruthy();
    });
});
