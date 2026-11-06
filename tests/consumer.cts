import * as api from '@lp-labs/integer-equal-partitioner';
import { partitionInteger } from '@lp-labs/integer-equal-partitioner';
console.log(partitionInteger(10, 3));
// @ts-expect-error invalid argument must be rejected by declarations
api.partitionInteger('10', 3);
