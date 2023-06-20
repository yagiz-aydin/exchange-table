import styled from "styled-components";

export const ButtonList = styled.div`
    display: flex;
    align-items: center;
    margin: 24px;
    & > button {
        margin-right: 18px;
    }
`;

export const SelectedCurrencyText = styled.span`
    font-size: 24px;
    margin-right: 36px;
    font-weight: 600;
    text-transform: capitalize;
`