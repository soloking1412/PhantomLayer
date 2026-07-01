export declare const EventType: {
    readonly Fund: "fund";
    readonly OutsideFund: "outsideFund";
    readonly Rollover: "rollover";
    readonly Withdraw: "withdraw";
    readonly Ragequit: "ragequit";
    readonly TransferIn: "transferIn";
    readonly TransferOut: "transferOut";
    readonly ExternalTransferIn: "externalTransferIn";
    readonly BalanceDeclared: "balanceDeclared";
    readonly TransferDeclared: "transferDeclared";
};
export type EventType = (typeof EventType)[keyof typeof EventType];
