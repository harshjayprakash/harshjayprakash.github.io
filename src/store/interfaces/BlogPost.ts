import type { Component } from "vue";

export interface BlogPost {
    name: String;
    description: String;
    uri: String;
    content: Component | null;
}