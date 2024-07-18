# Reflections

(Required)
🎯 Please mention the requirements you met and which goals you achieved for this assignment.

🎯 Were there any requirements or goals that you were not quite able to achieve?

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

(Optional)
🏹 Feel free to add any other reflections you would like to share about your submission e.g.

What went really well and what could have gone better?
Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).
Describing errors or bugs you encountered while completing your assignment.
Requesting feedback about a specific part of your submission.

# Useful notes

- Make a solid plan before you start coding!
  - Db schema, wireframes, functionality, ...
- Focus on authentication as your priority
- Db schema:
  - You need at least two tables: a users table (containing clerk_id) and a posts table (connected to the users by the clerk_id --> foreign key in the posts table). **One-to-many relationship** --> one user has many posts
  - If you are doing the likes stretch goal, you need a third table for likes
  - If you are doing the followers stretch goal, you need a junction table for the follower_id and the followee_id. **Many-to-many relationship**--> one user can follow many users, and those users can also follow many users themselves
  - **VERY IMPORTANT**: when you deploy to vercel, remember to add ALL the env vars (clerk and database!)
  - If you are using TypeScript, make sure you don't have type errors. Type errors break your deployment.
