export interface PropTextField {
  rows: number;
  cols: number;
  name: string;
  onChange: (value: any) => void;
  value: string | undefined;
}
