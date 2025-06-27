export type BadgeAppearance = 'ghost' | 'outline' | 'tint' | 'filled';
export type BadgeColour = 'primary' | 'highlight';

export interface BadgeProps {
    appearance: BadgeAppearance;
    colour: BadgeColour;
};
