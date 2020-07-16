import styled from 'styled-components'

export const ContainerOwner = styled.div`
	width: 100%;
	margin-top: 115px;
	padding: 30px 0 30px 165px;
	background: #CECECE;
	display: grid;
	grid-template: 1fr / 2fr 3fr;
	font-family: 'Libre Franklin', 'Roboto', sans-serif;
	color: #333333;
`

export const ContainerOwnerInfos = styled.div`
	display: grid;
`

export const TitleContainer = styled.h1`
	font-weight: bold;
	font-size: 24px;
`

export const ImageContainer = styled.img`
	margin-top: -45px;
	width: 230px;
	border-radius: 20px;
	cursor: pointer;
	transition: filter 1s;

	&:hover {
		filter: brightness(65%);
	}
`

export const ContainerInfos = styled.nav`
	margin-top: 75px;
	display: flex;
	flex-direction: column;
`

export const InfosItem = styled.div`
	display: grid;
	grid-template: 50px 1fr / 1fr 4fr;
`

export const InfosKey = styled.h2`
	font-size: 20px;
	font-weight: bold;
`

export const InfosValue = styled.p`
	font-size: 18px;
`
