import { Hono } from 'hono'
import { Jwt } from 'hono/utils/jwt';
import { blogRouter } from './routes/blog';
import { userRouter } from './routes/user';
import { cors } from 'hono/cors';

const app = new Hono<{
  // whenever there is an environment variable in TS (ie in Hono) pass it as the generic thing so that it can understand what variable is been given.
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string	}
}>();

app.use('/*', cors())
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app
