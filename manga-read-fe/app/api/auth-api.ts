import { ApiClient } from "./api-client";

export interface SignParams {
    signInMessage: string;
    referralId?: string;
}


export interface AuthApi {
    signIn(params: SignParams): Promise<void>;
}

export default class HttpAuthApi implements AuthApi {
    public constructor(private client: ApiClient) {}

    async signIn(params: SignParams): Promise<void> {
        await this.client.makeCall<{ success: boolean }>('/auth/sign-in', 'POST', params);
    }
}
