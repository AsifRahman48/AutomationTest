export interface RegistrationData {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
}
export interface ProductData {
    title: string;
    price: string;
}
export declare function getUniqueEmail(): string;
export declare function readCSV<T>(fileName: string): T[];
export declare function readRegistrationCSV(fileName: string): RegistrationData[];
export declare function readProductsCSV(fileName: string): ProductData[];
//# sourceMappingURL=utils.d.ts.map