export default function Output({ output }){
    return output ? <p dangerouslySetInnerHTML={{__html: output}}></p> : <></>; /* outputがあればpタグで出力、なければ空のタグを返す */
}