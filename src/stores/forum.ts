import type { Forum } from "@/api/models/Forum";
import forumApi from "@/api/requests/forumApi";
import { defineStore } from "pinia";

export type ForumState = {
  forums: Forum[] | null;
  selectedForumId?: string | null;
};

export const useForumStore = defineStore({
  id: "Forum",
  state: () =>
    ({
      forums: null,
    } as ForumState),
  getters: {
    forumsLoaded: (state) => state.forums !== null,
    selectedForum: (state) =>
      state.forums?.find((f) => f.id === state.selectedForumId),
  },
  actions: {
    async fetchForums(): Promise<void> {
      const { data } = await forumApi.getForums(); 
      this.forums = data!.resources;
    },
    selectForum(forumId: string) {
      this.selectedForumId = forumId;
    },
  },
});
