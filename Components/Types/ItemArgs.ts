export interface DetailArgs {
  status?: string;
  _id?: string;
  name?: string;
  description?: string;
  destination?: string;
  receiverDetails: {
    address?: string;
    name?: any;
    phoneNumber?: string;
  };
  addedBy?: string;
  updatedAt?: string;
  createdAt?: string;
}
