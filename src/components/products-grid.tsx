import Image from 'next/image';

export default function ProductsGrid({ products }: any) {
    const [cachedProducts, searchedProducts] = products;

    return (<div>
        <div className='grid grid-cols-3 gap-10'>
            {searchedProducts?.length == 0 && cachedProducts?.map((product: any) => (
                <div key={product.id}>
                    <div className="relative flex flex-col rounded-[20px] max-w-[300px] bg-white !p-4">
                        <div className="h-full w-full">
                            <div className="relative w-full">
                                <Image width="293" height="205" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png" className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
                                <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                                    <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                                    </div>
                                </button>
                            </div>
                            <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                                <div className="mb-2">
                                    <p className="text-lg font-bold text-navy-700"> { product.commercialName } </p>
                                    <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2"> contém {product.quantity?.value} {product.quantity?.type}(s) </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between md:items-center">
                                <div className="flex">
                                    <p className="!mb-0 text-sm font-bold text-brand-500"> R$ { product.amount } </p>
                                </div>
                                <button className="linear rounded-[20px] bg-brand-900 px-4 py-2 font-medium text-black transition duration-500 hover:bg-black hover:text-white">Adicionar a Cesta </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {searchedProducts?.map((product: any) => (
                <div key={product.id}>
                    <div className="relative flex flex-col rounded-[20px] max-w-[300px] bg-white !p-4">
                        <div className="h-full w-full">
                            <div className="relative w-full">
                                <Image width="293" height="205" src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/Nft3.3b3e6a4b3ada7618de6c.png" className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
                                <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                                    <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                                    </div>
                                </button>
                            </div>
                            <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                                <div className="mb-2">
                                    <p className="text-lg font-bold text-navy-700"> { product.commercialName } </p>
                                    <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2"> contém {product.quantity?.value} {product.quantity?.type}(s) </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between md:items-center">
                                <div className="flex">
                                    <p className="!mb-0 text-sm font-bold text-brand-500"> R$ { product.amount } </p>
                                </div>
                                <button className="linear rounded-[20px] bg-brand-900 px-4 py-2 font-medium text-black transition duration-500 hover:bg-black hover:text-white">Adicionar a Cesta </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>);
}
