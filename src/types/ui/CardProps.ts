import type { Linkable } from "./Linkable";

export type CardAppearance = 'outline' | 'subtle' | 'filled';

export interface CardProps {
    linkable: Linkable;
    appearance: CardAppearance;
    elevate?: boolean;
    newWindow?: boolean;
    to?: string;
}
