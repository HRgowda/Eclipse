import {z} from "zod"

export const signupInput = z.object({
  name:z.string(),
  email:z.string().email(),
  password:z.string().min(6)
})

export const signinInput = z.object({
  email:z.string().email(),
  password:z.string().min(6)
})

export const createPostInput = z.object({
  title:z.string(),
  content:z.string(),
  published:z.boolean()
})

export const updatePostInput = z.object({
  title:z.string(),
  content:z.string(),
  published:z.boolean(),
  id:z.string()
})

export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreatePostInput = z.infer<typeof createPostInput>
export type UpdatePostInput = z.infer<typeof updatePostInput>