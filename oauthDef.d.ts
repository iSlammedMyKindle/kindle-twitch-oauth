interface IParams
{
    client_id?: string,
    scope?: string,
    redirect_uri?: string,
    client_secret?: string,
}

interface IHttps
{
    use_https?: boolean,
    auth_page_path?: string;
    certpath?: string,
    keypath?: string,
    passphrase?: string,
}

/**
 * {
    "accessToken": "",
    "expiresIn": 14405,
    "refreshToken": "",
    "scope": [
        "channel:moderate",
        "chat:edit",
        "chat:read"
    ],
    "tokenType": "bearer"
}
 */
interface AuthResponse 
{
    accessToken: string,
    expiresIn: number,
    refreshToken: string,
    scope: string[],
    tokenType: string;
}

export function authenticateTwitch(twitch: IParams, configHttps: IHttps);

export type{
    AuthResponse, IParams, IHttps
}