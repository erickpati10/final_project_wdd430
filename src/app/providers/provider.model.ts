export interface Provider {
  _id?: string;
  providerName: string;
  serviceType: string;
  state: string;
  city: string;
  phone?: string;
  email?: string;
  status?: string;
  notes?: string;
}
