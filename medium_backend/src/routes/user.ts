import { Hono } from "hono/tiny";
import {PrismaClient} from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt';
import { Jwt } from 'hono/utils/jwt';

export const userRouter = new Hono<{
  // whenever there is an environment variable in TS (ie in Hono) pass it as the generic thing so that it can understand what variable is been given.
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string	}
}>();

userRouter.post('/signup', async (c) => {
  // Initialize the prisma client.
  const prisma = new PrismaClient({
    // We can also add @ts-ignore so if there is any error in the next line then it will be ignored.
    datasourceUrl: c.env.DATABASE_URL // this is the environment variable.
  }).$extends(withAccelerate())
  const body = await c.req.json(); // Get body in Hono.
  try{
    const userdata = await prisma.user.create({
      data:{
        email: body.email,
        name: body.name,
        password: body.password
      }
    })
  const token = await sign(userdata, c.env.JWT_SECRET )
    return c.json({
    token: token
  })

  } catch(e){
    c.status(403);
    return c.json({
      message: "Error while signing up"
    })
  }
})

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL // this is the environment variable.
  }).$extends(withAccelerate())
  const body = await c.req.json();
  const data = await prisma.user.findUnique({
    where:{
      email: body.email      
    }
  })
  
  if(!data){
    return c.json({
      message:"User not found"
    });
  }

  const token = await sign(data, c.env.JWT_SECRET);
  return c.json({
    token:token
  } )
})