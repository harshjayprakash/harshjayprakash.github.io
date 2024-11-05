import type { Component } from "vue";

export interface DevProject {
    name: string;
    ref: string;
    description: string;
    timeframe: string;
    technology: string;
    graphic: string;
    uri: string;
    gituri: string;
    content: Component;
}