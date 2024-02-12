import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

/**
 * @Controller() => takes an optional global path,
 * @Controller('auth') => means every route in this controller will be prefixed with auth (POST: /auth/regsiter, /auth/login)
 * */

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register() {
    this.authService.register();
  }

  @Post('login')
  login() {
    this.authService.login();
  }
}
