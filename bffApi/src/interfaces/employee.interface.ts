export interface Employee {
    id?: string;s
    active: boolean;
    photo: string;
    firstName: string;
    lastName: string;
    email: string;
    hireDate: Date;
    cpf: string;
    address: {
      street: string;
      zipCode: string;
      neighborhood: string;
      city: string;
      state: string;
    };
  }