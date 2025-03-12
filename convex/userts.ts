import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Create a new task with the given text
export const createUser = mutation({
    args:{
        username:v.string(),
        fullname:v.string(),
        image:v.string(),
        bio: v.optional(v.string()),
        email:v.string(),
        clerkId:v.string(),
    },
     handler: async(ctx,args)=>{
         // firsly checking if the user already existed then we will not add it again
         const exisitngUser= await ctx.db.query("users")
         .withIndex("by_clerk_id",(q)=>q.eq("clerkId",args.clerkId))
         .first();
          
         if(exisitngUser) return;

        // create a user and insert it in the "users" table
        // the other fiels we did not specify above because they will take the default initial values
        await ctx.db.insert("users", {
            username: args.username,
            fullname: args.fullname,
            image: args.image,
            bio: args.bio,
            email: args.email,
            clerkId: args.clerkId,
            followers: 0,
            following: 0,
            posts: 0,
         });
     }
});