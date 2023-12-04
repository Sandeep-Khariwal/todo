import { IsBoolean, IsString } from "class-validator";

export class Response { 
    @IsBoolean()
    readonly success: boolean

    @IsString()
    readonly message: string
}