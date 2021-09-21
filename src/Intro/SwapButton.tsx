import { useState } from "react";


export const SwapButton = (props: {change: (text: string) => void }): JSX.Element=> {
    const [active, setActive] = useState<Boolean>(true);

    const swapper = () => {
        if (active){
            props.change("Old prompts!");
        }
        else{
            props.change("New prompts!");
        }
        setActive(!active);
    }


    return <button onClick = {() => swapper()}>Swap</button>
}