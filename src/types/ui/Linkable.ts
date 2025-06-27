import type { Component } from "vue";

export type LinkVariant = 'internal' | 'external';
export type Linkable = 'none' | LinkVariant;

export interface LinkableConfig {
    is: string | Component;
    href?: string;
    target?: string;
    rel?: string;
    to?: string;
}
