import {FakerData} from "./faker-data";

export class FakerResponse {
  status: string;
  code: string;
  locale: string;
  seed: string;
  total: number;
  data: FakerData[];
}
