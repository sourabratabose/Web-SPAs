import { z } from "zod";

const message_schema = z.object({
  name: z.string().min(5).max(20),
  cname: z.string().min(1).max(20).optional(),
  email: z.string().email().min(5).max(50),
  msg: z.string().min(10).max(100)
});

export default message_schema;