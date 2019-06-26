import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToasterService } from './toaster.service';
import { ClaimantSO } from 'projects/opt-library/src/service-objects/claimant-so';
import { UpdateClaimantSO } from 'projects/opt-library/src/service-objects/update-claimant-so';
export declare class ClaimantService {
    private http;
    private toasterService;
    url: string;
    constructor(http: HttpClient, toasterService: ToasterService);
    getClaimantById(claimantId: number): Observable<ClaimantSO>;
    getAllClaimants(): Observable<ClaimantSO[]>;
    searchClaimant(claimantInfo: string): Observable<ClaimantSO[]>;
    registerClaimant(claimantSO: ClaimantSO): Promise<void>;
    extractData(res: Response): void;
    handleErrorPromise(error: Response | any): Promise<never>;
    updateClaimant(id: number, updateClaimantSO: UpdateClaimantSO): Observable<UpdateClaimantSO>;
}
