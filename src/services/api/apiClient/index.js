import dummyJsonRequest from "./request";
import qs from 'qs';

export default {
    products: {
        get(id) {
            const path = `/products/${id}`;
            return dummyJsonRequest('GET', path);
        },
        update(id, payload) {
            const path = `/products/${id}`;
            return dummyJsonRequest('PUT', path, payload);
        },
        list(search, skip, limit, select) {
            const query = {
                q: search,
                limit: limit || process.env.REACT_APP_LIMIT_PRODUCT_PER_PAGE,
                skip: skip || 0,
                select: select || process.env.REACT_APP_PRODUCT_LIST_CELLS
            };
            const path = `/products/search?${qs.stringify(query)}`;
            return dummyJsonRequest('GET', path);
        }
    }
}
