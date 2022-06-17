import { Body, Controller, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiExtraModels, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { ApiBadRequestDto, ApiNotFoundErrorDto, ApiUnAuthorized, ApiUnknowErrorDto, ApiUnProcessableResponseDto, SwaggerErrors } from '../commong.dto';
import { Cat } from './cats.dto';

@Controller('cats')
@ApiTags('Cats')
export class CatsController {

    @Post('list')
    @ApiOperation({ description: "List meetings"})
    @ApiExtraModels(Cat)
    @ApiOkResponse({ type: Cat })
    @ApiUnauthorizedResponse({ type: ApiUnAuthorized, description: 'Unauthorized' })
    @ApiBadRequestResponse({ type: ApiBadRequestDto, description: 'Bad Request' })
    @ApiNotFoundResponse({ type: ApiNotFoundErrorDto, description: 'not found'})
    @ApiUnprocessableEntityResponse({ type: ApiUnProcessableResponseDto, description: 'Unprocessable Request' })
    @ApiInternalServerErrorResponse({ type: ApiUnknowErrorDto, description: 'Something went wrong' })
    addCat(@Body() cat: Cat){

    }


    @Post('decorating-better')
    @SwaggerErrors({ type: Cat, description: "Create Cat"})
    addCatImproved(@Body() cat: Cat){

    }
}
