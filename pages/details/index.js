import Head from 'next/head'
import {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import ProgressiveImage from 'react-progressive-graceful-image'

import Footer from '../../components/Footer/'
import Menu from '../../components/Menu/'
import RenderMarkdown from '../../components/RenderMarkdown/'
import ListingPages from '../../components/ListingPages/'

import GlobalStyle from '../../styles/GlobalStyle'
import products from '../../utils/products'
import getCategories from '../../utils/getCategories'

import {
	Container,
	ProductPurchase,
	ProductInformations,
	ImageLogo,
	DescriptionList,
	ContainerButton,
	PurchaseButton,
	Price,
	ProductTitle,
} from '../../styles/pages/details'

function DetailsProduct({readme, categories, product, ...params}) {
	const {colors} = useContext(ThemeContext)
	
	return (
		<div>
			<Head>
				<title>SMCodes - {product.title}</title>
				<meta property="og:title" content="SMCodes - Plugins" key="title" />
				<meta name="twitter:title" content="SMCodes - Plugins" />
				<meta name="description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
				<meta property="og:description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
				<meta name="description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
				<meta name="Description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
				<meta name="twitter:description" content="Portfólio de SMCodes, um programador web e mobile, venha comprar e baixar plugins grátis de Minecraft ou até mesmo encomendar softwares únicos." />
				<meta name="theme-color" content={colors.background} />
				<meta name="apple-mobile-web-app-status-bar-style" content={colors.background} />
				<meta name="msapplication-navbutton-color" content={colors.background} />
			</Head>

			<div style={{width: "100%"}}>
				<Menu page="/details" categories={categories} background={colors.background} />
			</div>

			<Container>
				<ProductPurchase>
					<ProductTitle>{product.title}</ProductTitle>
					<ProgressiveImage
						src={product.image.large}
						placeholder={product.image.small}
					>
						{(src, loading) => (
							<ImageLogo
								loading={loading.toString()}
								src={src}
								alt="Product logo image"
							/>
						)}
					</ProgressiveImage>
					<DescriptionList>
						{product.descriptionList.map((description, index) => (
							<RenderMarkdown key={index} text={description} />
						))}
					</DescriptionList>
					<ContainerButton>
						<Price>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</Price>
						<PurchaseButton>Comprar</PurchaseButton>
					</ContainerButton>
				</ProductPurchase>
				<ProductInformations>
					<RenderMarkdown text={readme} />
				</ProductInformations>
			</Container>

			<ListingPages product={product} {...params} />

			<Footer />

			<GlobalStyle />

		</div>
	)
}

export async function getStaticProps({params}) {
	const product = products[0].items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)[0]
	
	const res = await fetch(product.text)
	const readme = await res.text()
	const { categories } = await getCategories()

  return {
		props: {
			readme,
			categories,
			product: product,
			quantity: products[0].items.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1).length,
			id: 0
		}
	}
}

export default DetailsProduct;