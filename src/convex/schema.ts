import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  views: defineTable({
    count:v.number()
  }),
});