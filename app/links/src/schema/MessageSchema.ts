import { z } from "zod";

const message_schema = z.object({
  fname: z.string().min(5).max(20),
  lname: z.string().min(1).max(20),
  email: z.string().email().min(5).max(50),
  msg: z.string().min(10).max(100)
});

export default message_schema;