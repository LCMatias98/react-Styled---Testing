import styled from "styled-components";
import PropTypes from "prop-types"
import { justifyValues,numberType,atomicPx,baseWidth } from "../constants/layout";
// El row recibe props
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    ${(props) =>props.justify && `justify-content :${props.justify}`};
    ${(props) =>props.mb && `margin-bottom :${props.mb}`};
`;


Row.propTypes = {
    justify: PropTypes.oneOf(justifyValues),
    mb: numberType,
};