import  styled, { css }  from "styled-components"; 
import colorPalette from "./colorPalette";

/* TYPES */
type PropsAddPhoto = { addPhoto: boolean };
type PropsActiveButtonPublic = { activeButtonPublic: boolean };
type PropTypeBg = { background: string };

/* STYLES */
const Navbar = styled.header`
width: 100%;
height: 93px;
padding: 24px 0;
background-color: ${colorPalette.black100};

   img{
      display: block;
      margin: 0 auto;
   } 
`;

const Main = styled.main`
   margin: 0 auto;
   padding: 0 20px;
   max-width: 556px;

   p{
      font-size: 14px;
      color: ${colorPalette.grey300};
      font-weight: 500;
      margin-bottom: 8px;
   }

   h2{
      color: ${colorPalette.grey400};
   }
`;
 
const NewPulication = styled.div`
   width: 100%;
   height: 353px;
   margin: 40px 0;
   padding: 24px;
   border-radius: 3px;
   border: solid 1px ${colorPalette.black400};
   background-color: ${colorPalette.black200};

      input[type="text"]{
         width: 100%;
         height: 40px;
         margin: 16px 0 8px;
         padding: 12px 16px;
         border-radius: 8px;
         background-color: ${colorPalette.black500};
         color: ${colorPalette.white};
         font-size: 14px;
      }
      input[type="text"]::placeholder{
         color: ${colorPalette.grey400};
      }

      textarea{
         font-size: 14px;
         width: 100%;
         height: 80px;
         margin: 0 0 32px;
         padding: 12px 16px;
         border-radius: 8px;
         background-color: ${colorPalette.black500};
         resize: none;
         color: ${colorPalette.white}; 
      }
      textarea::placeholder{
         color: ${colorPalette.grey400};
      }

      span{
         float: right;
         margin-right: auto;
         display: block;
      }
`;

/* CONTAINERS */
 
const ContainerFeed = styled.section`
   width: 100%;
   height: 100%;
   margin: 8px 0;
   padding: 56px 24px 32px;
   border-radius: 3px;
   border: solid 1px ${colorPalette.black400};
   background-color: ${colorPalette.black200};
   display: flex;
   justify-content: flex-start;
   position: relative;
   margin-bottom: 16px;
 
   @media screen and (max-width: 768px) {
      flex-direction: column; 
   }
`
 
const ContainerImage = styled.div.attrs((props: PropTypeBg) => ({
   background: props.background,
 }))<PropTypeBg>`
   background: #000 url(${(props) => props.background}) no-repeat;
   background-position: center;
   background-size: cover;
   width: 88px;
   height: 88px;
   border-radius: 36px;
   overflow: hidden;
   margin-right: 32px;

   @media screen and (max-width: 768px) {
      margin-bottom: 20px;
   }
`;

const ContainerublishedImage = styled.div`
   position: relative;
   display: flex; 
   align-items: center;
   justify-content: center;
   margin: 0 auto;
   width: 128px;
`;

const ContainerInfoFeed = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 348px;
   overflow: hidden;
   word-wrap: break-word;
   justify-content: space-between; 
 
   > p{
      width: 100%;
      margin-bottom: 24px;
      font-size: 16px;
      font-weight: normal;
      margin-right: auto;
      color: ${colorPalette.grey400};
   }

   span {
      p{
         font-size: 12px;
         font-weight: 500;
         color: ${colorPalette.grey200};
      }
      h4{
         font-size: 14px;
         font-weight: normal;
         color: ${colorPalette.grey300};
      }
   }

   @media screen and (max-width: 768px) {
      max-width: 100%; 
   }
`;

/* IMAGE */

const PublishedImage = styled.img<PropsAddPhoto>`
   cursor: pointer;
   width: 88px;
   height: 88px;
   padding: 32px;
   border-radius: 36px;
   border: solid 1px ${colorPalette.grey100};

   ${props => props.addPhoto === true && css`
    border: none;
    object-fit: cover; 
    padding: 0;
    position: relative; `}
`

/* BUTTONS */

const ButtonDeleted = styled.button` 
      position: absolute;
      top: 12px;
      right: 12px; 
      width: 20px;
      height: 20px;
      background: url('/img/delete.svg') no-repeat; 
      cursor: pointer;
`;

const ButtonPublic = styled.button<PropsActiveButtonPublic>`
   width: 98px;
   height: 41px; 
   padding: 12px 24px;
   border-radius: 8px;
   background-color: ${colorPalette.grey200};
   color: ${colorPalette.black200};
   font-size: 14px;
   margin-left: 24px;
   cursor: not-allowed;
   ${props => props.activeButtonPublic === true && css`
   background-color: ${colorPalette.green};
   color: ${colorPalette.white};
   cursor: pointer;`}
`;

const ButtonDiscard = styled.button` 
   color: ${colorPalette.grey200}; 
   font-size: 14px;
   text-decoration: underline;
   cursor: pointer;
`

const ButtonDeletedImage = styled.button`
   position: absolute;
   width: 24px;
   height: 24px;
   background: url('/img/trash.svg') no-repeat; 
   right: -16px;
   cursor: pointer;
`

export {Main, Navbar, NewPulication, ButtonPublic, ButtonDiscard, ContainerFeed, ContainerImage, ContainerInfoFeed, ButtonDeleted, PublishedImage, ContainerublishedImage, ButtonDeletedImage};