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
  isFamilyAttending?: boolean;
}

export interface Guest {
  firstName: string;
  lastName: string;
  middleName?: string;
  isAttending?: boolean;
}
