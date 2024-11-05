import type { Component } from "vue";

export interface BlogPost {
    name: string;
    description: string;
    uri: string;
    content: Component;
}