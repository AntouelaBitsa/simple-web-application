import { Users } from "./users.type";

export type HomeAddress={
  homeAddID: number;
  homeAddress: string;
  user: Users | null; // A single associated User
}
