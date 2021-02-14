import { CcyPairType,  ProductType, StyleType, DirectionType, PayCcyType,
  PremiumCcyType, PremiumType, StrategyType} from '@api/models/types/';

export interface Operation {
  customer?: string;
  ccyPair?: string;
  type?: string;
  style?: string;
  direction?: string;
  strategy?: string;
  tradeDate?: string;
  amount?: bigint;
  rate?: number;
  deliveryDate?: string;
  expiryDate?: string;
  payCcy?: string;
  premium?: string;
  premiumCcy?: string;
  premiumType?: string;
  premiumDate?: number;
  legalEntity?: string;
  trader?: string;
  valueDate?: number;
  excerciseStartDate?: number;
}

export interface SavedOperation {
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
