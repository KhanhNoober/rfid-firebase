import { Injectable } from '@nestjs/common';
import { InjectFirebaseAdmin } from 'nestjs-firebase/lib/firebase.decorator';
import { FirebaseAdmin } from 'nestjs-firebase/lib/firebase.interface';
import { RFID } from './rfid.model';

@Injectable()
export class RfidService {
    constructor(@InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin) {}

    async getAllRFID() {
        let data = await this.firebase.db.collection('rfid').get();
        let rfids = [];
        if(data.empty) {
            return "No RFID";
        }
        else {
            data.forEach(doc => {
                rfids.push({id: doc.id, data: doc.data()})
            })
        }
        return rfids;
    }

    async postRFID(rfid) {
        return await this.firebase.db.collection('rfid').doc().set(rfid);
    }
}
