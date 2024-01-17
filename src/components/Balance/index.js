import { Wrapper } from "./styles";

const Balance = ({ balance }) => {
    return (
        <Wrapper>
             Поточний баланс: {balance}
        </Wrapper>
    )
}

export default Balance;
