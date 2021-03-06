import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginBody, RefreshTokenBody } from './auth.dto';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body: LoginBody) {
    const { username, password } = body;
    return this.authService.login(username, password);
  }

  @Post('refreshToken')
  refreshToken(@Body() body: RefreshTokenBody) {
    const { refreshToken } = body;
    return this.authService.refreshToken(refreshToken);
  }
}
