export const EMAIL_PATTERN: RegExp = new RegExp(
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);

export const CARD_EXPIRY_PATTERN: RegExp = new RegExp(
  /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/
);
