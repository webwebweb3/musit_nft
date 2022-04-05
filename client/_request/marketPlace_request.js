import {
  MARKETPLACE_GETOWNER_REQUEST,
  MARKETPLACE_PURCHASE_REQUEST,
} from './types';

export const marketPlacePurchaseAction = data => ({
  type: MARKETPLACE_PURCHASE_REQUEST,
  data,
});
export const marketPlaceGetOwnerAction = data => ({
  type: MARKETPLACE_GETOWNER_REQUEST,
  data,
});
