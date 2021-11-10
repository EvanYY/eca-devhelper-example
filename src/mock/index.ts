import { dsMock1 } from "./mock1";
import { dsMock2 } from "./mock2";
import { dsMock3 } from "./mock3";

export const orderMock = (n: 1 | 2 | 3, type: boolean) => {
  if (n === 1) return type ? JSON.stringify(dsMock1()) : dsMock1();
  if (n === 2) return type ? JSON.stringify(dsMock2()) : dsMock2();
  if (n === 3) return type ? JSON.stringify(dsMock3()) : dsMock3();
  return type ? JSON.stringify(dsMock3()) : dsMock3();
};
