import Cors from 'cors' /* cors */
import runMiddleware from '../../../utils/runMiddleware';

const cors = Cors({
    methods: ['GET', 'HEAD'],
});

export default async function handler(req, res) { /* handlerはAPIのエンドポイント */
    /* この関数はあとから生成されるランミドルウェアを待つ */
    /* 引数は3つ(req, res, cors) */
    await runMiddleware(req, res, cors);
    if(req.method === 'GET') {
        const contactMediums = [ /* 連絡先の種類 */
            {
                medium: 'GitHub',
                username: 'inuo',
                link: "",
            },
            {
                medium: 'Zenn',
                username: 'inuo',
            },
            {
                medium: 'Email',
                username: 'tbd@tbd',
                link: "tbd@tbd",
            },
        ];
        res.json(contactMediums);
    } else {
        res.status(400).json({message: "Only FET request allowed!"}); /* 400番台はエラー */
    }
}