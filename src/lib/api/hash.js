import { sha3_256 } from 'js-sha3';
import toBytes from 'utf8-bytes';

const salt = "34xuRPmCLnN23a1OP6hg";

export const createHash = (body) => {
    const saltBytes= toBytes(salt),
          bodyBytes = toBytes(body);

    bodyBytes.push(bodyBytes.length%255);
    bodyBytes.push(...saltBytes);

    return (sha3_256(bodyBytes));
};