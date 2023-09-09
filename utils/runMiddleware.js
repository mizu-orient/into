import { handleWebpackExternalForEdgeRuntime } from "next/dist/build/webpack/plugins/middleware-plugin";

export default function runMiddleware(req, res, cors) { /* corsは関数 */
    return new Promise((resolve, reject) => { /* Promiseを返す */
        fn(req, res, (result) => { /* fnはcors */
            if (result instanceof Error) {
                return reject(result); /* エラーが発生したらreject */
            }
            return resolve(result); 
        });
    });
}