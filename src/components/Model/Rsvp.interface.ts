export interface Rsvp {
  id?: string;
  emailAddress: string;
  guests: Guest[];
  hasRsvped: boolean;
  dietaryRestrictions?: string;
  addressLabel: string;
  streetAddress: string;
  streetAddressLineTwo?: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Guest {
  name: string;
  isAttending: boolean;
}
