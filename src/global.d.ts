import { CreateUserPayload } from "./schemas/user.schema";

declare global {
  namespace Express {
    export interface Request {
      user?: CreateUserPayload & {
        id: string;
      };
    }
  }
}
