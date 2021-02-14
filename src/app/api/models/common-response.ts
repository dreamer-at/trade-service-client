import {CcyPairType, DirectionType, PayCcyType, PremiumCcyType, PremiumType, ProductType, StrategyType, StyleType} from '@api/models/types';

export interface CommonResponse<T> {
  id?: number;
  customer: string;
  ccyPair: CcyPairType;
  type: ProductType;
  style: StyleType;
  direction: DirectionType;
  strategy: StrategyType;
  tradeDate: string;
  amount: bigint;
  rate: number;
  deliveryDate: string;
  expiryDate: string;
  payCcy: PayCcyType;
  premium: string;
  premiumCcy: PremiumCcyType;
  premiumType: PremiumType;
  premiumDate: number;
  legalEntity: string;
  trader: string;
  valueDate: number;
  excerciseStartDate: number;
}
