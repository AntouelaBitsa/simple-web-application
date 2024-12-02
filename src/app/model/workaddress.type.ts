import { Users } from "./users.type";

export type WorkAddress={
  workAddID: number;
  workAddress: string;
  users: Users|null; // A single associated Users
}
