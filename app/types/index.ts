export interface IRnaData {
  annotations: [
    {
      Gene: string;
      range: [number, number];
    }
  ];
  dataObj: {
    color: string[];
    x: number[];
    x0: number[];
    y: number[];
  };
}
