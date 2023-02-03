import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Work Sans', sans-serif;
    }
    html{
        font-size:92.5%;
        overflow-x:hidden;
    }
    body{
        overflow-x:hidden;
    }
    h1{
        color:${({theme})=>theme.colors.heading};
        font-size:2.5rem;
        font-weight:900;  
    }
    h2{
        color:${({theme})=>theme.colors.heading};
        font-size:4.4rem;
        font-weight:300;
        white-space:normal;
        text-align:center;  
    }
    h3{
        font-size:1.4rem;
        font-weight:400;
    }
    p{
        color:${({theme})=>theme.colors.text};
        opacity:0.7;
        font-size:1.0rem;
        line-height:1.5;
        margin-top:1rem;
        font-weight:400;
    }
    ::-webkit-scrollbar{
        width:1.3rem;
    }
    ::-webkit-scrollbar-track{
        background-color:rgb(24,24,29);
    }
    ::-webkit-scrollbar-thumb{
        background-color:#FFF;
        border:5px solid transparent;
        border-radius:9px;
        background-clip:content-box;
    }
    a{
        text-decoration:non;
    }
    li{
        list-style:none;
    }
    .grid{
        display:grid;
        gap:9rem;
    }
    .grid-two-column{
        grid-template-columns:repeat(2,1fr);
    }
    // .grid-three-column{
    //     grid-template-columns:repeat(3,1fr);
    // }
    .grid-four-coumn{
        grid-template-columns:1fr 1.2fr .5fr .8fr;
    }
    input,textarea{
        max-width:50rem;
        color:${({theme})=>theme.colors.black};
        padding:1.6rem 2.4rem;
        border:1px solid ${({theme})=>theme.colors.border};
        text-transform:uppercase;
        border-radius:0.8rem;
        box-shadow:${({theme})=>theme.colors.shadowSupport};
    }
    .input[type="submit"]{
        max-width:16rem;
        margin-top:2rem;
        background-color:${({theme})=>theme.colors.btn};
        color:${({theme})=>theme.colors.white};
        padding:1.4rem 2.2rem;
        border-style:solid;
        border-width:1rem;
        text-transform:uppercase;
        font-size:1.8rem;
        cursor:pointer;
    }
`;