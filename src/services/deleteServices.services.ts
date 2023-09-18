import deleteRepo from "@/repositories/deleteRepos.repositories";
import { getRepos } from "@/repositories/getRepos.repositories";

export default async function deleteServices (id: string): Promise<void> {
    const checkForRegister = await getRepos.getOneRepo(id);
    if(Number(checkForRegister?.id) !== Number(id)){
        throw new Error("NotFound");
    }

    const deleteRegister = await deleteRepo(id);
};