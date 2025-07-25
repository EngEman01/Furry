import { Pets } from '@/generated/prisma';


//Get All Pets
export async function getAllPets() {

  const response = await fetch(`http://localhost:3000/api/pets/all`)

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();

}


//Get Pets based on pageNumber
export async function getPets(pageNumber: string | undefined): Promise<Pets[]> {
  // Default to page 1 if pageNumber is missing or invalid
  const validPage = pageNumber && Number(pageNumber) > 0 ? pageNumber : "1";
  const response = await fetch(`http://localhost:3000/api/pets?pageNumber=${validPage}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}


//Get Pets Count
export async function getPetsCount(): Promise<number> {

  const response = await fetch(`http://localhost:3000/api/pets/count`);

  if (!response.ok) {
    throw new Error('Failed to get Pets Count');
  }

  const { count } = await response.json() as { count: number };

  return count
}

//Get Pets based on searchText
export async function getPetsBasedOnSearch(searchText: string): Promise<Pets[]> {

  const response = await fetch(`http://localhost:3000/api/pets/search?searchText=${searchText}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
