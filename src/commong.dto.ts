import { ApiBadRequestResponse, ApiExtraModels, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiProperty, ApiUnauthorizedResponse, ApiUnprocessableEntityResponse } from "@nestjs/swagger";

export enum ErrorTypes {
    InvalidCredentials = "invalid-credentials",
    InvalidToken = "invalid-token",
    TokenExpired = "token-expired",
    InvalidTokenType = "invalid-token-type",
    TokenAlreadyUsed = "token-already-used",
    ResourceNotFound = "resource-not-found",
    ValidationError = "validation-error",
    Unauthorized = "unauthorized",
    Forbidden = "forbidden",
    UnkownError = "unknown-error",
    UnprocessableEntity = "unprocessable-entity",
    InvalidTenant = "invalid-tenant",
    InvalidUser = "invalid-user",
    InvalidBookedBy = "invalid-booked-by",
    Conflict = "conflict",
    ProviderError = "provider-error",
    ProviderDependency = "provider-dependency",
    ScopeError = "scope-error",
    AccountMismatch ="account-mismatch",
    MeetingSettingsNotFound = "meeting-settings-not-found",
    CalIntegNotFound = "cal-integ-not-found",
    IntegrationAlreadyExists = "integration-already-exists",
    MeetingLinkNotFound = "meeting-link-not-found",
    SlotNotAvailable = "slot-not-available",
    PastDateError = "past-date-error",
    MeetingNotFound = "meeting-not-found",
    InvalidMeetingDuration = "invalid-meeting-duration",
    InvalidMeetingStartTime = "invalid-meeting-start-time",
    InvalidMeetingEndTime = "invalid-meeting-end-time",
    InvalidStartEndTime = "invalid-start-stop-time",
    MeetingLinkUnavailable = "meeting-link-unavailable",
    InvalidQueue = "invalid-queue",
    MeetingTypeNotFound = "meeting-type-not-found",
    InvalidEmailField = "email-field-invalid"
}

export const Errors = {
    "invalid-credentials" : {
        code: "E1100",
        message: "Invalid credentials"
    },
    "invalid-token" : {
        code: "E1200",
        message: "Invalid token"
    },
    "token-expired": {
        code: "E1300",
        message: "Token expired"
    },
    "token-already-used": {
        code: "E1400",
        message: "Token should be used only once"
    },
    "invalid-token-type": {
        code: "E1500",
        message: "Invalid token type"
    },
    "unknown-error" : {
        code: "E2000",
        message: "Something went wrong"
    },
    "resource-not-found" : {
        code: "E2100",
        message: "Resource not found"
    },
    "unauthorized" : {
        code: "E3100",
        message: "Unauthorized"
    },
    "forbidden" : {
        code: "E3200",
        message: "Forbidden"
    },
    "validation-error" : {
        code: "E4000",
        message: "Bad request"
    },
    "invalid-tenant" : {
        code: "E4200",
        message: "Invalid tenant"
    },
    "invalid-user" : {
        code: "E4300",
        message: "Invalid user"
    },
    "invalid-booked-by": {
        code: "E4400",
        message: "Invalid BookedBy"
    },
    "unprocessable-entity" : {
        code: "E4100",
        message: "Unprocessable entity"
    },
    "conflict" : {
        code: "E5000",
        message: "Resource already exists"
    },
    "integration-already-exists" : {
        code: "E5100",
        message: "Integration already exists"
    },
    "provider-error": {
        code: "E6000",
        message: "Failed to retrieve token from authentication code. Please retry"
    },
    "provider-dependency": {
        code: "E6100",
        message: "Failed to get user profile from authentication. Please retry"
    },
    "scope-error": {
        code: "E6200",
        message: "We found some scopes missing while integrating your calendar. All scopes are mandatory for successful integration"
    },
    "account-mismatch": {
        code: "E6300",
        message: "Email for the connecting calendar does not match with our records"
    },
    "meeting-settings-not-found": {
        code: "E7000",
        message: "No Meeting settings were found for user(s)"
    },
    "cal-integ-not-found": {
        code: "E7100",
        message: "No calendar integration were found for user(s)"
    },
    "meeting-link-not-found": {
        code: "E8100",
        message: "Invalid meeting link"
    },
    "slot-not-available": {
        code: "E8200",
        message: "Selected slot is no longer available"
    },
    "past-date-error": {
        code: "E4400",
        message: "Startime cannot be a past date. Stop time should be greater than start time"
    },
    "meeting-not-found": {
        code: "E8300",
        message: "Meeting Id not found"
    },
    "invalid-meeting-duration": {
        code: "E8000",
        message: "Meeting duration should be atleast 15min"
    },
    "invalid-meeting-start-time": {
        code: "E8100",
        message: "Meeting start time should be greater than current timestamp in seconds"
    },
    "invalid-meeting-end-time": {
        code: "E8200",
        message: "Meeting end time should be greater than current timestamp in seconds"
    },
    "invalid-start-stop-time": {
        code: "E8400",
        message: "End time should be greater than start time"
    },
    "meeting-link-unavailable": {
        code: "E8400",
        message: "Selected meeting link is already taken"
    },
    "invalid-queue": {
        code: "E9100",
        message: "Queue/QueueId not found"
    },
    "meeting-type-not-found": {
        code: "E9200",
        message: "Meeting Type not found"
    },
    "email-field-invalid": {
        code: "E10100",
        message: "Email field not found in form submit or invalid"
    }
}


