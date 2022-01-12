/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './jwt.strategy';

//aqui vamos trabalhar com o acesso do usuário

@Injectable()
export class AuthService {
	constructor(
        private readonly usuarioService: UsuarioService,
        private readonly jwtService: JwtService,
	) {}

	async login( loginUserDto: LoginDto){
		const user = await this.usuarioService.findByLogin(loginUserDto);

        const token = this._createToken(user);

		return{
			email: user.email,
			...token
		};
	}

    //criação do token de acesso

    private _createToken({email}: LoginDto): any {
        const user: JwtPayload = { email } 
		const accessToken = this.jwtService.sign(user);
		return {
            expiresIn: process.env.EXPIRESIN,
			accessToken,
	    }
	}
}