import Input from "./Input";
import Output from "./Output";

export default function Command({ command, output, onCommand }){ /* onCommandを追加 */
    return (
        <div>
            <Input command={command} onSubmit={(command) =>onSubmit(command)} />
            { output && <Output output={output} /> }
        </div> /* outputがなければ何も表示しない */
    )
}
