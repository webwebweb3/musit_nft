import {
  MARKETPLACE_CANCEl_REQUEST,
  MARKETPLACE_GETOWNER_REQUEST,
  MARKETPLACE_GET_EVENT_REQUEST,
  MARKETPLACE_PURCHASE_REQUEST,
} from '$reduxsaga/request/types';

export const marketPlacePurchaseAction = data => ({
  type: MARKETPLACE_PURCHASE_REQUEST,
  data,
});
export const marketPlaceGetOwnerAction = data => ({
  type: MARKETPLACE_GETOWNER_REQUEST,
  data,
});
export const marketPlaceCancelAction = data => ({
  type: MARKETPLACE_CANCEl_REQUEST,
  data,
});
export const marketPlaceGetEventAction = data => ({
  type: MARKETPLACE_GET_EVENT_REQUEST,
  data,
});
