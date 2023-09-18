import { getRepos } from "@/repositories/getRepos.repositories";

async function getAllServices() {
    const getAllRepoAcess = await getRepos.getAllRepo();
    return getAllRepoAcess;
};

async function getOneServices(id: string) {
    const getOneRepoAcess = await getRepos.getOneRepo(id);
    return getOneRepoAcess;
};


export const getServices = { getAllServices, getOneServices };