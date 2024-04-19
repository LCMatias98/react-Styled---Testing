import styled from "styled-components";

export const Col = styled.div`
    -webkit-box-flex: 0;
    flex: 0;
    ${(props) => `ws-flex: 0 0 ${props.size}%`}
    ${(props) => `flex: 0 0 ${props.size}%`}
`;