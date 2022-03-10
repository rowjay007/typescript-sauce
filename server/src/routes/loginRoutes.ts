import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}
const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
  <form method="post">
  <div>
  <label>Email </label>
  <input name="email" />
  </div>
  <div>
   <label>Password </label>
  <input name="password" type"password" />
  
  </div>
  <button>Submit</button>
  </form>
    `);
});

router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === "hi@hi.com" && password === "password") {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("invalid email or password");
  }
});

export { router };
