import { PrimaryStyled } from "./styled";
import { IPrimary } from "./types";

export const Primary = ({ disabled, onClick, text }: IPrimary) => (
  <PrimaryStyled onClick={() => onClick()} disabled={disabled}>
    {text}
  </PrimaryStyled>
);

const Button = { Primary };

export default Button;
