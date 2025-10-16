import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

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

export function getUniqueEmail() {
    return `faisal_${Date.now()}@example.com`;
}

export function readCSV<T>(fileName: string): T[] {
    const filePath = path.join(process.cwd(), 'data', fileName);

    if (!fs.existsSync(filePath)) {
        throw new Error(`❌ CSV file not found at: ${filePath}`);
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    return parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
    }) as T[];
}


export function readRegistrationCSV(fileName: string): RegistrationData[] {
    return readCSV<RegistrationData>(fileName);
}

export function readProductsCSV(fileName: string): ProductData[] {
    return readCSV<ProductData>(fileName);

}

