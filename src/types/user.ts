export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type UserLoginData = User & {token: string}
