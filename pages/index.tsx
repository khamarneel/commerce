import { Layout } from '@components/common'
import { Grid, Marquee, Hero } from '@components/ui'
import { ProductCard } from '@components/product'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { getConfig } from '@framework/api'
import getAllProducts from '@framework/product/get-all-products'
import getSiteInfo from '@framework/common/get-site-info'
import getAllPages from '@framework/common/get-all-pages'
import Link from 'next/link'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })

  const { products } = await getAllProducts({
    variables: { first: 12 },
    config,
    preview,
  })

  const { categories, brands } = await getSiteInfo({ config, preview })
  const { pages } = await getAllPages({ config, preview })

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 14400,
  }
}

export default function Home({
  products,
  brands,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div>
        <img
          style={{ width: '100%', height: '75vh', objectFit: 'cover' }}
          src="/banner2.jpg"
        />
      </div>
      {/* <Grid>
        {products.slice(0, 3).map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid> */}
      <div style={{ height: '300px', width: '100%', textAlign: 'center' }}>
        <h4
          style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '60px' }}
          className="m-6"
        >
          CATEGORIES WE OFFER
        </h4>
        {/* <div className="container"> */}
        <div
          style={{
            textAlign: 'center',
            width: '100%',
            border: '0px solid red',
          }}
        >
          <span
            style={{
              border: '0px solid black',
              display: 'inline-block',
              padding: '10px',
              margin: '10px',
            }}
          >
            <img
              src="/jewellery/Bracelets-bg.webp"
              width="170px"
              height="170px"
            />
            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
              <Link href="/search/bracelets">Bracelets</Link>
            </span>
          </span>
          <span
            style={{
              border: '0px solid black',
              display: 'inline-block',
              padding: '10px',
              margin: '10px',
            }}
          >
            <img src="/jewellery/chain-bg.webp" width="170px" height="170px" />
            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
              <Link href="/search/chains">Chains</Link>
            </span>
          </span>
          <span
            style={{
              border: '0px solid black',
              display: 'inline-block',
              padding: '10px',
              margin: '10px',
            }}
          >
            <img
              src="/jewellery/Earring-bg.webp"
              width="170px"
              height="170px"
            />
            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
              <Link href="/search/earrings">Earrings</Link>
            </span>
          </span>
          <span
            style={{
              border: '0px solid black',
              display: 'inline-block',
              padding: '10px',
              margin: '10px',
            }}
          >
            <img
              src="/jewellery/fingerring-bg.webp"
              width="170px"
              height="170px"
            />
            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
              <Link href="/search/rings">Rings</Link>
            </span>
          </span>
          <span
            style={{
              border: '0px solid black',
              display: 'inline-block',
              padding: '10px',
              margin: '10px',
            }}
          >
            <img
              src="/jewellery/Pendatnset-bg.webp"
              width="170px"
              height="170px"
            />
            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
              <Link href="/search/pendants">Pendants</Link>
            </span>
          </span>
        </div>
        {/* </div> */}
      </div>

      <h4
        style={{
          fontWeight: 'bold',
          fontSize: '20px',
          marginTop: '60px',
          textAlign: 'center',
        }}
      >
        Exclusively for you!
      </h4>
      <Marquee>
        {products.slice(0, 3).map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="slim"
            imgProps={{
              width: 320,
              height: 320,
            }}
          />
        ))}
      </Marquee>

      {/* <Marquee variant="secondary">
        {products.slice(0, 3).map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="slim"
            imgProps={{
              width: 320,
              height: 320,
            }}
          />
        ))}
      </Marquee>
      <Hero
        headline="Release Details: The Yeezy BOOST 350 V2 ‘Natural'"
        description="
        The Yeezy BOOST 350 V2 lineup continues to grow. We recently had the
        ‘Carbon’ iteration, and now release details have been locked in for
        this ‘Natural’ joint. Revealed by Yeezy Mafia earlier this year, the
        shoe was originally called ‘Abez’, which translated to ‘Tin’ in
        Hebrew. It’s now undergone a name change, and will be referred to as
        ‘Natural’."
      /> */}
      {/* <Grid layout="B">
        {products.slice(0, 3).map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid> */}

      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}
    </>
  )
}

Home.Layout = Layout
