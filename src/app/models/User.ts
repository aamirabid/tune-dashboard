export module UserModel {

  export interface UserJson {
      name: string;
      avatar: string;
      id: number;
      occupation: string;
  }

  export interface LogJson {
    time: string;
    type: string;
    user_id: number;
    revenue: number;
  }

  export interface User {
    name: string;
    avatar: string;
    id: number;
    occupation: string;
    totalImpression: number;
    totalConversions: number;
    totalRevenue: number;
    type: string;
    conversion: Array<number>;
  }


}
