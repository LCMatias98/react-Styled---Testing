import styled from "styled-components";

// El row recibe props
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    ${(props) =>props.justify && `justify-content :${props.justify}`};
    ${(props) =>props.mt && `margin-top :${props.mt}`};
    ${(props) =>props.mb && `margin-bottom :${props.mb}`};
`;