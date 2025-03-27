import { describe, expect, expectTypeOf, it } from 'vitest';
import getDeveloperProjects from '@/store/data/developerProjects';
import type { IDeveloperProject } from '@/store/interfaces/DeveloperProject';

describe('developerProjects', () => {
    it('should get developer projects list', () => {
        const { developerProjects } = getDeveloperProjects();
        expect(developerProjects).toBeTruthy();
        expectTypeOf(developerProjects).toEqualTypeOf<IDeveloperProject[]>();
    });
});
