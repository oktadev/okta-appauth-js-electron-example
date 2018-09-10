const crypto = require('crypto');

export class AuthService {

  static getPKCEChallengePair() {
    let verifier = AuthService.base64URLEncode(crypto.randomBytes(32));
    let challenge = AuthService.base64URLEncode(AuthService.sha256(verifier));
    return {verifier, challenge};
  }

  static base64URLEncode(str: Buffer) {
    return str.toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
  }

  static sha256(buffer: string) : Buffer {
    return crypto.createHash('sha256').update(buffer).digest();
  }
}