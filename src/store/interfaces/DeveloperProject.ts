import type { Component } from "vue";

export interface DeveloperProject {
    name: String;
    ref: String;
    description: String;
    role: String;
    context: String;
    timeframe: String;
    technology: String;
    graphic: String;
    uri: String;
    gitUri: String;
    content: Component;
}