import { applyDecorators } from '@nestjs/common';

export function SwaggerErrors(options: any) {
  return applyDecorators(
    ApiOperation({ description: options.description}),
    ApiExtraModels(options.type),
    ApiOkResponse({ type: options.type }),
    ApiUnauthorizedResponse({ type: ApiUnAuthorized, description: 'Unauthorized' }),
    ApiBadRequestResponse({ type: ApiBadRequestDto, description: 'Bad Request' }),
    ApiNotFoundResponse({ type: ApiNotFoundErrorDto, description: 'not found'}),
    ApiUnprocessableEntityResponse({ type: ApiUnProcessableResponseDto, description: 'Unprocessable Request' }),
    ApiInternalServerErrorResponse({ type: ApiUnknowErrorDto, description: 'Something went wrong' })
  )
}

export class AjvErrorDto {
    @ApiProperty()
    instancePath: string;
    
    @ApiProperty()
    schemaPath: string;
    
    @ApiProperty()
    keyword: string;
    
    @ApiProperty()
    params: Object;
    
    @ApiProperty()
    message: string;
  }
  
  export class ApiUnknowErrorDto {
    @ApiProperty({
      description: 'API Error Type',
      default: ErrorTypes.UnkownError,
    })
    type: string;
    
    @ApiProperty({
      description: 'API Error Code',
      default: Errors[ErrorTypes.UnkownError].code,
    })
    errorCode: string;
    
    @ApiProperty({
      description: 'Error Description',
      default: Errors[ErrorTypes.UnkownError].message,
    })
    message: string;
    
    @ApiProperty({ description: 'Request End point' })
    path: string;
  }
  
  export class ApiUnAuthorized {
    @ApiProperty({
      description: 'API Error Code',
      default: ErrorTypes.Unauthorized,
    })
    type: string;
    
    @ApiProperty({
      description: 'API Error Code',
      default: Errors[ErrorTypes.Unauthorized].code,
    })
    errorCode: string;
    
    @ApiProperty({
      description: 'Error Description',
      default: Errors[ErrorTypes.Unauthorized].message,
    })
    message: string;
    
    @ApiProperty({ description: 'Request End point' })
    path: string;
  }
  
  export class ApiNotFoundErrorDto {
    @ApiProperty({
      description: 'API Error Code',
      default: ErrorTypes.ResourceNotFound,
    })
    type: string;
    
    @ApiProperty({
      description: 'API Error Code',
      default: Errors[ErrorTypes.ResourceNotFound].code,
    })
    errorCode: string;
    
    @ApiProperty({
      description: 'Error Description',
      default: Errors[ErrorTypes.ResourceNotFound].message,
    })
    message: string;
    
    @ApiProperty({ description: 'Request End point' })
    path: string;
  }
  
  export class ApiErrorResponseDto {
    @ApiProperty({
      description: 'API Error Code',
      default: ErrorTypes.UnkownError,
    })
    type: string;
    
    @ApiProperty({
      description: 'API Error Code',
      default: Errors[ErrorTypes.UnkownError].code,
    })
    errorCode: string;
    
    @ApiProperty({
      description: 'Error Description',
      default: Errors[ErrorTypes.UnkownError].message,
    })
    message: string;
    
    @ApiProperty({ description: 'Request End point' })
    path: string;
  }
  
  export class ApiBadRequestDto {
    @ApiProperty({
      description: 'API Error Code',
      default: ErrorTypes.ValidationError,
    })
    type: string;
    
    @ApiProperty({
      description: 'API Error Code',
      default: Errors[ErrorTypes.ValidationError].code,
    })
    errorCode: string;
    
    @ApiProperty({ description: 'Error Object', type: AjvErrorDto })
    error: AjvErrorDto;
    
    @ApiProperty({ 
      description: 'Error Description', 
      default: Errors[ErrorTypes.ValidationError].message 
    })
    message: string;
    
    @ApiProperty({ description: 'Request End point' })
    path: string;
  }
  
  export class ApiUnProcessableResponseDto {
    @ApiProperty({
      description: 'API Error Code',
      default: ErrorTypes.UnprocessableEntity,
    })
    type: string;
    
    @ApiProperty({
      description: 'API Error Code',
      default: Errors[ErrorTypes.UnprocessableEntity].code,
    })
    errorCode: string;
    
    @ApiProperty({
      description: 'Error Description',
      default: Errors[ErrorTypes.UnprocessableEntity].message,
    })
    message: string;
    
    @ApiProperty({ description: 'Request End point' })
    path: string;
  }