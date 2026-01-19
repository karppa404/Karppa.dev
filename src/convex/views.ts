import { query, mutation } from "./_generated/server";

// Query to get the current view count
export const getCount = query({
  args: {},
  handler: async (ctx) => {
    const viewRecord = await ctx.db.query("views").first();
    return viewRecord ? viewRecord.count : 0;
  },
});

// Mutation to increment the view count by 1
export const incrementView = mutation({
  args: {},
  handler: async (ctx) => {
    const viewRecord = await ctx.db.query("views").first();

    if (viewRecord) {
      // Update existing record
      await ctx.db.patch(viewRecord._id, {
        count: viewRecord.count + 1,
      });
    } else {
      // Create the record if it doesn't exist yet
      await ctx.db.insert("views", {
        count: 1,
      });
    }
  },
});