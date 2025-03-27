import { describe, expect, it } from 'vitest';
import getMetaData from '@/store/data/metaData';

describe('metaData', () => {
    it('should get copyright year', () => {
        const { copyrightYear } = getMetaData();
        expect(copyrightYear).toBeTruthy();
    });

    it('should expect copyright year to be 2025', () => {
        const { copyrightYear } = getMetaData();
        expect(copyrightYear).toBe(2025);
    });

    it('should get epoch semver', () => {
        const { versionSemver } = getMetaData();
        expect(versionSemver).toBeTruthy();
    });

    it('should expect epoch-semver to be 4.1', () => {
        const { versionSemver } = getMetaData();
        expect(versionSemver).toBe('4.1');
    });

    it('should get calver', () => {
        const { versionCalver } = getMetaData();
        expect(versionCalver).toBeTruthy();
    });

    it('should expect calver to be 25H1E', () => {
        const { versionCalver } = getMetaData();
        expect(versionCalver).toBe('25H1E');
    });

    it('should get build date', () => {
        const { buildDate } = getMetaData();
        expect(buildDate).toBeTruthy();
    });
});
