export type DataServicesIBGETypes = {
  count: number,
  page: number,
  totalPages: number,
  nextPage: number,
  previousPage: number,
  showingFrom: number,
  showingTo: number,
  items: []
};

export type ItemsTypes = {
  id: string,
  tipo: string,
  titulo: string,
  introducao: string,
  data_publicacao: string,
  produto_id: string,
  produtos: string,
  editorias: string,
  imagens: string,
  produtos_relacionados: string,
  destaque: boolean,
  link: string,
};

export type MockData = {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
  items: ItemsTypes[];
};
