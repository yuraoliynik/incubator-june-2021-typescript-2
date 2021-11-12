interface IGeo {
    ltt: string;
    lng: string;
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;

}

interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
}
