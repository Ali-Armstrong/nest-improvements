import { ApiProperty } from "@nestjs/swagger";

export class Cat {
    @ApiProperty({description: "Cat Name", example: "Cat"})
    name: string;

    @ApiProperty({description: "Cat Age", example: "2m"})
    age: number;

    @ApiProperty({description: "Cat breed", example: "Breed"})
    breed: string;
}