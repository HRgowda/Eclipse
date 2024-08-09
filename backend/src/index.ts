import { Hono } from 'hono';
import { Jwt } from 'hono/utils/jwt';
import { blogRouter } from './routes/blog';
import { userRouter } from './routes/user';
import { cors } from 'hono/cors';

// Define your Hono app with environment bindings
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// Apply CORS middleware to all routes
app.use('/*', cors({
  origin: '*',  // Replace '*' with your frontend's domain in production
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization']
}));

// Set up your routes
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

// Export the app as the default export
export default app;
