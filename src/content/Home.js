import styled from "styled-components";
import {z} from "../style/z-index";
import { More } from "../components/More";
import React from "react";
import Me from "../3d/Me";

const Main = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: ${z.wayBack};
`;

export const Home = React.forwardRef(({goto}, ref) => {
    return <Main
        ref={ref}
    >
        <Me/>
        <More onClick={()=>{
            goto.current.scrollIntoView();
        }}/>
    </Main>
})