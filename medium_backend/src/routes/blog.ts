// import from @prisma/client/edge rather than from @prisma/client/extension
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from 'hono/jwt';
import { Hono } from "hono";

export const blogRouter = new Hono<{
  Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string	}, 

  Variables:{
      userId: string
    }
}>()

// '/*' makes sure that the middlewear is used in all the routes  
blogRouter.use('/*', async (c, next) => {
  const token = await c.req.header('authorization') || "";
  try {
    const user = await verify(token, c.env.JWT_SECRET);
    if (user) {
      c.set("jwtPayload", { userId: user.id });
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "You are not logged in"
      });
    }
  } catch (err) {
    c.status(403);
    return c.json({
      message: "Invalid token"
    });
  }
});

blogRouter.post('/', async (c) => {
  try {
    const body = await c.req.json();
    const { userId } = c.get("jwtPayload");

    // Check if userId is provided
    if (!userId) {
      return c.json({ error: "User ID is required" }, 400);
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL // this is the environment variable.
    }).$extends(withAccelerate());

    // Check if the user exists
    const userExists = await prisma.user.findUnique({
      where: { id: userId } // Ensure userId is used correctly
    });

    if (!userExists) {
      return c.json({ error: "User not found" }, 404);
    }

    const postData = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
        authorid: userId // Ensure field name matches Prisma schema
      }
    });

    return c.json({ id: postData.id });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

blogRouter.put('/', async (c) =>{
  const body = await c.req.json();
  const prisma = new PrismaClient({
    // We can also add @ts-ignore so if there is any error in the next line then it will be ignored.
    datasourceUrl: c.env.DATABASE_URL // this is the environment variable.
  }).$extends(withAccelerate())

  const updateData = await prisma.post.update({
    where:{
      id: body.id},
      data:{
        title: body.title,
        content: body.content,
        published: body.published }
  })
  c.status(200);
  return c.json({
    message:"Updated sucessfully"
  })
});

blogRouter.get('/bulk', async (c) =>{
  const prisma = new PrismaClient({
    // We can also add @ts-ignore so if there is any error in the next line then it will be ignored.
    datasourceUrl: c.env.DATABASE_URL // this is the environment variable.
  }).$extends(withAccelerate())

  const getBUlk = await prisma.post.findMany();
  return c.json(getBUlk)
})

blogRouter.get('/:id', async (c) =>{
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    // We can also add @ts-ignore so if there is any error in the next line then it will be ignored.
    datasourceUrl: c.env.DATABASE_URL // this is the environment variable.
  }).$extends(withAccelerate())

  try{
    const getData = await prisma.post.findFirst({
      where:{
        id: id
      }
    })
    return c.json({
      post:getData
    })
  } catch(e){
    c.status(411)
    return c.json({
      message:"Error while displaying the post"
    })
  }
})

