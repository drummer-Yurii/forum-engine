import type { Forum } from "@/api/models/Forum"
import { defineStore } from "pinia";

export type  ForumState = {
    forums: Forum[] | null;
};

export const useForumStore = defineStore({
    id: "Forum",
    state: () => ({
        forums: null
    } as ForumState),
    getters: {
        forumsLoaded: (state) => state.forums !== null,
    },
    actions: {
        async fetchForums(): Promise<void> {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            this.forums = [
                { id: 'Main', description: 'We speak here about everething' },
                { id: 'Mistakes', description: 'Report of bags' },
                { id: 'Complaints', description: 'Complaints for moderators' },
            ];
        },
    },
});