import InnerSearch from '@/components/inner-search';
import Layout from '@/components/layout';
import ProductsGrid from '@/components/products-grid';
import { useState } from 'react';

export default function Products({ cachedProducts }: any) {
    const [searchedProducts, setSearchedProducts] = useState([]);
     
    const handleSearchAction = (async (search: string, categories: Array<any>) => {
        const url = new URL("http://localhost:3000/products");    
        if (search != "") {
            url.searchParams.append('name', search);
        }

        if (categories.length != 0) {
            categories.map(c => {
                if (c.state) {
                    url.searchParams.append('categories[]', c.id)
                }
            });
            
        }
            
        const res = await fetch(url, { method: 'GET' });
        const products = await res.json();
        
        setSearchedProducts(products);
    });

    return (<>
        <Layout>
            <main>
                <div className='grid grid-cols-1 gap-2'>
                    <div className='p-20 mb-5 container mx-auto bg-white text-black bg-red-200'>
                        <InnerSearch handleSearchAction={handleSearchAction}></InnerSearch>
                    </div>
                    <div className='pl-20 pr-20 pt-20 container mx-auto bg-white text-black max-h-screen overflow-y-auto'>
                        <ProductsGrid products={[cachedProducts, searchedProducts]}></ProductsGrid>
                    </div>
                </div>
            </main>
        </Layout>
    </>);
}

export async function getStaticProps() {
    let cachedProducts: any = [];

    const res = await fetch(`http://localhost:3000/products`, { method: 'GET' });
    cachedProducts = await res.json();
    
    return {
        props: {
            cachedProducts,
        },
    }
}
