# Preview Endpoint

1. Explain the `index.js` file with all the endpoints code folded.
2. Unfold `app.get("/public")` and explain it.
3. Go to Postman make a request: **GET "/public"**.
4. Make a request: **GET "/private"**, explain the **Auth Bearer** and the **empty {{TOKEN}}**.
5. Make a request: **POST "/token"** explain the **Auth Basic** and **Tests tab**.
6. Make a request: **GET "/private"**.
7. Unfold `app.post("/token")` and explain it but `signToken`.
8. Unfold `app.post("/private")` and explain it but `verifyToken`.
9. Make a request: **GET "/private"**.