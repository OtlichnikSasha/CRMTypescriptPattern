import { http } from './index';



export class api {
    static async get (url, args = {}) {
        let result = {
            status: false,
            data: [],
            error: '',
        };
        try {
            const res = await http.get(url, { params: { ...args }})
            console.log('res', res)
            if (res.status === 200) {
                result.status = true;
                result.data = res.data;
            }
        } catch (e) {
            console.log('error', e.response.data.message)
            result.error = e.response.data.message
        }
        return result;
    }

    static async post (url, data) {
        let result = {
            status: false,
            data: [],
            error: ''
        };
        try {
            const res = await http.post(url, data)
            console.log('res', res)
            if (res.status === 200) {
                result.status = true;
                result.data = res.data;
            }
        } catch (e) {
            console.log('e.response', e.response)
            result.error = e.response.data.message
        }
        return result
    }

    static async put (url, data = {}, args) {
        let result = {
            status: false,
            data: [],
            error: ''
        };
        try {
            const res = await http.put(url, data, { params: { ...args } });
            if (res.status === 200) {
                result.status = true;
                result.data = res.data;
            }
        } catch (e) {
            console.log('e.response', e.response)
            result.error = e.response.data.message
        }
        return result;
    }


    static async delete (url, args) {
        let result = {
            status: false,
            data: [],
            error: ''
        };
        try {
            const res = await http.delete(url, { params: { ...args } });
            if (res.status === 200) {
                result.status = true;
                result.data = res.data;
            }
        } catch (e) {
            console.log('e.response', e.response)
            result.error = e.response.data.message
        }
        return result;
    }

}
