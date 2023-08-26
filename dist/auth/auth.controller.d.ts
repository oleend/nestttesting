import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(): {
        msg: string;
    };
    signin(): {
        msg: string;
    };
}
