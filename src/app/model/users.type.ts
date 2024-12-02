import { HomeAddress } from "./homeaddress.type";
import { WorkAddress } from "./workaddress.type";

export type Users={
  workAdd: any;
  homeAdd: any;
  userID: number;
  name: string;
  surname: string;
  gender: string;
  birthDate: Date;
  workAddress: WorkAddress | null; // Referencing WorkAddress type
  homeAddress: HomeAddress | null; // Referencing HomeAddress type
  // homeAddress: {
  //   homeAddID: number;
  //   homeAddress: string;
  // }
}


