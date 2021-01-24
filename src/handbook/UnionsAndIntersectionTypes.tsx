/* Union types */

/*
* A union type describes a value that can be one of
* several types. We use the vertical bar (|)
* to separate each type, so number | string |
* boolean is the type of a value that can be
* a number, a string, or a boolean.
* */

/* Unions with Common Fields */
// If we have a value that is a union type,
// e can only access members that are common to all types in the union.
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();

// Only available in one of the two possible types
pet.swim();

/* Discriminating Unions, Union Exhaustiveness checking */
type NetworkLoadingState = {
    state: "loading";
};

type NetworkFailedState = {
    state: "failed";
    code: number;
};

type NetworkSuccessState = {
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string;
    };
};

// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState;

/* Intersection Types */
interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[];
}

interface ArtistsData {
    artists: { name: string }[];
}

// These interfaces are composed to have
// consistent error handling, and their own data.

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

let artworksResponse: ArtworksResponse;
let artistsResponse: ArtistsResponse;
