import { Doctor } from "./doctor";

export interface Patient {
  id: number;
  name: string;
  lastname: string;
  comment: string;
  doctor_id: number;
}
