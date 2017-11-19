// Currency const map
export const CurrencyMap = {
    USD: 'U$S',
    UYU: '$',
    ARS: '$'
};

// Urls
const base_url = `${window.location.protocol}//${window.location.host}`;

export const URLS = {
    API: {
        search: `${base_url}/api/items?q=`,
        details: `${base_url}/api/items/`
    },
    CLIENT: {
        search: '/items?search='
    }
};