const request = require("supertest");
const app = require("../app"); // Assuming your Express app is in app.js

describe("GET /", () => {
  it("responds with 200 and a message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
