

export const SwapButton = ({change}: {change: (text: string) => void }): JSX.Element=> {
    return <button onClick = {() => change("New prompt selected")}>Swap</button>
}