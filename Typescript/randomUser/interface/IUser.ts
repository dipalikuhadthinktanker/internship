export interface User {
  name: { first: string; last: string };
  email: string;
  phone: string;
  picture: { medium: string; large: string };
  location: { country: string };
  dob: {
    date: string;
    age: number;
  };
}
