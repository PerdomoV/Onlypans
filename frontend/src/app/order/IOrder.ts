export interface IOrder{
    readonly mensaje?: string | null;
    readonly address: string | null;
    readonly price: string | null;
    readonly id?: string | null;
}