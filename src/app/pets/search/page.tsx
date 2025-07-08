import { getPetsBasedOnSearch } from "@/APICalls/petsApiCall"
import { Pets } from "@/generated/prisma"
import AllPetsCards from '@/components/Pets/AllPetsCards'

interface SearchPage {
    searchParams: { searchText: string }
}

const searchPage = async ({ searchParams: { searchText } }: SearchPage) => {

    const pets: Pets[] = await getPetsBasedOnSearch(searchText)

    return (
        <>
            <h1>  Pets based on   </h1>

            <span className="text-green">{searchText}</span>

            <div className="cards grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-20">
                {pets.map(pet => (
                    <AllPetsCards pets={pet} key={pet.id} />
                ))}
            </div>
        </>
    )
}

export default searchPage