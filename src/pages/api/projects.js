import Cors from 'cors';
import runMiddleware from '../../../utils/runMiddleware';

const cors = Cors({
    methods: ['GET', 'HEAD'], /* GETとHEADのみ許可 */
});

export default async function handler(req, res) { /* handlerはAPIのエンドポイント */
    await runMiddleware(req, res, cors); /* corsを実行 */

    if(req.method === 'GET') {
        const projects = [
            {
                name: 'newTomodachi',
                description:"新しい友達を作るためのSNS",
                stack: ['React', 'Next.js', 'TypeScript', 'Firebase'],
                link: 'https://www.github.com/inuo/newTomodachi',
            },
        ];
        return res.json(projects);
    } else {
        return res.status(400).json({message: "Only GET request allowed!"});
    }
}