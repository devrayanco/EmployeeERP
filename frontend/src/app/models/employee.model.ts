export interface Endereco {
    rua: string;
    cep: string;
    bairro: string;
    cidade: string;
    estado: string;
  }
  
  export interface FirestoreTimestamp {
    _seconds: number;
    _nanoseconds: number;
  }
  
  export interface Employee {
    id?: string;
    ativo: boolean;
    fotoUrl: string;
    dataContratacao: string;
    cpf: string;
    endereco: Endereco;
    createdAt: FirestoreTimestamp;
    nome: string;
    email: string;
    updatedAt: FirestoreTimestamp;
  }
  