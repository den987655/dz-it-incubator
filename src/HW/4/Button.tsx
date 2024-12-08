type ButtonPropsType = {
    callBack: () => void,
    name: string,
    onClick?: () => void
};

export const Button = (props: ButtonPropsType) => {
    const callBackHandler = () => {
        props.callBack()
    };

    return (
        <button id={'hw04-button'} onClick={callBackHandler}>
            {props.name}
        </button>
    );
};
