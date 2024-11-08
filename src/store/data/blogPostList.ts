import { defineComponent } from "vue";
import type { BlogPost } from "../interfaces/BlogPost";

export const blogPostList: BlogPost[] = [
    {
        name: "A new consistant re-brand.",
        description: "",
        uri: "new-rebrand",
        content: () => defineComponent({ setup() { }, }),
    },
    {
        name: "ThinkPad L480: A Long Term Review",
        description: "",
        uri: "tpl480-review",
        content: () => defineComponent({ setup() { }, })
    }
]