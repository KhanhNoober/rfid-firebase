import { Controller, Get, Post, Query, Request } from '@nestjs/common';
import { RfidService } from './rfid.service';

@Controller('rfid')
export class RfidController {
    constructor(private rfidService: RfidService) {}

    @Get('/')
    async test() {
        return this.rfidService.getAllRFID();
    }

    @Post('/')
    async test2(@Request() req, @Query() params) {
        return this.rfidService.postRFID(params);
    }
}
