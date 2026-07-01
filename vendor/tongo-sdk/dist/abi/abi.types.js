import { createTypedCodec } from "@fatsolutions/cairo-abi-codec";
import { tongoAbi } from "./tongo.abi.js";
import { vaultAbi } from "./vault.abi.js";
import { auxAbi } from "./aux.abi.js";
export const tongoCodec = createTypedCodec(tongoAbi);
export const vaultCodec = createTypedCodec(vaultAbi);
export const auxCodec = createTypedCodec(auxAbi);
//# sourceMappingURL=abi.types.js.map