import styled, { keyframes } from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { shade, getLuminance } from 'polished';

const ContainerFade = keyframes`
from {
	opacity: 0;
	transform: translateY(50px);
}
to {
	opacity: 1;
	transform: translateY(0);
}
`

const animationBackgroundLoading = keyframes`
0% {
	filter: brightness(105%);
}
50% {
	filter: brightness(95%);
}
100% {
	filter: brightness(105%);
}
`

export const ContainerPurchase = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 5px 70px;
transition: height 2s, opacity 1s;
`

export const Title = styled.p`
font-family: 'Libre Franklin', 'Roboto', sans-serif;
font-weight: 500;
font-size: 18px;
border-radius: 50px;
line-height: 20px;
padding: 5px 25px;
position: relative;
top: 15px;
cursor: default;
transition: filter .2s;

&:hover {
	filter: brightness(70%);
}
`

export const TitleSkeleton = styled.div`
background-color: ${({theme}) => shade(0.5, theme.colors.secundaryBackground)};
border-radius: 5px;
width: 45%;
height: 30px;
padding: 5px 25px;
position: relative;
top: 15px;
cursor: default;
transition: filter 2s;
animation: ${animationBackgroundLoading} 5s infinite;

&:hover {
	filter: brightness(70%);
}
`

export const ImageSkeleton = styled.div`
background-color: ${({theme}) => shade(0.5, theme.colors.secundaryBackground)};
width: 128px;
height: 128px;
border-radius: 50%;
`

export const ButtonSkeleton = styled.div`
width: 100%;
height: 45px;
padding: 15px 0;
border-radius: 5px;
background-color: ${({theme}) => shade(0.5, theme.colors.secundaryBackground)};
`

export const DescriptionSkeleton = styled.div`
background-color: ${({theme}) => shade(0.5, theme.colors.secundaryBackground)};
width: ${(props) => (props.width) ? props.width : 92}px;
height: 25px;
margin: 10px 0 0 0;

`

export const Container = styled.div`
background: ${({theme}) => theme.colors.background};
max-width: 100%;
min-width: 100%;
border-radius: 10px;
transition: margin .2s, height .2s;
padding-bottom: 10px;
border-bottom: 1px solid ${({theme}) => theme.colors.primary};
border-left: 1px solid ${({theme}) => theme.colors.primary};
border-right: 1px solid ${({theme}) => theme.colors.primary};
--color-var: #${(props) => props.color};
border-top: 4px solid var(--color-var);
animation: ${ContainerFade} 1s linear;
cursor: ${(props) => (props.loading) ? 'pointer' : 'default'};

&:hover {
	${props => props.loading ? `margin: -20px 0 0 0` : ''};
}

${Title} {
	background: var(--color-var);
	color: ${(props) => (getLuminance(`#${props.color}`) < 0.4)
		? props.theme.colors.light
		: props.theme.colors.dark} !important;
}
`;

export const Image = styled.img`
margin: -5px 0 5px 0;
border-radius: 15px;
max-width: 128px;
max-height: 128px;
transition: transform .2s;
cursor: none;

&:hover {
	transform: scale(1.25) !important;
}
`

export const ContainerImage = styled.div`
display: flex;
flex-direction: column-reverse;
width: 100%;
background: ${({theme}) => theme.colors.secundaryBackground};
justify-content: center;
align-items: center;
padding: 10px 0 0 0;
border-bottom: 1px solid ${({theme}) => theme.colors.primary};
border-top-left-radius: 10px;
border-top-right-radius: 10px;

&:hover ${Image} {
	transform: scale(1.1);
}
`

export const NewInfo = styled.p`
color: ${({theme}) => theme.colors.background};
align-self: flex-end;
background: ${({theme}) => theme.colors.primary};
padding: 6px 6px 6px 10px;
border-bottom-left-radius: 10px;
font-family: 'Libre Franklin', 'Roboto', sans-serif;
font-size: 14px;
font-weight: 700;
border-bottom: 4px solid ${({theme}) => shade(0.4, theme.colors.primary)};
transition: filter .2s, padding-right .2s;
cursor: pointer;

&:hover {
	padding-right: 20px;
	filter: brightness(70%);
}
`

export const DescriptionList = styled.ul`
padding: 25px 25px 10px 25px;
font-family: 'Libre Franklin', 'Roboto', sans-serif;
font-weight: 500;
font-size: 16px;
color: ${({theme}) => theme.colors.text};
list-style-position: inside;
line-height: 22px;
`

export const DescriptionItem = styled.li`
padding: 3px;
text-shadow: 0 0 1px ${({theme}) => theme.colors.text};
`

export const PriceTitle = styled.p`
font-family: 'Libre Franklin', 'Roboto', sans-serif;
font-weight: 500;
font-size: 20px;
color: ${({theme}) => theme.colors.text};
padding: 5px;
align-self: flex-end;
`

// #2cb13h
export const PurchaseButton = styled.button`
background: #4ed359;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
width: 100%;
padding: 10px 0;
border: 0;
font-family: 'Libre Franklin', 'Roboto', sans-serif;
font-weight: 500;
font-size: 16px;
color: ${({theme}) => theme.colors.background};
cursor: pointer;
transition: filter .2s;
`

export const BottomBorder = styled.div`
width: 100%;

&:hover ${PurchaseButton},
&:hover:after  {
	filter: brightness(70%);
}
&:active ${PurchaseButton},
&:active:hover {
	filter: brightness(105%);
}
&:active ${PurchaseButton} {
	position: relative;
	margin-top: 4px;
}
&:active:after {
	height: 0;
}

&:after {
	transition: filter .2s;
	content: '';
	display: block;
	height: 4px;
	background: #2cb137;
	width: 100%;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
}
`

