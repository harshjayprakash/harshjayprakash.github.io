import { describe, expect, expectTypeOf, it } from 'vitest';
import useProjectFilter from '@/composables/useProjectFilter';

describe('useProjectFilter', () => {
    it('should get data', () => {
        const { filteredProjects } = useProjectFilter();
        expect(filteredProjects).toBeTruthy();
    });

    it('should get type filter', () => {
        const { typeFilter } = useProjectFilter();
        expect(typeFilter).toBeTruthy();
    })

    it('should have default type filter \'all\'', () => {
        const { typeFilter } = useProjectFilter();
        expect(typeFilter).toBeTypeOf('object');
        expect(typeFilter.value).toBe('All');
    });

    it('should get filter by abbreviation function', () => {
        const { filterByAbbreviation } = useProjectFilter();
        expect(filterByAbbreviation).toBeTruthy();
    });

    it('should filter by abbreivation', () => {
        const { filteredProjects, filterByAbbreviation } = useProjectFilter();
        filterByAbbreviation(['xbk']);
        expect(filteredProjects.value.at(0)).toBeTruthy();
        expect(filteredProjects.value.at(0)?.abbreviation).toBe('xbk');
    });

    it('should get filter update function', () => {
        const { updateFilter } = useProjectFilter();
        expect(updateFilter).toBeTruthy();
    });

    it('should filter by project category', () => {
        const { filteredProjects, updateFilter } = useProjectFilter();
        updateFilter('Desktop Application');
        filteredProjects.value.forEach(project => {
            expect(project.category).toBe('Desktop Application');
        });
    });
});
