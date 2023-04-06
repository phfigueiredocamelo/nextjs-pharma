import { useState } from "react";

export default function InnerSearch({ handleSearchAction }: any) {
        
    const [search, setSearch] = useState('');

    const [isAllCategoriesSelected, setIsAllCategoriesSelected] = useState(true);
    
    const [categories, setCategories] = useState([
        { id: "GENERICO", name: "Genéricos",  state: true },
        { id: "MEDICAMENTO", name: "Medicamentos",  state: true },
        { id: "DERMOCOSMETICO", name: "Dermocosméticos",  state: true },
        { id: "BELEZA", name: "Beleza",  state: true },
        { id: "HEALTH", name: "Saúde",  state: true },
        { id: "VEG", name: "Produtos Veganos",  state: true },
    ])

    const handleSearchInputChange = (event: any) => {
        setSearch(event.target.value);
    }

    const handleCategoriesChange = (event: any) => {

        if (event.target.id == "all") {
            setIsAllCategoriesSelected(!isAllCategoriesSelected);
            
            setCategories(categories.map(c => {
                c.state = !isAllCategoriesSelected;
                return c;
            }));

            
            return;
        }

        setCategories(categories.map((category) => {  
            if (event.target.id == category.id) {
                category.state = !category.state;
            }
            return category;
        }));
    }

    return (
      <> 
            <div className="flex flex-row mb-5">
                <div className="basis-4/5">
                    <div className="relative rounded-md shadow-sm mr-5">
                        <input
                            onChange={handleSearchInputChange}
                            type="text"                           
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Pesquisar Produto"
                        />
                    </div> 
                </div>
                <div className="basis-1/5">
                <button 
                    onClick={ () => handleSearchAction(search, categories) }
                    className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Buscar
                </button>
                </div>
            </div>
            <p className="mb-5">Categorias</p>
            <div className="flex flex-row">
                <div className="basis-full">
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <input 
                                id="all"
                                type="checkbox"
                                checked={isAllCategoriesSelected}
                                onChange={handleCategoriesChange}
                                className="form-checkbox rounded text-black mr-3" />
                            <label htmlFor="all">Todas Categorias</label>
                        </div>
                        {categories.map((ctg) => {
                            return (<>
                                <div key={ctg.id}>
                                    <input 
                                        id={ctg.id}
                                        type="checkbox"
                                        checked={ctg.state}
                                        onChange={handleCategoriesChange}
                                        className="form-checkbox rounded text-black mr-3" />
                                    <label htmlFor={ctg.id}>{ctg.name}</label>
                                </div>
                            </>)
                        })}
                    </div>
                </div>
            </div>     
      </>
    )
  }
  