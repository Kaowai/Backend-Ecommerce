export interface IShop extends Document {
  name: string;
  email: string;
  mobile: string;
  password: string;
  status: String;
  verify: boolean;
  roles: Array<string>;
}