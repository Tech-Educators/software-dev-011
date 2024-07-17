# Notes about TypeScript

- If you have a type error, your Vercel deployment will break.
- If you have a type error that you are really really struggling with, you can use this code to deactivate it:
  **!!!!!!!!!Only for emergencies!!!!!!!!!!!**
  ```
  {/* {@ts-ignore} */}
  ```
  It affects the line below! So, if you write on line 7, it affects line 8
