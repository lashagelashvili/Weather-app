export interface Weather {
    location: Location,
    current: Current,
}

export interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    localtime: number;
}

export interface Current {
    temp_c: number;
    temp_f: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    humidity: number;
    cloud: number;
}

export interface Condition {
    text: string;
    icon: string;
    code: number;
}