import { ApiClient } from "./api-client";

export interface User {
    id: string;
    externalId: number | string;
    username?: string;
    firstName?: string;
    lastName?: string;
    avatarUrl?: string;
}


export interface UserApi {
    getCurrentUser(): Promise<User | null>;
}

export class HttpUserApi implements UserApi {
    public constructor(private client: ApiClient) { }

    public async getCurrentUser() {
        const data = await this.client.makeCall<{ user: User | null }>('/users/me', 'GET');

        return data.user;
    }
}
