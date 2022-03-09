import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import _v from '@s/css/_variable';

const GlobalStyle = createGlobalStyle`
    body{
        font-size:14px;
        color: #57585a;
        background-color: #f2f2f2;
        .main{
            padding:0;
        }
    }
    .title-tertiary {
        color: ${_v.primary};
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid ${_v.quinary};
    }
    .title-primary {
        background-color: #fff;
        padding: 1rem;
        color: ${_v.primary};
    }
    .no-pad{
        padding:0;
    }
    .no-pad-v{
        padding-left:0;
        padding-right:0;
    }
    .no-pad-r{
        padding-top:0;
        padding-bot:0;
    }
    .no-margin{
        margin:0;
    }
    .no-margin-v{
        margin-left:0;
        margin-right:0;
    }
    .no-margin-r{
        margin-top:0;
        margin-bot:0;
    }
    .default-container{
        margin: 2rem 0;
    }
    //loader
    .loader-container{
        padding:10rem;
        text-align:center;
    }

    //
    .form-control{
        border-radius:0;
    }

    .btn{
        border-radius:0;
    }
    .css-yk16xz-control{
        border-radius:0 !important;
    }
    .css-1pahdxg-control{
        border-radius:0 !important;
        border-color: #80bdff !important;
        outline: 0 !important;
        box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%) !important;
    }
    
    }
    .css-26l3qy-menu{
        border-radius:0 !important;

    }
`;

export default GlobalStyle;
