import type { ApiResult } from ".";
import type { Forum } from "../models/Forum";
import Api from "@/api/requests";

export default new (class ForumApi {
  public async getForums(): Promise<ApiResult<{ resources: Forum[] }>> {
    return await Api.get("fora");
  }
})();
