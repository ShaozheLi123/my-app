

export const SwapButton = (propt: {change: (text: string) => void }): JSX.Element=> {
    return <button onClick = {() => propt.change("New prompt selected")}>Swap</button>
}