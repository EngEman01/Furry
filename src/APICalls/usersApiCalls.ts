
//Get Users Count
export async function getUsersCount() {

    const response = await fetch(`http://localhost:3000/api/users/count`);

    if (!response.ok) {
        throw new Error('Failed to get Pets Count');
    }

    const { count } = await response.json() as { count: number };

    return count
}