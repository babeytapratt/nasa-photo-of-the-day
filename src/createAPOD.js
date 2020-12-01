import React from "react";
import MediaDisplay from "./mediaDisplay";
import ChangeDate from './changeDate'
import styled from 'styled-components'

const Holder = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
`

const Head = styled.div`
    background: ${pr=>pr.theme.primaryColor};
    display:flex;
    justify-content:space-around;
    align-items: center;
    width:100%;
    button{
        padding: ${pr => pr.theme.padding};
        font-size: 1rem;
        border:none;
        border-radius:3px;
        transition: .3s;
        &:hover{
            background-color:black;
            color:white;
            transition: .3s;
        }
    }
    h1{
        font-family:Arial, Helvetica, sans-serif
    }
`

const ImgCont = styled.div`
    width:80%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:${pr=>pr.theme.padding};
    img{
        width:100%;
        height:auto;
    }
`

const ImgText = styled.div`
    h4{
        text-align:left;
    }
    h2{
        text-align:left;
        font-size:2rem;
    }
    p{
        font-size: 1.2rem;
    }
`


const CreateAPOD = ({ data, setDate }) => {
    return(
        <Holder>
            <Head>
                <h1>Astronomy Photo of the Day: {data.date}</h1>
                <ChangeDate setDate={setDate} />
            </Head>
            <ImgCont>
                <MediaDisplay url={data.url} title={data.title} />
                <ImgText>
                    <h4>{!data.copyright ? 'Credit and Copyright: N/A' : `Credit and Copyright: ${data.copyright}`}</h4>
                    <h2>{data.title}</h2>
                    <p>{data.explanation}</p>
                </ImgText>
            </ImgCont>
        </Holder>
    )
}

export default CreateAPOD
