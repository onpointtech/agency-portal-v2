import { Injectable } from '@angular/core';
import { ClaimantSO } from '../service-objects/claimant-so';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  claimantSO: ClaimantSO;
  
  constructor() { }
}
