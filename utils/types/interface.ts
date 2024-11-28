export interface UserDetailsResponse {
  message: string;
  result: User;
  success: boolean;
}

 export interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
}

